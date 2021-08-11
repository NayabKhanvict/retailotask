import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Image } from "react-native";

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState("");
  async function fetchGifs() {
    try {
      const API_KEY = "iYGa9pXrUIC5zpWT6gTTZ51lQqmDM5LM";
      const BASE_URL = "http://api.giphy.com/v1/gifs/search";
      const resJson = await fetch(
        `${BASE_URL}?api_key=iYGa9pXrUIC5zpWT6gTTZ51lQqmDM5LM&q=${term}`
      );
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  } /// add facebook fresco
  function onEdit(newTerm: any) {
    debugger;
    updateTerm(newTerm);
    fetchGifs();
  }
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Search Giphy"
        placeholderTextColor="#fff"
        style={styles.textInput}
        onChangeText={(text) => onEdit(text)}
      />
      <FlatList
        data={gifs}
        renderItem={({ item }: any) => (
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: item.images.original.url }}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "pink",
  },
  textInput: {
    marginTop: 50,
    width: "100%",
    height: 50,
    color: "white",
  },
  image: {
    width: 300,
    height: 150,
    borderWidth: 3,
    marginBottom: 5,
  },
});
