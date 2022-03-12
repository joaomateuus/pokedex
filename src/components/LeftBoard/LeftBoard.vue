<template>
  <div class="panel bg--red-01">
	  <LeftBoardContent />
  </div>
</template>

<script>
import LeftBoardContent from './LeftBoardContent.vue'

export default {
	name: 'LeftBoard',
	components: {
		LeftBoardContent,
	}

}
</script>

<style lang="scss" scoped>
.panel{
	display:flex;
	width: 100%;
	padding: 85px 20px 20px;

	@media (min-width: $viewport-medium) {
		width: calc(50% + 20px);
		padding-right: 60px;
	}
}

</style>

