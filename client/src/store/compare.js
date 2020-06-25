export default {
    state: {
        compareItems: JSON.parse(window.localStorage.getItem('compareItems')) || []
    },
    mutations: {
        ADD_TO_COMPARE_LIST(state, payload) {
            state.compareItems.push(payload);
            window.localStorage.removeItem('compareItems');
            window.localStorage.setItem('compareItems', JSON.stringify(state.compareItems));
        },
        REMOVE_FROM_COMPARE_LIST(state, payload) {
            state.compareItems = state.compareItems.filter(i => i._id !== payload);
            window.localStorage.removeItem('compareItems');
            window.localStorage.setItem('compareItems', JSON.stringify(state.compareItems));
        }
    },
    actions: {
        ADD_TO_COMPARE_LIST({commit}, payload) {
            commit('ADD_TO_COMPARE_LIST', payload);
        },
        REMOVE_FROM_COMPARE_LIST({commit}, payload) {
            commit('REMOVE_FROM_COMPARE_LIST', payload)
        }
    },
    getters: {
        getCompareItemsLength: (state) => state.compareItems.length,
        getCompareItems: (state) => state.compareItems
    }
}