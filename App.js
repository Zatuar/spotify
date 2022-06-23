import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window')
/*
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
*/

class App extends React.Component {
  render(){
    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.main}
      >
        <Image
        source={require('./assets/spotify.png')}
        style={styles.logo}
        />
        <Text style={   styles.titre    }>
          Des millions de titres.{'\n'}Gratuits sur Spotify.
        </Text>
        <TouchableOpacity style={styles.boutton1}>
          <Text style= { styles.textButton1 }>S'inscrire gratuitement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={require('./assets/google.png')}
          style={styles.icon} />
          <Text style={styles.textButton2}>Continuer avec Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={require('./assets/facebook.png')}
          style={styles.icon} />
          <Text style={styles.textButton2}>Continuer avec Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.textButton2}>Se connecter</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

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
  boutton1:{
    marginTop: 80,
    backgroundColor:'#2cf262',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden',
    borderRadius:20
  },
  textButton1:{
    color:'black',
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


export default App;
