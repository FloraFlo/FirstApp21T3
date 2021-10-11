import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'

const Item = (props) => {
  return(
    <View>
      <Text>{props.text}</Text>
    </View>
  )
}

export default function App() {

  const AppData = [
    //objects
    { id: "1", name: "Apple"},
    { id: "2", name: "Orange"},
    { id: "3", name: "Banana"},
    { id: "4", name: "Blueberry"},
    { id: "5", name: "Tomato"}
  ]

  const Render = ({item}) => ( <Item text={item.name} /> )
  

  return (
    <View style={styles.container}>
      <Text>Test app!</Text>
      <FlatList data={AppData} keyExtractor={ (item) => item.id } renderItem={Render}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight, 
  },
});
