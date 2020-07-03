import React, { Component } from "react";
import {
  Button,
  Icon,
} from "native-base";

function HeaderButtonLeft({ toggleDrawer }) {
  return (
    <Button transparent onPress={() => toggleDrawer()}>
      <Icon name="menu" style={{ color: "white" }} />
    </Button>
  );
}

export default HeaderButtonLeft;
