import React from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styles } from './styles';
import { FoodLogItem } from '@/src/utils/types';

const FoodLogListItem = ({ item }: { item: FoodLogItem }) => {
	return (
		<View style={styles.content}>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.label}</Text>
				<Text style={styles.subtitle}>{`${item.kcal} cal`}</Text>
			</View>
		</View>
	);
};

export default FoodLogListItem;
