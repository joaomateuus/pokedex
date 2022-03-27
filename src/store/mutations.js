/*The variables will only change with mutations,
this file is responsible for their changes, avoinding to do it in our async call
*/
import state from "./state";

export default {
	//update the loading
	updateBegin() {
		//to know next pokemon the array position is the ++end position
		state.begin += state.end;
	},
	//adds pokemon to the pokedex
	setList(list) {
		state.list.push(...list);
		state.tempList.push(...list)
	},
	//knowing if the pokedex needs more data
	setAnyNext(flag) {
		//updating the anyNext var to know it
		state.anyNext = flag;
	},
	//knowing if the pokedex is completed
	setIsCompleted(flag) {
		//doing the same thing of the past one
		state.isCompleted = flag;
	},
	////knowing if poekdex has any error
	setAnyError(flag) {
		state.anyError = flag;
	},
	//reseting all pokemons data for clear button
	resetList() {
		//cleaning everything and the list will be what was already loaded
		state.list = [...state.tempList];
		state.isSearching = false;
		state.anyError = false;
		state.anySearchError = false
	},

	//adding the especific pokemon searched
	setPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	//knowing if the search is happening
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	//know if the search is completed
	setIsPokemonSearched(flag) {
		state.isPokemonSearched = flag;
	},
	//knowing if happened any error
	setAnySearchError(flag) {
		state.anySearchError = flag;
	},

};
