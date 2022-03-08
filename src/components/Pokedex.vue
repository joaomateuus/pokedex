<template>
  <div class="pokedex">
	  <TopBoard />

	<!---
	<LeftBoard class="pokedex-left" />
	<Divisor />
	<RightBoard />
	-->
  </div>
</template>

<script>
import TopBoard from '../components/TopBoard.vue'

/*
import LeftBoard from './LeftBoard/LeftBoard.vue'
import RightBoard from './RightBoard/RightBoard.vue'
import Divisor from './Divisor/Divisor.vue'
*/

export default {
  name: 'Pokedex',

  components:
  {
	TopBoard,
	//LeftBoard,
	//Divisor,
	//RightBoard,
  }

};
</script>

<style lang="scss">
.pokedex {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width:960px;
	height: 100%;

	@media (min-width: $viewport-medium) {
		max-height: 700px;
		flex-direction: row;
	}

	&--left,
	&--right {
		position: relative;
		display: flex;
		height: 50%;
		perspective: 1700px;
		transform-style: preserve-3d;

		@media (min-width: $viewport-medium) {
			height: 100%;
		}
	}
}

</style>
