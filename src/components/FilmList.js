import React from 'react';
import { FlatList, Text } from 'react-native';
import FilmListItem from './FilmListItem';
import FilmListSeperator from './FilmListSeperator';

const noop = () => null;



const extractFilmItemKey = (item) => {
	return item.id;
}

const FilmList = ({ films, onFilmSelected }) => {

	const renderFilmItem = ({ item }) => {

		const onSelected = () => {
			onFilmSelected(item);
		} 

		return (
			<FilmListItem item={item} onFilmSelected={ onSelected }/>
		);
	};

	return (
		<FlatList
		data={ films }
		renderItem={ renderFilmItem }
		keyExtractor={ extractFilmItemKey}
		ItemSeparatorComponent={FilmListSeperator}
		/>
	)
};

export default FilmList;