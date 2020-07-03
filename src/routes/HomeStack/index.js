import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Icon } from "native-base";
import Home from "../../screens/Home";
import HeaderButtonLeft from "../../components/HeaderButtonLeft";

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <HeaderButtonLeft toggleDrawer={toggleDrawer}/>
        ),
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
  );
}

export default HomeStack;
