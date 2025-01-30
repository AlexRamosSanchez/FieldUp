import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import BuscadorPartidos from "./components/BuscadorPartidos";
import ReservationScreen from "./components/ReservarPista";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="BuscadorPartidos" component={BuscadorPartidos} />
        <Stack.Screen name="ReservarPista" component={ReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
