import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SignUpScreen from '../screens/SignUp';
import MenuScreen from '../screens/MenuScreen';
import HomeScreen from '../screens/HomePage';
import UserScreen from '../screens/UserScreen';
import ImcFormScreen from '../screens/ImcFormScreen';
import foodScreen from '../screens/foodScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Imc" component={ImcFormScreen} options={{ headerShown: false }} />
      <Stack.Screen name="FoodList" component={foodScreen} options={{ headerShown: true ,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize:0
          },}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
