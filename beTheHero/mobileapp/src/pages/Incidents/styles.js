import {StyleSheet} from 'react-native';

import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
         flex:1,
         paddingHorizontal: 24,
         paddingTop: Constants.statusBarHeight + 20,
         backgroundColor: '#F0F2F0',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight:'bold',
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description:{
        fontSize:16,
        lineHeight: 24,
        color: '#737380',
    },
    incidentList:{
        marginTop: 5,
        backgroundColor: '#F0F2F0',
    },
    incident:{
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:5,
        marginBottom: 12,
       // borderColor: '#e02041',
        //borderWidth: 2,
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop:8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
});