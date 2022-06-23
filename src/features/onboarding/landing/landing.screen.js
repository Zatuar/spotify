import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from './landing.styles'
import LandingButton from './components/landing-button'
import LandingButton1 from './components/landing-button1'
import LandingButton2 from './components/landing-button2'
import LandingSocialButton from './components/landing-social-button'
import landingServices from './landing.services'
import { updateVins, setName } from './landing.redux'
import {connect} from 'react-redux';
/*
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
*/

const api = landingServices.create();
class Landing extends React.Component {
  constructor(props){
    super(props)
    this.state={
      vins:this.props.vins,
      vendeurs: []
    }
  }

  componentDidMount(){
    //après le constructor
    //lancé au démarage de l'app
    console.log('vins stockés fct:', this.state.vins)
  }

  openSeConnecter = () => {
    this.props.navigation.navigate('login')
  }

  recupererVins = async () => {
    const response = await api.getVins()
    if(response.ok && response.data){
      this.props.updateVins(response.data)
      this.setState({
        vins: response.data
      })
    }
  }

  envoyerVin = async () => {
    const monVin = this.state.vins[2]
    monVin.price = 7500
    const response = await api.sendVin(monVin)
    //console.log('response:', JSON.stringify(response))
  }

  goToLandingFct = () => {
    this.props.navigation.navigate('landingfct')
  }

  goToMap = () => {
    this.props.navigation.navigate('carte-principale')
  }

  updateName = () => {
    this.props.setName('tata')
  }

  render(){
    return (
      <View>
        <TouchableOpacity style={styles.button3}
        onPress={this.recupererVins}>
          <Text style={styles.textButton2}>Liste des vins Class</Text>
        </TouchableOpacity>
        <Text>
          lecture name: {this.props.name}
        </Text>
        <Text>
          liste des vins:
        </Text>
        <FlatList
        data={this.state.vins}
        renderItem={({item, index}) => (
          <Text>{item.title}</Text>
        )}
        />
        <TouchableOpacity style={styles.button3}
        onPress={this.updateName}>
          <Text style={styles.textButton2}>Update Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}
        onPress={this.envoyerVin}>
          <Text style={styles.textButton2}>Envoyer mon produit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}
        onPress={this.goToLandingFct}>
          <Text style={styles.textButton2}>Ecran par Fonction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}
        onPress={this.goToMap}>
          <Text style={styles.textButton2}>Carte dans l'app</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    vins: state.landing.vins,
    name: state.landing.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateVins: (vins) => dispatch(updateVins(vins)),
    setName: (name) => dispatch(setName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
