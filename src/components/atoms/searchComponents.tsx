import React, { Component } from "react";
import { View, TextInput, StyleSheet, SafeAreaView } from "react-native";

interface SearchBarState {
  search: string;
}

class SearchBar extends Component<{}, SearchBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      search: "",
    };
  }

  updateSearch = (text: string) => {
    this.setState({ search: text });
    // Puedes realizar acciones adicionales, como filtrar resultados, basándote en el valor de búsqueda.
  };

  render() {
    const { search } = this.state;

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="🔍 Juegos, apps, historias y mas..."
            value={search}
            onChangeText={this.updateSearch}
          />
          {/* Puedes mostrar los resultados de búsqueda debajo de la barra de búsqueda */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: "white", // Ajusta el color de fondo según tus preferencias
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default SearchBar;
