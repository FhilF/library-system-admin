import React, { Component } from "react";
import { View, Text, AppRegistry } from "react-native";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "About",
    };
  }
  render() {
    return (
      <View>
        <Text> Hi, {this.state.name}</Text>
      </View>
    );
  }
}

export default About;
AppRegistry.registerComponent("About", () => About);
