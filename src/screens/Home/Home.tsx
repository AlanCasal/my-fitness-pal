import { View, Text, FlatList, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { styles } from './styles';
import FoodListItem from '@/src/components/FoodListItem';

const foodItems = [
	{
		food: {
			foodId: '1',
			label: 'Apple',
			nutrients: { ENERC_KCAL: 100 },
			brand: 'Brand A',
		},
	},
	{
		food: {
			foodId: '2',
			label: 'Banana',
			nutrients: { ENERC_KCAL: 150 },
			brand: 'Brand B',
		},
	},
	{
		food: {
			foodId: '3',
			label: 'Orange',
			nutrients: { ENERC_KCAL: 120 },
			brand: 'Brand C',
		},
	},
	{
		food: {
			foodId: '4',
			label: 'Pineapple',
			nutrients: { ENERC_KCAL: 100 },
			brand: 'Brand D',
		},
	},
	{
		food: {
			foodId: '5',
			label: 'Coffee',
			nutrients: { ENERC_KCAL: 10 },
			brand: 'Brand E',
		},
	},
];

const Home = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.subtitle}>Calories</Text>
				<Text>1770 - 360 = 1410 kcal</Text>
			</View>
			<View style={styles.header}>
				<Text style={styles.subtitle}>Today's Logged Food</Text>
				<Link href="/search" asChild>
					<Button title="ADD FOOD" />
				</Link>
			</View>
			<FlatList
				data={foodItems}
				renderItem={({ item }) => <FoodListItem item={item} />}
				contentContainerStyle={styles.flatList}
			/>
		</View>
	);
};

export default Home;
