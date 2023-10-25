import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from './src/components/atoms/searchComponents';
import MyCustomComponent from './src/components/molecules/dataGamemolecule';



export default function App() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />

      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      <MyCustomComponent
        imageSource="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux"
        appNameText1="Judo"
        appNameText2="clases de judo profesional"
        buttonText="Obtener"
        
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
