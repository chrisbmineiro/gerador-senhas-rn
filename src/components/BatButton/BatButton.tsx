import { Text, Pressable, ToastAndroid } from "react-native";
import React from "react";
import { styles } from "./BatButtonStyles";
import BatTextInput from "../BatTextInput/BatTextInput";
import { generatePassword } from "../../services/passwordService";
import * as Clipboard from "expo-clipboard";

export default function BatButton() {
  const [password, setPassword] = React.useState("");

  function handlePasswordGen() {
    let generatedPassword = generatePassword();
    setPassword(generatedPassword);
  }

  function handleCopyButton() {
    if (password === "") return;
    Clipboard.setStringAsync(password);
    ToastAndroid.show('Senha copiada com sucesso!', ToastAndroid.SHORT)
    setPassword("");
  }

  return (
    <>
      <BatTextInput pass={password} />
      <Pressable style={styles.buttonContainer} onPress={handlePasswordGen}>
        <Text style={styles.text}>GERAR</Text>
      </Pressable>

      <Pressable style={styles.buttonContainer} onPress={handleCopyButton}>
        <Text style={styles.text}>COPIAR</Text>
      </Pressable>
    </>
  );
}
