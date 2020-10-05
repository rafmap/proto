import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './telas/TelaInicio';
import TelaVerbos from './telas/TelaVerbos';

const Navegacao = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Navegacao.Navigator>
      <Navegacao.Screen name="Inicio" component = { TelaInicio } options = { { title: 'Answer the Question' } } />
      <Navegacao.Screen name="Verbos" component = { TelaVerbos } options = { { title: 'List of Irregular Verbs' } } />
    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;