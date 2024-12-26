import {
	View,
	FlatList,
	TextInput,
	Button,
	Text,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import FoodListItem from '@/src/components/FoodListItem';
import { gql, useLazyQuery } from '@apollo/client';
import { colors } from '@/src/utils/colors';
import { SearchResult } from '@/src/utils/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const query = gql`
	query search($ingr: String, $upc: String) {
		search(ingr: $ingr, upc: $upc) {
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

const FIDEOS_BARCODE = '8076802085738';

const Home = () => {
	const [search, setSearch] = useState('');
	const [runSearch, { data, loading, error }] =
		useLazyQuery<SearchResult>(query);
	const [isScannerEnabled, setIsScannerEnabled] = useState(false);
	const [permission, requestPermission] = useCameraPermissions();
	const [facing, setFacing] = useState<CameraType>('back');

	const handleSearch = (upc: string = '') => {
		const searchData = { variables: { upc: '', ingr: '' } };

		if (upc) searchData.variables.upc = upc;
		else if (search) searchData.variables.ingr = search;

		runSearch(searchData);
	};

	const toggleCameraFacing = () => {
		setFacing(current => (current === 'back' ? 'front' : 'back'));
	};

	const handleBarCodeScanned = ({ data: barcodeData }: { data: string }) => {
		setIsScannerEnabled(false);
		handleSearch(FIDEOS_BARCODE);
	};

	useEffect(() => {
		if (!permission?.granted) requestPermission();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) return <Text>Error: {error.message}</Text>;

	if (isScannerEnabled) {
		return (
			<View style={styles.cameraContainer}>
				<CameraView
					style={styles.camera}
					facing={facing}
					onBarcodeScanned={handleBarCodeScanned}
				>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							style={styles.button}
							onPress={toggleCameraFacing}
						>
							<Text style={styles.text}>Flip Camera</Text>
						</TouchableOpacity>
					</View>
				</CameraView>

				<Ionicons
					onPress={() => setIsScannerEnabled(false)}
					name="close-circle"
					size={32}
					color={colors.black}
					style={styles.scannerClose}
				/>
			</View>
		);
	}

	const items = data?.search.hints || [];

	return (
		<View style={styles.container}>
			<View style={styles.searchWrapper}>
				<TextInput
					placeholder="Search..."
					style={styles.searchInput}
					value={search}
					onChangeText={setSearch}
				/>
				<Ionicons
					onPress={() => setIsScannerEnabled(true)}
					name="barcode-outline"
					size={32}
					color={colors.dimGray}
				/>
			</View>

			{search && <Button title="Search" onPress={() => handleSearch()} />}

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

// TODO: add handleSearch debounce
// TODO: add item not found message
// TODO: if item already added, increase qty
// TODO: add db fail message
