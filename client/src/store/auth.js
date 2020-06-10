const Axios = require('axios');
import config from '../proxy';
export default {
    state: {
        user: null,
        isAuthenticated: false,
        token: JSON.parse(window.localStorage.getItem('token')) || null
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload;
            state.isAuthenticated = true;
        }
    },
    actions: {
        SIGN_UP({commit}, payload) {
            commit('CLEAN_ERROR');
            commit('SET_PROCESSING', true);
            Axios.post(`${config.path}/auth/signup`, {
                email: payload.email,
                name: payload.name,
                secondName: payload.secondName,
                phone: payload.phone,
                country: payload.country,
                area: payload.area,
                city: payload.city,
                index: payload.index,
                address: payload.address,
                newsSubscription: payload.getNews,
                password: payload.password
            })
                .then((res) => {
                    commit('SET_USER', res.data);
                    commit('SET_PROCESSING', false);
                })
                .catch((err) => {
                    commit('SET_ERROR', err.message);
                    commit('SET_PROCESSING', false);
                    commit('CLEAN_ERROR');
                });
        },
        SIGN_IN({commit}, payload) {
            commit('CLEAN_ERROR');
            commit('SET_PROCESSING', true);
            Axios.post(`${config.path}/auth/signin`, {
                email: payload.email,
                password: payload.password
            })
                .then((res) => {
                    commit('SET_USER', res.data);
                    commit('SET_PROCESSING', false);
                })
                .catch((err) => {
                    commit('SET_ERROR', err.message);
                    commit('SET_PROCESSING', false);
                    commit('CLEAN_ERROR');
                })
        },
        GET_USER({commit}, payload) {
            commit('CLEAN_ERROR');
            Axios.get(`${config.path}/auth/getuser`)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {

                })
        }
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated
    }
}