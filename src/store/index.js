import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const setLocalStorage = (recipes) => {
    window.localStorage.setItem('state', JSON.stringify(recipes))
}

const store = new Vuex.Store({
    state: {
        recipes: JSON.parse(window.localStorage.getItem('state')) || {}
    },

    actions: {
        addRecipe({ commit }, recipe) {
            commit('ADD_RECIPE', recipe)
        },

        removeRecipe({ commit }, id) {
            commit('REMOVE_RECIPE', id)
        }
    },

    mutations: {
        ADD_RECIPE(state, recipe) {
            Vue.set(state.recipes, recipe.id, recipe)
            setLocalStorage(state.recipes)
        },

        REMOVE_RECIPE(state, id) {
            Vue.delete(state.recipes, id)
            setLocalStorage(state.recipes)
        }
    },


})

export default store