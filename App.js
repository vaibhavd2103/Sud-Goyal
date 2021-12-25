import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

export default function App() {
	const [input, setInput] = useState("");
	const width = Dimensions.get("window").width;
	const [filteredData, setFilteredData] = useState([]);

	const data = [
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
	];

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
						onChangeText={() => {
							const filter = data.filter(input);
							console.log(filter);
						}}
						style={styles.input}
					/>
				</View>
				<Feather name="plus-square" size={30} color="black" />
			</View>
			<FlatList
				data={data}
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
		// border: "none",
	},
});
