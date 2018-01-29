import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import moment from 'moment';


const FilmDetail = ({ film }) => {

	const startDate = moment(film.showtimes[0].startsAtDate + film.showtimes[0].startsAtTime, "dddd" + "hh:mm").calendar();
	
	const imageSource = {
		uri: 'https://image.tmdb.org/t/p/original/' + film.tmdbImageId + '.jpg'
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				{ film.tmdbImageId ? 
					<Image style={styles.image} source={imageSource} /> 
					: null }
				<View style={styles.detailsContainer}>
					<View style={styles.details}> 
						{ film.year ? 
							<Text style={styles.releaseText}>Released in {film.year}</Text> 
						: null }
						<Text style={styles.showtimesText}>Showtimes: </Text>
						<Text style={styles.dateText}>{startDate}</Text>
						<Text></Text>
					</View>
					<View style={styles.ratingContainer}>
						{ film.tmdbRating !== 0 ? 
							<Text style={styles.ratingText}>Rating: {film.tmdbRating}%</Text> 
						: null }
					</View>
				</View>
				<Text style={styles.synopsisText}>Film Synopsis: {film.synopsis}</Text>
			</ScrollView>
		</View>
	)
}

export default FilmDetail;


const styles = StyleSheet.create({
	container: {
		flex: 1,

	},
	scrollContainer: {
		padding: 12,
	},
	imageContainer: {
		flex: 1,
	},
	image: {
		aspectRatio: 0.75,
		width: '100%',
	},
	detailsContainer: {
		height: 80,
		flexDirection: 'row',
		paddingTop: 10,
	},
	details: {
		flex: 1,
	},
	releaseText: {
		fontSize: 18,
		paddingBottom: 7,
	},
	showtimesText: {
		fontSize: 17,
	},
	dateText: {
		fontSize: 14,
	},
	ratingContainer: {
		width: '40%',
		alignItems: 'flex-end',
	},
	ratingText: {
		fontSize: 18,
	},
	synopsisText: {
		flex: 1,
		fontSize: 14,
		marginTop: 15,
		paddingTop: 15,
		borderTopColor: 'black',
		borderTopWidth: 1,
	},
});