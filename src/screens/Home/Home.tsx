import { View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { styles } from './styles';
import { gql, useQuery } from '@apollo/client';
import { colors } from '@/src/utils/colors';
import FoodLogListItem from '@/src/components/FoodLogListItem';

const query = gql`
	query foodLogsForDate($date: Date!, $user_id: String!) {
		foodLogsForDate(user_id: $user_id, date: $date) {
			id
			label
			food_id
			kcal
			user_id
			created_at
		}
	}
`;

const USER_ID = 'foxOne';
const TODAY_DATE = new Date().toISOString().split('T')[0];

const Home = () => {
	const { data, loading, error } = useQuery(query, {
		variables: {
			date: TODAY_DATE,
			user_id: USER_ID,
		},
	});

	if (error) return <Text>Error: {error.message}</Text>;

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

			{loading && <ActivityIndicator size="large" color={colors.royalBlue} />}

			{data && (
				<FlatList
					data={data?.foodLogsForDate}
					renderItem={({ item }) => <FoodLogListItem item={item} />}
					contentContainerStyle={styles.flatList}
				/>
			)}
		</View>
	);
};

export default Home;
