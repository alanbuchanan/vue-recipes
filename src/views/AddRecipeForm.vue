<template>
    <div>
        <form class="form">
            <input v-model="recipe.name" placeholder="Recipe Name">
            <textarea v-model="recipe.description" placeholder="Recipe Description..." rows="10"></textarea>
            <button :disabled="nothingEntered()" @click.prevent="addRecipe">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddRecipeForm',
    data() {
        return {
            recipe: this.isEdit() 
            ? this.$store.state.recipes[this.$route.params.id]
            : {
                name: '',
                description: ''
            }
        }
    },

    methods: {
        isEdit() {
            return this.$route.path.includes('edit')
        },

        addRecipe() {
            if (this.isEdit()) {
                this.$store.dispatch('addRecipe', this.recipe)

            } else {
                this.$store.dispatch('addRecipe', {
                    id: Date.now(), 
                    ...this.recipe
                })
            }

            this.$router.push('/')
        },

        nothingEntered() {
            return !this.recipe.name || !this.recipe.description
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

input,
textarea,
button {
    margin: 10px;
    padding: 10px;
}
</style>