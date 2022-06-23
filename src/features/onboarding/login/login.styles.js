import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: 'black',
      paddingHorizontal: 20,
      paddingVertical: 25
    },
    backButton: {
      width: 18,
      height: 18
    },
    buttonConnect:{
      marginTop: 50,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5A5A5A',
      width: width * 0.40,
      height: 50,
      borderRadius: 25
    },
    buttonContent:{
      fontFamily: 'Montserrat-Medium'
    },
    buttonConnectEnabled:{
      marginTop: 50,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: width * 0.40,
      height: 50,
      borderRadius: 25
    },
    buttonWithoutConnexion:{
      marginTop:40,
      borderColor: '#5A5A5A',
      borderWidth: 1,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.55,
      borderRadius:25,
      height: 25
    },
    buttonWithoutConnexionContent:{
      color: 'white',
      fontFamily: 'Montserrat-Bold',
      fontSize: 12,
    }

})

export default styles;