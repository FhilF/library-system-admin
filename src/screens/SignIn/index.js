import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  View,
  KeyboardAvoidingView 
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Button,
  Text,
} from "native-base";
import { BG_COLOR } from "../../theme/variables/colors";
import banner from "../../assets/images/sign-in-banner.jpg";
import imageDisplay1 from "../../assets/images/sign-in-image-1.png";
import imageDisplay2 from "../../assets/images/sign-in-image-2.png";

import Input from "../../components/Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const win = Dimensions.get("window");
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.parent}>
        <StatusBar backgroundColor="#0746c5" barStyle="light-content" />
        <Image style={styles.banner} source={banner} />
        <View style={styles.form}>
          <Form>
            <Input label="Email" />
            <Input label="Password" />
          </Form>
          <View
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button style={styles.btn} primary rounded>
              <Text style={styles.btnText}>Sign in</Text>
            </Button>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Image style={styles.imageDisplay} source={imageDisplay2} />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "PTSans",
  },
  parent: {
    backgroundColor: BG_COLOR,
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 45,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "800",
  },
  banner: {
    width: null,
    height: 200,
    resizeMode: "cover",
  },
  imageDisplay: {
    width: null,
    height: 320,
    resizeMode: "cover",
    // justifyContent: "flex-end",
  },
  bottomView: {
    width: '100%',
    position: 'absolute', //Here is the trick
    bottom: -140, //Here is the trick
  },
});

export default Login;
AppRegistry.registerComponent("Login", () => Login);
