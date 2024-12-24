import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import FoodListItem from '@/src/components/FoodListItem';

const Home = () => {
	return (
		<View style={styles.container}>
			<FoodListItem item={{ label: 'Pizza', cal: 350, brand: 'Dominos' }} />
			<FoodListItem item={{ label: 'Pizza', cal: 350, brand: 'Dominos' }} />
			<FoodListItem item={{ label: 'Pizza', cal: 350, brand: 'Dominos' }} />
		</View>
	);
};

export default Home;
