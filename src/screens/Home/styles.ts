import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flex: 1,
		padding: 10,
		gap: 10,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	subtitle: {
		fontSize: 18,
		fontWeight: 500,
		flex: 1,
		color: colors.dimGray,
	},
	flatList: {
		gap: 5,
	},
});
