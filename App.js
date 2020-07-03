import React, { Component } from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as firebase from "firebase";
import { StyleProvider } from "native-base";

import UserStack from "./src/routes/UserStack";
import AboutStack from "./src/routes/AboutStack";
import getTheme from "./src/theme/components";
import material from "./src/theme/variables/material";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

var firebaseConfig = {
  apiKey: "AIzaSyBIa5152mM6RCpbvC44O5FltRPzKyc8CFU",
  authDomain: "book-locator-app.firebaseapp.com",
  databaseURL: "https://book-locator-app.firebaseio.com",
  projectId: "book-locator-app",
  storageBucket: "book-locator-app.appspot.com",
  messagingSenderId: "618916272100",
  appId: "1:618916272100:web:1c11375859ed51d517d9f1",
};
// Initialize Firebase

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isSignedIn: false,
    };
  }

  async componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Lato: require("./src/assets/fonts/Lato-Regular.ttf"),
      FiraSans: require("./src/assets/fonts/FiraSans-Regular.ttf"),
      PTSans: require("./src/assets/fonts/PTSans-Regular.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isSignedIn } = this.state;
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <NavigationContainer>
          {isSignedIn ? (
            <Drawer.Navigator
              drawerContentOptions={{
                activeTintColor: "#e91e63",
                itemStyle: { marginVertical: 5 },
              }}
            >
              <Drawer.Screen
                name="Home"
                options={{ drawerLabel: "First page Option" }}
                component={HomeStack}
              />
              <Drawer.Screen
                name="About"
                options={{ drawerLabel: "Second page Option" }}
                component={AboutStack}
              />
            </Drawer.Navigator>
          ) : (
            <UserStack/>
          )}
        </NavigationContainer>
      </StyleProvider>
    );
  }
}

export default App;
