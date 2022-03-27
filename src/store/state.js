/*
here we´ll set our reactive variables and
vue is going to do all this reactivity for us
*/
//import vue to use his observer
import Vue from 'vue'

const END = 25;
const BEGIN = 0;

/*Exporting it we can use it everywhere, and as is reactivity
if somepoint some change happens w the var state it will reflect here*/
export default Vue.observable({
	list: [],
	tempList: [],
	anyNext: false,
	isCompleted: false,
	anyError: false,

	isSearching: false,
	isPokemonSearched: false,
	anySearchError: false,

	end: END,
	begin: BEGIN,
});



