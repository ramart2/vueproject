<template>
    <div class="">
        Type: {{ type }}  <!-- moustache interpolation -->
    </div>
</template>

<script>
    // Access the route through the type we get through the path
    export default  {
        data() {
            return {

                // params has all the creations we map out
                type: this.$route.params.type,
                items: []
            }
        },

        // Watch for the change of the route
        watch: {
            '$route': 'fetchItems'  // when the $route property changes, it calls the change method
        },
        methods: {

            // Fetch data items from the server
            fetchItems() {
                // Empty array so we always start from a clean state
                this.items = []
                let initial_ids = [1, 13, 14]

                // Loop through the ids
                for (let i in initial_ids) {
                    let id = initial_ids[i]
                    console.log('id', id)
                    fetch(`http://swapi.co/api/${this.type}/${id}`, {
                        method: 'GET'
                    })
                        // Handle the two promises for this endpoint and return the JSON
                        .then(response => response.json())
                        .then(json => this.items.push(json))
                }
            }
        },

        // created hook allows fetchItems function when data component is made
        created() {
            this.fetchItems()
        }
    }
</script>
