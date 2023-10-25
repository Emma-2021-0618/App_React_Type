import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/atoms/searchComponents';
import Button from './src/components/atoms/buttonComponent';
import CustomImage from './src/components/atoms/imageComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Button
        title="Mi Botón"
        style={{ backgroundColor: "green" }} // Personaliza los estilos aquí
        textStyle={{ color: "white" }} // Personaliza los estilos del texto aquí
      />
      <CustomImage
        sourceUri="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/ufbu7eoorghfd9qqbwux" // URL de la primera imagen
        style={{ marginBottom: 10 }} // Personaliza los estilos aquí
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
