import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../atoms/searchComponents";
import MyCustomComponent from "../molecules/dataGamemolecule";

const data = [
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 1",
    appNameText2: "Aplicación 1",
    buttonText: "Botón 1",
  },
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 2",
    appNameText2: "Aplicación 2",
    buttonText: "Botón 2",
  },
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 3",
    appNameText2: "Aplicación 3",
    buttonText: "Botón 3",
  },
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 3",
    appNameText2: "Aplicación 3",
    buttonText: "Botón 3",
  },
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 3",
    appNameText2: "Aplicación 3",
    buttonText: "Botón 3",
  },
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 3",
    appNameText2: "Aplicación 3",
    buttonText: "Botón 3",
  },
  {
    imageSource:
      "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux",
    appNameText1: "Aplicación 3",
    appNameText2: "Aplicación 3",
    buttonText: "Botón 3",
  },
];

function myAppData() {
  return (
    
      <ScrollView style={styles.container}>
        {data.map((item, index) => (
          <MyCustomComponent
            key={index}
            imageSource={item.imageSource}
            appNameText1={item.appNameText1}
            appNameText2={item.appNameText1}
            buttonText={item.buttonText}
            buttonAction={() => {
               console.log(`Botón ${item.appNameText1} presionado`);
            }}
          />
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default myAppData;
