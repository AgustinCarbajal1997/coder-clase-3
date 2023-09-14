import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Searcher from "../screens/Searcher";
import Header from "../components/Header";
import THEME from "../utils/themes";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header />,
            statusBarColor: THEME.colors.darkred,
          }}
        />
        <Stack.Screen
          name="Searcher"
          component={Searcher}
          options={{
            title: "Buscador de lugares",
            headerTintColor: THEME.colors.orange,
            statusBarColor: THEME.colors.darkred,
            headerStyle: {
              backgroundColor: THEME.colors.darkBlue,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
