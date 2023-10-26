# Application documentation

small explanation of each part of the code of the application in question which details the interface of each component and a brief explanation of how it functions and its implementation in the application.

documentation writing by emmanuel sanchez.

this application is create for Enmanuel Sanchez 2021-0618 / Frank Luis duarte 2021-0226

### table of Contents
- ### atoms
    - buttonComponent
    - imageComponent
    - searchComponents
    - textComponent
- ### molecules
    - dataGamemolecule
- ### organisms
    - myAppData
- ### Functionality
    - Purpose
    - Structure
    - Git-Branch

## atoms

smaller part of interface

### buttonComponent

Basic Structure
```
interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
}
```
Functionality

Basic function of a button to call events

Implementation

implemented in the dataGames molecule component


### imageComponent

Basic Structure
```
interface ImageProps {
  sourceUri: string;
  style?: object;
}
```
Functionality

container to get and call images from outside

Implementation

implemented in the dataGames molecule component and myAppData

### searchComponents

Basic Structure
```
interface SearchBarState {
  search: string;
}
```

```
  updateSearch = (text: string) => {
    this.setState({ search: text });
  };
```


Functionality

the Function that updates the search on the object itself

search bar that serves as a guide to move around the

Implementation

Top of the application

### textComponent

Basic Structure
```
interface TextProps {
  text: string;
  style?: TextStyle;
}

```
Functionality

Basic object to capture text in the application

Implementation

implemented in the dataGames molecule component and myAppData


## molecules

Set of all the atoms of the app

### dataGamemolecule
Basic Structure
```
interface MyCustomComponentProps {
  imageSource: string;
    appNameText1: string;
    appNameText2: string;
  buttonText: string;
  buttonAction: () => void;
}

```
Functionality

essential molecule of the application since it shows the items to show all the content of the app

Implementation

central part of the application and content

## organisms

Set of all app components

### myAppData

Basic Structure
```
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
```
Functionality

Pre-test the application using a joint model of the components

Implementation

not implementing, just testing

### Functionality

## Purpose

simulate a playstore type playstore

## Structure

Search Bar > Navigation Bar > Container

