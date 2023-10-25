import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface TextProps {
  text: string;
  style?: TextStyle;
}

const TextApp: React.FC<TextProps> = ({ text, style }) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black", // Color de texto predeterminado
  },
});

export default TextApp;
