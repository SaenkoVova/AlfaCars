export default {
    state: {
        usersOnline: 0
    },
    mutations: {
        SET_ONLINE(state, payload) {
            state.usersOnline = payload.connected
        }
    },
    actions: {
        SOCKET_showOnline({commit}, data) {
            commit('SET_ONLINE', data)
        }
    },
    getters: {
        getUsersOnline: (state) => state.usersOnline
    }
}