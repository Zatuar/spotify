import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const LandingButton = () => {
    return (
        <TouchableOpacity style={styles.boutton1}>
          <Text style= { styles.textButton1 }>S'inscrire gratuitement</Text>
        </TouchableOpacity>
    )
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
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
	}
})

export default LandingButton;