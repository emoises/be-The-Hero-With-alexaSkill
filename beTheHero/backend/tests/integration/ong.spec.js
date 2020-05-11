const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async ()=> {
        await connection.migrate.latest();
    });
    afterAll( async () => {
        await connection.destroy();
    });
    it('should be able to create a new ONG.', async () => {
         const response = await request(app)
         .post('/ongs')
         .send({
            name: "APAD2",
            email: "email@email.com",
            whatsapp: "21909092121",
            city: "Rio de janeiro",
            uf: "RJ",
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
});