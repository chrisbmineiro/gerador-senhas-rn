import React from "react";
import { styles } from "./BatTextInputStyles";
import { TextInput } from "react-native";

export default function BatTextInput() {
  return <TextInput placeholder="senha" style= {styles.input} />;
}
