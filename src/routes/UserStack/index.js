import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import SignIn from "../../screens/SignIn";

const Stack = createStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Sign In" component={SignIn} />
    </Stack.Navigator>
  );
}

export default UserStack;
