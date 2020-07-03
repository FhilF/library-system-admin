import React, { Component } from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sriraman",
    };
  }
  componentDidMount() {}
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "800",
  },
});

export default Home;
AppRegistry.registerComponent("Home", () => Home);
