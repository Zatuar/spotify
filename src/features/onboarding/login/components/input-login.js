import * as React from 'react'
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Alert
} from 'react-native';
const {width, height} = Dimensions.get('window');

export const InputLogin = ({
	titre='Infomration',
	type='normal',
	value='',
	onChangeText,
}) => {
	return (
		<>
			<Text style={styles.inputLabel}>
				{titre}
			</Text>
			<View style={styles.inputContainer}>
			<TextInput style={styles.inputContent}
				value={value}
				onChangeText={onChangeText}
				keyboardType={type === 'email' ? 'email-address' : 'default'}
				secureTextEntry={type === 'password'}  />
				{type === 'password' ? <TouchableOpacity>
						<Image source={require('../../../../assets/whiteEyeOpen.png')}
						style={styles.icon} />
				</TouchableOpacity> : null}
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	inputLabel:{
		color: 'white',
		fontSize: 28,
		marginTop: 40,
		fontFamily: 'Montserrat-Bold'
	},
	inputContainer:{
		backgroundColor: '#414141',
		width: width * 0.90,
		height: 45,
		alignSelf: 'center',
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 5
	},
	inputContent:{
		flex:1,
		color: 'white',
		fontSize: 16,
		fontFamily: 'Montserrat-Medium'
	},
	icon: {
		width: 40,
		height: 40,
		marginRight: 5
	},
})

export default InputLogin;

