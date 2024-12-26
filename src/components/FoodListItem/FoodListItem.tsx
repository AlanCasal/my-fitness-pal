import React from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';
import { colors } from '@/src/utils/colors';
import { FoodItem } from '@/src/utils/types';

const FoodListItem = ({ item }: { item: FoodItem }) => {
	return (
		<View style={styles.content}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.food.label}</Text>
				<Text
					style={styles.subtitle}
				>{`${item.food.nutrients.ENERC_KCAL} cal, ${item.food.brand || ''}`}</Text>
			</View>

			<AntDesign name="pluscircleo" size={24} color={colors.royalBlue} />
		</View>
	);
};

export default FoodListItem;
