import React from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';
import { colors } from '@/src/utils/colors';
import { FoodItem } from '@/src/utils/types';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';

const mutation = gql`
	mutation MyMutation(
		$food_id: String!
		$kcal: Int!
		$label: String!
		$user_id: String!
	) {
		insertFood_log(
			food_id: $food_id
			kcal: $kcal
			label: $label
			user_id: $user_id
		) {
			user_id
			label
			kcal
			id
			food_id
			created_at
		}
	}
`;

const FoodListItem = ({ item }: { item: FoodItem }) => {
	const [logFood] = useMutation(mutation, {
		refetchQueries: ['foodLogsForDate'],
	});
	const router = useRouter();

	const handleLogFood = async () => {
		await logFood({
			variables: {
				food_id: item.food.foodId,
				kcal: item.food.nutrients.ENERC_KCAL,
				label: item.food.label,
				user_id: 'foxOne',
			},
		});

		router.push('/');
	};

	return (
		<View style={styles.content}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.food.label}</Text>
				<Text
					style={styles.subtitle}
				>{`${item.food.nutrients.ENERC_KCAL} cal, ${item.food.brand || ''}`}</Text>
			</View>

			<AntDesign
				onPress={handleLogFood}
				name="pluscircleo"
				size={24}
				color={colors.royalBlue}
			/>
		</View>
	);
};

export default FoodListItem;
