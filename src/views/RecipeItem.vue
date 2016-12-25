<template>
    <div>
        <h1 v-text="item.name"></h1>
        <router-link :to="'/edit/' + item.id">Edit</router-link>
        <p v-text="item.description"></p>
    </div>
</template>

<script>
export default {
    name: 'RecipeItemView',
    computed: {
        item () {
            return this.$store.state.recipes[this.$route.params.id]
        }
    },
}
</script>