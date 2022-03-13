<template>
  <div class="board" :class= '{open: isOpen }'>
	  <div class="board--front">
		  <RightBoardContent />
	  </div>

	  <div class="panel--back" @click="isOpen=true">
		  <div class="back-triangle" />
	  </div>

  </div>
</template>

<script>
import RightBoardContent from './RightBoardContent.vue';

export default {
	name:'RightBoard',
  	components: { RightBoardContent },
	data() {
		return {
			isOpen: false,
		}
	},

	methods() {

	}

};
</script>

<style lang="sccs" scoped>


</style>
