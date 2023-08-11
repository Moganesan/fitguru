import React from "react";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Workouts from "./Screens/Workouts";
import Waiting from "./Screens/Waiting";
import Start from "./Screens/Start";
import Ripple from "react-native-material-ripple";
import Rest from "./Screens/Rest";
import Start2 from "./Screens/Start2";
import Completed from "./Screens/Completed";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Workouts"
          component={Workouts}
        />
        <Stack.Screen name="Waiting" component={Waiting} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Start2" component={Start2} />
        <Stack.Screen name="Rest" component={Rest} />
        <Stack.Screen name="Completed" component={Completed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
