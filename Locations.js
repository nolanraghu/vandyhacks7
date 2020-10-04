import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';


function giveListInfo(rawJson) {
    var k = JSON.parse(rawJson);
    var locList = [];
    for(let [key,value] of Object.entries(k)){
        locList.push(value);
    };
    return locList;

};

function search(domain){
    return 
};

//
function results(cur){
    try {
      var result = "null";
      switch(cur) {
        case 'Food':
            result = search('food banks');
            //food banks, 
            break;
        case 'Shelter':
            result = search('shelter');
            break;
        case 'Medicine':
            result = search('pharmacy');
            break;
        case 'Urgent Care':
            result = search('urgent care');
      }
      return (result);
    } catch (error) {
      console.warn(err);
    }
  };

  function locPress(item){ 
    // item is coordinate, latitude and longitude (2 demical)
    // pop up notification - "would you like to add this address"
    const itemPress = () => navigation.push("Final Location")
    return (itemPress);
  };


export const LocationList = (navigation) => {
    <SafeAreaView style={styles.container}>
    Alert.alert("Pepepepepepepe", route.params.domain);
    </SafeAreaView>
    /*
    const renderItem = ({item}) => {
        return(
            item={item}
        );
    }

    var locList = giveListInfo(results(route.params.domain));

    // needed for modal library
    const [isModalVisible, setModalVisible] = useState(false);

    // needed for modal library
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    /*TODO: CREATE LOCPRESS
    const Item = ({item}) => (
        <TouchableOpacity onPress={navigation.push("MapView", {coordinates: item.places.location.coordinates})} style={styles.item}>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.miles}>{item.location}</Text>
        </TouchableOpacity>
*/       

const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#b0c4de',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
    },
    item: {
        fontSize: 15,
        fontFamily: "Georgia"
    },
    address: {
        fontSize: 15,
        fontFamily: "Georgia"
    },
    miles: {
        fontSize: 15,
        fontFamily: "Courier"
    },
})

};
