const Axios = require('axios');

export default {
    state: {
        categories: [],
        subCategories: []
    },
    mutations: {
        SET_CATEGORIES(state, payload) {
            state.categories = payload;
        },
        SET_SUBCATEGORIES(state, payload) {
            state.subCategories = payload;
        }
    },
    actions: {
        GET_CATEGORIES({commit}) {
            Axios.get('http://localhost:5000/api/categories')
                .then((data) => {
                    commit('SET_CATEGORIES', data.data.carCategories);
                    commit('SET_SUBCATEGORIES', data.data.cars);
                })            
        }
    },
    getters: {
        getCategories: (state) => state.categories,
        getSubCategories: (state) => state.subCategories
    }
}