import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import SearchBar from './src/components/atoms/searchComponents';
import TextApp  from './src/components/atoms/textComponent';
import Icon from 'react-native-ico-material-design';
import MyCustomComponent from './src/components/molecules/dataGamemolecule';



export default function App() {
  return (
    <ScrollView style={styles.container}>
      <TextApp text=" " />

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

      <TextApp text=" " />
      <MyCustomComponent
        imageSource="https://img.poki.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/d5d34cb9ce7b617b93338982aa0958ab.png"
        appNameText1="Jetpack Joyride"
        appNameText2="The best endless running game!"
        buttonText="Obtener"
      />
      <MyCustomComponent
        imageSource="https://play-lh.googleusercontent.com/6sj0QodYVIbxXbsEGx4iAiOXljSG0yhsRFJ_IjUnIYdm13-0gHSwcppBCpe4qlz3Noc"
        appNameText1="MLB Clutch Hit Baseball"
        appNameText2="Sports"
        buttonText="Obtener"
      />
      <MyCustomComponent
        imageSource="https://play-lh.googleusercontent.com/4zLzs-gRiu6A0F7zMyKU9Gu1s6PpfbmWKyXutD8Iuc3ItHeVYk-Cp7leiOJiyVqctQVN"
        appNameText1="Dr. Parking 4"
        appNameText2="Simulation"
        buttonText="Obtener"
      />
      <MyCustomComponent
        imageSource="https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm"
        appNameText1="Clash of Clans"
        appNameText2="Lead your clan to victory"
        buttonText="Obtener"
      />
      <MyCustomComponent
        imageSource="https://media.es.wired.com/photos/64dad651532fc59e0e8d53a4/1:1/w_1080,h_1080,c_limit/EA%20Sports.jpg"
        appNameText1="EA Sports FC MOBILE"
        appNameText2="Start with stars"
        buttonText="Obtener"
      />
      <MyCustomComponent
        imageSource="https://play-lh.googleusercontent.com/JC2nrEFjMfyE1ViyhH3oOwrt20L9nv90alE5hM-9uuBc3ron78s2c5Q_-N8UTWUHp1U"
        appNameText1="Banana Kong"
        appNameText2="Casuals"
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
    alignItems: "center",
    marginVertical: 5,
    
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
