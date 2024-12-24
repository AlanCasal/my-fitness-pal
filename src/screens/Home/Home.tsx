import { View, FlatList, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import FoodListItem from '@/src/components/FoodListItem';

const foodList = [
	{ label: 'Pizza', cal: 350, brand: 'Dominos' },
	{ label: 'Apple', cal: 100, brand: 'Generic' },
	{ label: 'Coffee', cal: 100, brand: 'Café Martinez' },
];

const Home = () => {
	const [search, setSearch] = useState('');

	const handleSearch = () => {
		console.log('%c[search]', 'background: #000059; color: #9fcfff', search);

		setSearch('');
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Search..."
				style={styles.searchInput}
				value={search}
				onChangeText={setSearch}
			/>
			{search && <Button title="Search" onPress={handleSearch} />}

			<FlatList
				data={foodList}
				renderItem={({ item }) => <FoodListItem key={item.label} item={item} />}
				contentContainerStyle={styles.flatList}
			/>
		</View>
	);
};

export default Home;
