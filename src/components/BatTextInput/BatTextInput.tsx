import React from "react";
import { styles } from "./BatTextInputStyles";
import { TextInput } from "react-native";

interface BatTextInputProps {
  pass: string;
}

export default function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput placeholder="Senha Gerada" style={styles.input} value={props.pass} />
  );
}
