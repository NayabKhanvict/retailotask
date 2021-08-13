import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Image } from "react-native";
import { SearchProducts } from "../redux-store/product/actions";
import { connect } from "react-redux";
interface Props extends ReturnType<typeof mapDispatchToProps> {
  giphys?: any;
}

function GifList({ giphys }: Props) {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  async function fetchGifs() {
    try {
      const API_KEY = "iYGa9pXrUIC5zpWT6gTTZ51lQqmDM5LM";
      const BASE_URL = "http://api.giphy.com/v1/gifs/search";
      const resJson = await fetch(
        `${BASE_URL}?api_key=iYGa9pXrUIC5zpWT6gTTZ51lQqmDM5LM&q=${term}&limit=${limit}&offset=${offset}`
      );
      const res = await resJson.json();
      setGifs(res.data);
    } catch (error) {
      console.warn(error);
    }
  } /// add facebook fresco
  function onEdit(newTerm: any) {
    updateTerm(newTerm);
    // setOffset(offset + 1);
    fetchGifs();
  }
  function onEndReached() {
    debugger;
    setOffset(limit);
    setLimit(limit + 10);
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
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
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
const mapDispatchToProps = (dispatch: any) => ({
  searchProducts: (term: string): Promise<any> =>
    dispatch(SearchProducts(term)),
});
export const GiphyListView = connect(null, mapDispatchToProps)(GifList);
