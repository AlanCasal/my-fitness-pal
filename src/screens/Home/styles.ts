import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		justifyContent: 'center',
		padding: 10,
		gap: 10,
	},
	searchInput: {
		backgroundColor: colors.gray1,
		padding: 10,
		borderRadius: 20,
	},
	flatList: {
		gap: 5,
	},
});
