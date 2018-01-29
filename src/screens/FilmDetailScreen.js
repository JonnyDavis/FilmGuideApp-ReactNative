import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilmDetail from '../components/FilmDetail';

export default class FilmDetailScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		const name = navigation.state.params.name;
		return {
			title: name
		}
	}

	render() {
		const film = this.props.navigation.state.params;
		const description = this.props.navigation.state.params.description;
		return (
			<View style={styles.container}>
				<FilmDetail film={film} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})