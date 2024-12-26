import {
	View,
	FlatList,
	TextInput,
	Button,
	Text,
	ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import FoodListItem from '@/src/components/FoodListItem';
import { gql, useLazyQuery } from '@apollo/client';
import { colors } from '@/src/utils/colors';
import { SearchResult } from '@/src/utils/types';

const query = gql`
	query search($ingr: String) {
		search(ingr: $ingr) {
			text
			hints {
				food {
					label
					brand
					foodId
					nutrients {
						ENERC_KCAL
					}
				}
			}
		}
	}
`;

const Home = () => {
	const [search, setSearch] = useState('');
	const [runSearch, { data, loading, error }] =
		useLazyQuery<SearchResult>(query);

	// TODO: add debounce
	const handleSearch = () => {
		runSearch({ variables: { ingr: search } });
	};

	if (error) return <Text>Error: {error.message}</Text>;

	const items = data?.search.hints || [];

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Search..."
				style={styles.searchInput}
				value={search}
				onChangeText={setSearch}
			/>
			{search && <Button title="Search" onPress={handleSearch} />}

			{loading && <ActivityIndicator size="large" color={colors.royalBlue} />}

			<FlatList
				data={items}
				renderItem={({ item, index }) => (
					<FoodListItem key={item.food.foodId + index} item={item} />
				)}
				ListEmptyComponent={() => !loading && <Text>Search a food</Text>}
				contentContainerStyle={styles.flatList}
			/>
		</View>
	);
};

export default Home;
