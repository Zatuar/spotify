import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

const LandingSocialButton = ({
	type='facebook'
}) => {
	const socialName = type === 'facebook' ? 'Facebook' : 'Google'
	const socialLogo = type === 'facebook' ? require('../../../../assets/facebook.png') :
	require('../../../../assets/google.png');

    return (
        <TouchableOpacity style={styles.button2}>
          <Image source={socialLogo}
          style={styles.icon} />
          <Text style={styles.textButton2}>Continuer avec {socialName}</Text>
        </TouchableOpacity>
    )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
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

export default LandingSocialButton;