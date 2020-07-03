import React, { Component, useState } from "react";
import { Container, Input, Item, Label } from "native-base";
import { StyleSheet } from "react-native";
import {
  PRIMARY_COLOR,
  LIGHTER_PRIMARY_COLOR,
  FONT_COLOR,
  SECONDARY_COLOR
} from "../../theme/variables/colors";

function CustomInput({ label }) {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <Item stackedLabel style={onFocus ? styles.itemFocus : styles.item}>
      <Label style={styles.label}>{label}</Label>
      <Input
        style={styles.input}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
      />
    </Item>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "PTSans",
    fontSize: 18,
    color: FONT_COLOR,
  },
  label: {
    color: SECONDARY_COLOR,
  },
  item: {
    borderColor: LIGHTER_PRIMARY_COLOR,
  },
  itemFocus: {
    borderBottomWidth: 2,
    borderColor: PRIMARY_COLOR,
  },
});

export default CustomInput;
