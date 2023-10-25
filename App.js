import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import SearchBar from './src/components/atoms/searchComponents';
import TextApp  from './src/components/atoms/textComponent';
import Icon from 'react-native-ico-material-design';
import MyCustomComponent from './src/components/molecules/dataGamemolecule';



export default function App() {
  return (

   
    
    <ScrollView style={styles.container}>
      
      <TextApp text=' ' />
      
      <SearchBar />

      <View style={styles.Navcontaine}>
       <View style={styles.Navbar}>
        <Pressable style={styles.Iconbehave}>
        <Icon name="gamepad" height="20" width="20" />
        </Pressable>
        <Pressable style={styles.Iconbehave}>
        <Icon name="black-envelope-email-symbol" height="20" width="20" />
        </Pressable>
        <Pressable style={styles.Iconbehave}>
        <Icon name="bookmark-button" height="20" width="20" />
        </Pressable>
        <Pressable style={styles.Iconbehave}>
        <Icon name="users-social-symbol" height="20" width="20" />
        </Pressable>
        <Pressable style={styles.Iconbehave}>
        <Icon name="add-user-button" height="20" width="20" />
        </Pressable>
       </View>
      </View>

      <TextApp text=' ' />
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
  Navcontaine:{
    position: "absolute",
    alignItems: "center",
    top: 130,
    left: 20,
    
  },
  Navbar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
    },
    Iconbehave: {
      padding: 14
    }

});
