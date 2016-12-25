import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RecipeItem from '../views/RecipeItem.vue'
import Home from '../views/Home.vue'
import AddRecipeForm from '../views/AddRecipeForm.vue'

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', component: Home },
        { path: '/recipe/:id', component: RecipeItem },
        { path: '/add', component: AddRecipeForm },
        { path: '/edit/:id', component: AddRecipeForm },
    ]
})
