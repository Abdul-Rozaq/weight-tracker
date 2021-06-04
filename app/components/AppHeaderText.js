import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

export default function AppHeaderText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.header, style]} {...otherProps}>
      {children}
    </Text>
  );
}
