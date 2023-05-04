import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableHighlight,
  RefreshControl,
} from "react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const array_list = [
    { name: "Devin" },
    { name: "Dan" },
    { name: "Dominic" },
    { name: "Jackson" },
    { name: "James" },
    { name: "Joel" },
    { name: "John" },
    { name: "Jillian" },
    { name: "React Native" },
    { name: "Arthur" },
    { name: "Hokusai" },
    { name: "Castoria" },
    { name: "Tran minh du" },
  ];
  const [data, setData] = useState(array_list);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        List View
      </Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <TouchableHighlight
              onPress={() => {}}
              style={{ fontSize: 28, flex: 1, justifyContent: "flex-start" }}
              underlayColor={"#B5B8B1"}
            >
              <Text style={styles.itemText}>
                {index}. {"      "} {item.name}
              </Text>
            </TouchableHighlight>
          </View>
        )}
        //refreshing
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              console.log("refreshing...");
              setData(array_list);
              //console.log(data);
              setRefreshing(false);
            }}
          />
        }
        //load more
        ListFooterComponent={() => (
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text> Load More </Text>
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
        onEndReached={() => {
          setLoading(true);
          console.log("Load More");
          setData(data.concat([{ name: "Du" }, { name: "React Native" }]));
          //console.log(data);
          setLoading(false);
        }}
        onEndReachedThreshold={0.1}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  item: {
    width: WIDTH,
  },
  itemText: {
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    paddingTop: 20,
  },
});
