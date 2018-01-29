import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';

import FilmList from '../components/FilmList';

import { getFilmsSelector, actionCreators, fetchFilms} from '../store/films'

const mapStateToProps = (state) => {
	return {
		films: getFilmsSelector(state)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchFilms: () => dispatch(fetchFilms()),
	};
};

class FilmListScreen extends React.Component {
  static navigationOptions = {
  	title: 'Films on Freeview'
  };
  constructor() {
  	super();

  	this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  componentDidMount() {
  	this.props.fetchFilms()// Dispatch our action
  	
  }


// Passing data through to the Detail Screen
  navigateToDetailScreen( film ) {
  	this.props.navigation.navigate('Detail', film);

  }


  render() {
    return (
      <View style={styles.container}>
      	<FilmList films={ this.props.films } onFilmSelected={ this.navigateToDetailScreen }/>
      </View>
    );
  }
}

const FilmListScreenWithState = connect(mapStateToProps, mapDispatchToProps)(FilmListScreen);


export default FilmListScreenWithState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  FilmList: {

  }
});