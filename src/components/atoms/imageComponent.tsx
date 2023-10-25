import React from "react";
import { Image, StyleSheet } from "react-native";

interface ImageProps {
  sourceUri: string;
  style?: object;
}

const CustomImage: React.FC<ImageProps> = ({ sourceUri, style }) => {
  return <Image source={{ uri: sourceUri }} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 80, // Personaliza el ancho según tus necesidades
    height: 80, // Personaliza la altura según tus necesidades
  },
});

export default CustomImage;
