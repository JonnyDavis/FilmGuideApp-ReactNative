import React from 'react';
import { View, StyleSheet } from 'react-native';


const FilmListSeperator = () => {
	return (
		<View style={styles.container} />
	);
};

export default FilmListSeperator;

const styles = StyleSheet.create({
	container: {
		marginLeft: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	}
});