import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import Home from "../pages/home";
import { StatusBar } from "react-native";
const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor: '#222'
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
          fontWeight: '500'
          }
        }}>
        <Stack.Screen
        name='Sw App'
        component={Home}
        />
        <Stack.Screen
        name='People'
        component={PeoplePage}
        />
        <Stack.Screen
        name='Planets'
        component={PlanetsPage}
        />
        <Stack.Screen
        name='Starships'
        component={StarshipsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation;