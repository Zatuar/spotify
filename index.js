/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import rootContainer from './src/navigation'
import app from './src/core/app'
import {name as appName} from './app.json';

import Amplify from 'aws-amplify'
import awsconfig from './src/config/aws-exports'
Amplify.configure(awsconfig)

//AppRegistry.registerComponent(appName, () => rootContainer);
AppRegistry.registerComponent(appName, () => app);
