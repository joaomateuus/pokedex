<template>
  <div class="content">
	  <List />
  </div>
</template>

<script>
import List from '../List/List.vue'

export default {
	name: 'LeftBoardContent',
	components: {
		List,
	}

}
</script>

<style lang="scss" scoped>

.content{
	width: 100%;

	@media (min-width: $viewport-medium) {
		margin-top: 50px;
	}
}



</style>

