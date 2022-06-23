import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Landing from '../features/onboarding/landing/landing.screen'
import Landingfct from '../features/onboarding/landingfct/landing.screen'
import Login from '../features/onboarding/login/login.screen'

import CartePrincipale from '../features/carte/carte-principale/carte-principale.screen'

const Stack = createNativeStackNavigator();

const rootContainer = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
							screenOptions={{
								headerShown: false
							}}
						>
							<Stack.Screen
								name="landing"
								component={Landing}
							/>
							<Stack.Screen
								name="landingfct"
								component={Landingfct}
							/>
							<Stack.Screen
								name="login"
								component={Login}
							/>
							<Stack.Screen
								name="carte-principale"
								component={CartePrincipale}
							/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default rootContainer;
