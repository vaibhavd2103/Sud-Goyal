import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function App() {
  const width = Dimensions.get("window").width;
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    const query = text.toLowerCase();
    const result = data.filter((item) => {
      if (item.name) {
        return item.name.toLowerCase().indexOf(query) >= 0;
      }
    });
    setFilteredData(result);
  };

  const [data, setData] = useState([
    {
      id: "1",
      name: "Milk",
    },
    {
      id: "2",
      name: "Coffee",
    },
    {
      id: "3",
      name: "Orange",
    },
    {
      id: "4",
      name: "Bread",
    },
    {
      id: "5",
      name: "Juice",
    },
  ]);

  const RandomItemAdder = () => {
    data.push({
      id: (Math.floor(Math.random() * (100 - 6 + 1)) + 6).toString(),
      name: data[Math.floor(Math.random() * 5)].name,
    }),
      console.log(data);
    setData(data);
    refresher();
  };

  const [refreshing, setRefreshing] = useState(false);

  const refresher = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      ToastAndroid.show("Refreshed", 500);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: "darkgrey",
          padding: 15,
          width: width,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: width - 70,
            borderWidth: 1,
            borderColor: "darkgrey",
            paddingLeft: 15,
            borderRadius: 20,
            height: 50,
          }}
        >
          <FontAwesome name="search" size={20} color="black" />
          <TextInput
            placeholder="Search"
            onChangeText={(text) => {
              handleSearch(text);
            }}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={RandomItemAdder}>
          <Feather name="plus-square" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresher} />
        }
        data={filteredData.length === 0 ? data : filteredData}
        style={{
          width: "100%",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: width - 40,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: "darkgrey",
                marginHorizontal: 20,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
  },
  input: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
});
