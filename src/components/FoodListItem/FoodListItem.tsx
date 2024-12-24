import React from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';

interface FoodListItemProps {
	label: string;
	cal: number;
	brand: string;
}

const FoodListItem = ({ item }: { item: FoodListItemProps }) => {
	return (
		<View style={styles.content}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.label}</Text>
				<Text style={styles.subtitle}>{`${item.cal} cal, ${item.brand}`}</Text>
			</View>

			<AntDesign name="pluscircleo" size={24} color="royalblue" />
		</View>
	);
};

export default FoodListItem;
