<template>
	<div id="app">
		<h3>{{ title }}</h3>
		<div class="col-md-12">
			<!-- Loop through all objects in our array and bind to the Character directive passing to the Character id component -->
			<Character
				v-for="(id, index) in initial_ids"
				:id="id"
                key="index"/>
		</div>
	</div>
</template>

<script>
	import Character from './components/Character.vue'

	// export vue object to become our Vue instance
	export default {
		name: 'app',
		data () {
			return {
				title: 'Generate Your Team',
				initial_ids: [1, 13, 14]
			}
		},
		components: {
			// map the character string to the Character component
			Character
		}
	}
</script>
