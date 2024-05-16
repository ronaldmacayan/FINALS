import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Splash from './Screens/SplashScreen';
import Trivia from './Screens/Trivia';
import AnswerScreen from './Screens/AnswerScreen';
import FourPicsOneWord from './Screens/FourPicsOneWord';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trivia">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="Trivia" component={Trivia}/>
        <Stack.Screen name="AnswerScreen" component={AnswerScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="FourPicsOneWord" component={FourPicsOneWord} options={{ headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;