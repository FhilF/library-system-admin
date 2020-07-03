import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../../screens/About";

const Stack = createStackNavigator();

function AboutStack({ navigation }) {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        // headerLeft: () => <HeaderButton toggleDrawer={toggleDrawer} />,
        // headerStyle: {
        //   backgroundColor: "#f4511e", //Set Header color
        // },
        // headerTintColor: "#fff", //Set Header text color
        // headerTitleStyle: {
        //   fontWeight: "bold", //Set Header text style
        // },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About" }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
