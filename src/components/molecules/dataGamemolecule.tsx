import React from "react";
import { View, StyleSheet } from "react-native";
import CustomImage from "../atoms/imageComponent";
import TextApp from "../atoms/textComponent";
import Button from "../atoms/buttonComponent";

interface MyCustomComponentProps {
  imageSource: string;
    appNameText1: string;
    appNameText2: string;
  buttonText: string;
  buttonAction: () => void;
}

const MyCustomComponent: React.FC<MyCustomComponentProps> = ({
  imageSource,
  appNameText1,
  appNameText2,
  buttonText,
  buttonAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <CustomImage sourceUri={imageSource} style={styles.image} />
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.textContainer}>
          <TextApp text={appNameText1} style={styles.appNameText} />
          <TextApp text={appNameText2} style={styles.versionText} />
        </View>
        <Button
          title={buttonText}
          onPress={buttonAction}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Disposición horizontal
    alignItems: "center",
    padding: 10,
  },
  leftColumn: {
    flex: 1, // Ocupa el 50% del ancho
  },
  rightColumn: {
    flex: 1, // Ocupa el 50% del ancho
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  appNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  versionText: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    backgroundColor: "blue",
  },
});

export default MyCustomComponent;