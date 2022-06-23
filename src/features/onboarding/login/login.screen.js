import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './login.styles';

import {InputLogin} from './components/input-login';

import {validateEmail} from './login.helper';

import {Auth} from 'aws-amplify';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '562455121042-10s7gg19b914lt1b8iuthk4k2lo1godb.apps.googleusercontent.com',
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'amanda@gmail.com',
      password: 'Azerty',
      canGo: true,
    };
  }

  onChangeEmail = email => {
    const password = this.state.password;
    let canGo = false;
    this.setState({
      email,
    });
    if (password.length > 3 && validateEmail(email)) {
      canGo = true;
    }
    this.setState({
      canGo,
    });
  };

  onChangePassword = password => {
    const {email} = this.state;
    let canGo = false;
    this.setState({
      password,
    });
    if (password.length > 3 && validateEmail(email)) {
      canGo = true;
    }
    this.setState({
      canGo,
    });
  };

  Logout = async () => {
    try {
      const response = await Auth.signOut();
      console.log('response logout:', JSON.stringify(response));
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  seConnecter = async () => {
    try {
      const user = await Auth.signIn(this.state.email, this.state.password);
      //const user = await Auth.signIn(this.state.email, this.state.password);
      console.log('token generated:', JSON.stringify(user));
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  seConnecterAvecGoogle = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      auth()
        .signInWithCredential(googleCredential)
        .then(response => {
          console.log('user infos:', response);
        });
    } catch (err) {
      console.log('google error:', JSON.stringify(err));
    }
  };

  creerMonCompte = async () => {
    //Firebase:
    //Je crée mon compte
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

    //Je crée mon compte
    try {
      /*const { user } = await Auth.signUp({
					//username: this.state.email,
					username: '+33652026209',
					password: this.state.password
				});
				console.log(user);*/
    } catch (err) {
      console.log('err:', JSON.stringify(err));
    }

    //je valide mon compte
    try {
      /*const response = await Auth.confirmSignUp(
					this.state.email,
					'457544'
				);*/

      // resend l'otp à l'utilisateur si ça l'otp a expiré
      //const response = await Auth.resendSignUp(this.state.email);

      console.log('response:', JSON.stringify(response));
    } catch (err) {
      console.log('err', JSON.stringify(err));
    }
    //const monNum = '+33652026209';
    try {
      /*Auth.forgotPassword(monNum)
				.then(data => console.log(data))
				.catch(err => console.log(err));*/
      //console.log('back office token')
      /*const { user } = await Auth.signUp({
					username: 'mora.laza-sc@airliquide.com',
					password: 'Azerty.1'
				});*/
      console.log('ok');
      /*
				const { user } = await Auth.signUp({
					username: '+33652026209',
					password: 'azerty'
				});
				*/
      /*
				Auth.forgotPasswordSubmit(monNum, '971912', 'azerty')
				.then(data => console.log(data))
				.catch(err => console.log(err));
				*/
      //const response = await Auth.confirmSignUp('mora.laza-sc@airliquide.com', '247404');
      console.log('response:', JSON.stringify(response));
      //console.log('utilisateur créé:', user);
    } catch (error) {
      console.log('error:', JSON.stringify(error));
      if (error.code === 'UsernameExistsException') {
        console.log('utilisateur Existant');
        /*Auth.forgotPassword(monNum)
						.then(data => console.log(data))
						.catch(err => console.log(err));*/
        /*Auth.forgotPasswordSubmit(monNum, '983957', 'azerty')
					.then(data => console.log(data))
					.catch(err => console.log(err));*/

        //await Auth.resendSignUp(monNum);
        console.log('code resent successfully');
      }
      //console.log('error signing up:', JSON.stringify(error));

      //UsernameExistsException
      /*Auth.forgotPassword('+33687783534')
						.then(data => console.log(data))
						.catch(err => console.log(err));

				// Collect confirmation code and new password, then
				Auth.forgotPasswordSubmit(username, code, new_password)
						.then(data => console.log(data))
						.catch(err => console.log(err));*/
    }
    /*try {
				const response = await Auth.confirmSignUp('lucas.diams@hotmail.fr', '445765');
				console.log('response:', JSON.stringify(response))
			} catch (error) {
					console.log('error confirming sign up', error);
			}*/
    /*try {
				const { user } = await Auth.signUp({
					username: this.state.email,
					password: this.state.password,
					attributes: {
						email: this.state.email // optional
					}
				});
				console.log('utilisateur créé:', user);
			} catch (error) {
				console.log('error signing up:', error);
			}*/
  };

  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/whiteArrow.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <InputLogin
          titre="Adresse e-mail ou nom d'utilisateur"
          type="email"
          onChangeText={newValue => this.onChangeEmail(newValue)}
          value={this.state.email}
        />
        <InputLogin
          titre="Mot de passe"
          type="password"
          onChangeText={password => this.onChangePassword(password)}
          value={this.state.password}
        />

        <TouchableOpacity
          style={
            this.state.canGo
              ? styles.buttonConnectEnabled
              : styles.buttonConnect
          }
          onPress={this.creerMonCompte}>
          <Text style={styles.buttonContent}>Créer mon compte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            this.state.canGo
              ? styles.buttonConnectEnabled
              : styles.buttonConnect
          }
          onPress={this.seConnecterAvecGoogle}>
          <Text style={styles.buttonContent}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.Logout}
          style={styles.buttonWithoutConnexion}>
          <Text style={styles.buttonWithoutConnexionContent}>Logout !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
