<template>
    <div>
        <recipe-list></recipe-list>
        <add-button>Add a recipe to your list!</add-button>
    </div>
</template>

<script>
import AddButton from '../components/AddButton.vue'
import RecipeList from '../components/RecipeList.vue'

export default {
    name: 'Home',
    components: {
        AddButton,
        RecipeList
    },
}
</script>