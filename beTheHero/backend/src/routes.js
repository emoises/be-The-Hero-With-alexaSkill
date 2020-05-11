const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router();

routes.post('/sessions',celebrate({
    [Segments.BODY]:Joi.object().keys({
        id: Joi.string().required().length(8),
    })
}), sessionController.create);

routes.get('/ongs',ongController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().max(11).min(10),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),ongController.create);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().length(8).required(),
    }).unknown(),
}) , profileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),
incidentController.index)

routes.post(
    '/incidents', 
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().length(8).required(),
        }).unknown(),
    }),
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        }),
    }),
    incidentController.create,
    );

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),incidentController.delete);

module.exports = routes;