import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	content: {
		backgroundColor: 'gainsboro',
		padding: 10,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textContainer: {
		flex: 1,
		gap: 5,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	subtitle: {
		color: 'dimgray',
	},
});
