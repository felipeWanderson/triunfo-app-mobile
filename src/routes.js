import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Fichas from './pages/Fichas';
import Formulario from './pages/Formulario';
import Citys from './pages/Citys';
import Types from './pages/Types';

const Auth = createStackNavigator();

export default function Routes() {
  return (
    /*<NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Fichas" component={Fichas}/>
        <AppStack.Screen name="Formulario" component={Formulario}/>
        <AppStack.Screen name="Citys" component={Citys}/>
        <AppStack.Screen name="Types" component={Types}/>
      </AppStack.Navigator>
    </NavigationContainer>*/

    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Fichas" component={Fichas} />
      <Auth.Screen name="Formulario" component={Formulario} />
      <Auth.Screen name="Citys" component={Citys} />
      <Auth.Screen name="Types" component={Types} />
    </Auth.Navigator>
  );
}