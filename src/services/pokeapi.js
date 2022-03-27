//File for the requests to the api
import axios from "axios";

const getPokemons = ({end = 25, begin = 0}) => axios.get(`/pokemon?limit=${end}25&offtset=${begin}`);
const getPokemonName = name => axios.get(`/pokemon/${name}`);

export default {
	getPokemons,
	getPokemonName
}

