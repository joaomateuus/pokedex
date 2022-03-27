/*Here is actually where we make our async api calls making calls
for our variables being changed as we set in mutation file*/
import pokeapi from "@/services/pokeapi";
import state from "./state";
import mutations from "./mutations";

export default {
	async getPokemons() {
		const {
			setList,
			setIsPokemonSearched,
			setAnyError,
			setAnyNext,
			setIsCompleted,
			updateBegin
		} = mutations;

		try {
			setIsPokemonSearched = false;
			setAnyError(false);

			//waiting the request that we made in pokeapi services
			const pokemonsList = await pokeapi.getPokemons({end: state.end,  begin: state.begin});

			//if has response, results and lenght parameters will pass
			if(pokemonsList?.results?.length) {
				//mapping the items by name to get all the data and manipulate it easily
				const prepareData = pokemonsList.results.map(item => pokeapi.getPokemonName(item.name));
				//solving all promises inside the prepare data to solve the actually pokemon data
				pokemonsData = await Promise.all(prepareData);
				//now all pokemon data is saved on list
				setList(pokemonsData);
			}
			//if still pokemons to be loaded it will load
			if (pokemonsList?.next) {
				setAnyNext(true);
				updateBegin();
			} else {
				//if there isnt any more the loading will be completed
				setAnyNext(false);
				setIsCompleted(true);
			}
		//dealing list errors
		} catch (error) {
			setAnyError(true);
		}
	},
	async getPokemonName(name) {
		const {setPokemonSearched} = mutations;

		const pokemon = await pokeapi.getPokemonName(name);

		if(pokemon) {
			setPokemonSearched(pokemon);
		}
	},

	async searchPokemon(name) {
		const {
			setPokemonSearched,
			setIsSearching,
			setIsPokemonSearched,
			setAnySearchError,
			resetList
		} = mutations;

		if(!name) {
			resetList();
			return
		}

		try {
			setAnySearchError(false);
			setIsSearching(true);
			setPokemonSearched(true);

			//checking if the pokemon was already laoded
			const pokemon = state.list.find(info => info.name.toLowerCase() === name.toLowerCase());

			if(pokemon) {
				setPokemonSearched(pokemon);
				return;
			}
			await this.getPokemonName(name);

		} catch(error) {
			setAnySearchError(true);

		} finally {
			setIsPokemonSearched(true);
			setIsSearching(false)
		}

	}
};
