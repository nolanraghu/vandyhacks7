import * as React from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {LocationList} from './Locations'
import {AskPermission} from './radar'

const Stack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Menu}
          options={{ title: 'Welcome'}}/>
          <Stack.Screen 
          name="List of Results"
          component={LocationList}
          options= {{ headerLeft: ({ navigation }) => { <HeaderBackButton onPress={navigation.goBack} /> } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};     

//Final Stack Screen: "Final Locaiton", component currently being created by Erika
     

//Hey Aman, I(Arika) have put API key in keys.js if you need to use it

//type here wehn you get here Rob
//hi 

// hello hello

// hi from Arika
// ^^ yay

//HeY!! -Nolan

// hi - aman

const MenuOption = (props) => {
  var colorHex = (function(color) { 
    switch(color){
      case 'Food':
        //yellow
        return "#f0df52";
      case 'Shelter':
        //orange-red
        return "#eb8a48";
      case "Medicine":
        //pink
        return "#ea97df"
      case "Urgent Care":
        // critical red
        return "#de2f10";
  }}(props.title));
  return(
     <SafeAreaView style={styles.cards}
           backgroundColor ={colorHex}>
      <TouchableOpacity 
        onPress={() => {props.onPress}}>
        <Text style={{fontFamily: 'Courier', fontSize: 30, fontWeight: "bold"}}
        color="#606060">{props.title}</Text>
      </TouchableOpacity> 
      </SafeAreaView>);

};  

//route.params.domain
const Menu = (navigation) => {
  return(
    <SafeAreaView style={styles.container}>
      {/* don't know if the cardStyle will work now, with styles.container */}
      {/* <TouchableOpacity onPress={() => {console.log("Button tapped"); this.props.navigation.navigate('Map', {text: 'Listing the results of'+this.props.title})}}> */}
      {/* ^^ don't know if we need the above TouchableOpacity since we have the one in MenuOption */}
      <MenuOption title="Food" onPress={() => navigation.push("List of Results", {domain: "Food"})}></MenuOption>
      <MenuOption title="Shelter" onPress={() => navigation.push("List of Results", {domain: "Shelter"})}></MenuOption>
      <MenuOption title="Medicine" onPress={() => navigation.push("List of Results", {domain: "Medicine"})}></MenuOption>
      <MenuOption title="Urgent Care" onPress={() => navigation.push("List of Results", {domain: "Urgent Care"})}></MenuOption>
      {/* </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const searchResult = (results) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={results.name}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0c4de',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  cards: {
    flexDirection: "column",
    paddingBottom: 55,
    paddingTop: 55,
    paddingLeft: 45,
    paddingRight: 45,
    marginVertical: 8,
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  // color should be a dark grey for the text ONLY in the menu cards with styles.cards ALONG WITH padding for each individual menu card


});
