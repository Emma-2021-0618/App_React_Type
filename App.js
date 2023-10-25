import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/atoms/searchComponents';
import Button from './src/components/atoms/buttonComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Button
        title="Mi Botón"
        style={{ backgroundColor: "green" }} // Personaliza los estilos aquí
        textStyle={{ color: "white" }} // Personaliza los estilos del texto aquí
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
