import axios from 'axios';

function getAllFilms() {
	const url = 'https://filmsonfreeview.herokuapp.com/api/films';
	const promise = axios.get(url);
	return promise;
}

export {
	getAllFilms
};