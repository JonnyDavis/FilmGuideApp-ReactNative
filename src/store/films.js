import films from '../data/films.json';
import { getAllFilms } from '../data/api';

const types = {
	FETCH_FILM: '[Films] Fetch',
	FETCH_FILM_SUCCESS: '[Films] Fetch Success'
};

const actionCreators = {
	fetchFilmsSuccess: (data) => {
		return {
			type: types.FETCH_FILM_SUCCESS,
			payload: data
		}
	}

};

const fetchFilms = () => {
	return (dispatch) => {
		const promise = getAllFilms();
		promise.then((response) => {
			// have our films data
			// dipstach our 'FETCH_FILMS_SUCCESS' action
			dispatch(actionCreators.fetchFilmsSuccess(response.data));
		});
	};
};

const initialState = {
	collection: []
};

function reducer(state = initialState, action) {
	if(action.type === types.FETCH_FILM_SUCCESS) {
		// Handle the film data response.
		return {
			...state,
			collection: action.payload,
		};
	}
	return state;
}

const getFilmsSelector = (state) =>
	state.films.collection;
	// moved state into selector function, to be called in mapStateToProps. 
	// pre-empts the react diff algorithm -> If nothings changed, returns the same result. Used with a reselect library (good practice).

export default reducer;

export {
	getFilmsSelector,
	actionCreators,
	fetchFilms
}; //exported to use in filmListScreen