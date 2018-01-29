import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import moment from 'moment';
import Icon from '@expo/vector-icons/Ionicons';


const FilmListItem = ({item, onFilmSelected}) => {

const date = moment(item.showtimes[0].startsAtDate).format('L');

const rating = item.tmdbRating;

const isIos = Platform.OS === 'ios';

	return (
	<TouchableHighlight onPress={ onFilmSelected } underlayColor="#c0c0c0">
		<View style={styles.container} >
			<View style={styles.films}>
				<Text style={styles.title} numberOfLines={1}> 
				{item.name} 
				</Text>
				<Text style={styles.showtime} numberOfLines={1}> 
				{date + ' at ' + item.showtimes[0].startsAtTime + ' on ' + item.showtimes[0].channel} 
				</Text>
			</View>
			{ rating > 0 ? 
				<View style={styles.ratingContainer}>
					<Text style={styles.ratingText}> {rating}% </Text>
				</View>
			: null }
			{ isIos ? <Icon style={styles.accessory}name="ios-arrow-forward"/> : null }
		</View>
	</TouchableHighlight>
	)	

};

export default FilmListItem;


const styles = StyleSheet.create({
	container: {
		padding: 8,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

	},
	films: {
		flex: 1,
	},
	title: {
		fontSize: 16,
	},
	showtime: {
		fontSize: 14,
		paddingTop: 3,
		color: '#666',
	},
	ratingContainer: {
		justifyContent: 'space-around',
		width: '20%',
		marginLeft: 6,	
	},
	ratingText: {
		textAlign: 'center',
		fontSize: 18,
	},
	accessory: {
		fontSize: 16,
		color: '#c0c0c0'
	},
})




