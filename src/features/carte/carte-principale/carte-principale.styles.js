import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    main:{
      height: height,
      width,
      alignItems: 'center'
    },
    logo:{
      //alignSelf:'flex-start',
      width:44,
      height:44,
      marginTop: height * 0.46
    },
    titre:{
      marginTop:15,
      color: 'white',
      fontSize:26,
      textAlign: 'center',
      fontFamily: 'Montserrat-Bold'
    },
    button2:{
      marginTop: 10,
      backgroundColor:'black',
      width: '90%',
      height: 40,
      alignItems: 'center',
      overflow:'hidden',
      justifyContent: 'center',
      borderRadius:20,
      borderWidth: 1,
      borderColor: 'grey',
      flexDirection: 'row'
    },
    button3:{
      marginTop: 10,
      backgroundColor:'black',
      width: '90%',
      height: 40,
      alignItems: 'center',
      overflow:'hidden',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    icon:{
      width: 30,
      height:30,
      position:'absolute',
      left:10
      //marginLeft: 20
    },
    textButton2:{
      color: 'white',
      fontFamily: 'Montserrat-Bold'
      /*textAlign: 'center',
      flex:1*/
    }
  })

  export default styles;