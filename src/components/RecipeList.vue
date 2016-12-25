<template>
    <ul>
        <li v-for="recipe in recipes">
            <router-link :to="'/recipe/' + recipe.id">{{recipe.name}}</router-link>
            <button @click="handleXBtnClick(recipe.id)">&times;</button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            recipes: this.$store.state.recipes
        }
    },
    methods: {
        handleXBtnClick(id) {
            this.$store.dispatch('removeRecipe', id)
        }
    },
}
</script>