import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Image } from "react-native";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import { GiphyListView } from "./screens/gifs";
export default function App() {
  return (
    <Provider store={store}>
      <GiphyListView />
    </Provider>
  );
}
