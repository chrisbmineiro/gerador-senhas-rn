import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import BatLogo from "../../components/BatLogo/BatLogo";
import BatButton from "../../components/BatButton/BatButton";
import { LinearGradient } from 'expo-linear-gradient'

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <LinearGradient colors={['#3D3D3D', '#4D4D4D', '#5D5D5D']}>
          <BatLogo />
        </LinearGradient>
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
