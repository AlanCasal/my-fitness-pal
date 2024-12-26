import { colors } from '@/src/utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	cameraContainer: {
		flex: 1,
		backgroundColor: colors.white,
	},
	camera: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		margin: 64,
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
	/********************************************************/
	scannerClose: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
	container: {
		flex: 1,
		backgroundColor: colors.white,
		justifyContent: 'center',
		padding: 10,
		gap: 10,
	},
	searchWrapper: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
	},
	searchInput: {
		backgroundColor: colors.gray1,
		padding: 10,
		borderRadius: 20,
		flex: 1,
	},
	flatList: {
		gap: 5,
	},
});
