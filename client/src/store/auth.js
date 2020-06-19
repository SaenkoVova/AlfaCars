const Axios = require('axios');
import config from '../proxy';
export default {
    state: {
        isAuthenticated: false,
        token: JSON.parse(window.localStorage.getItem('token')) || null
    },
    mutations: {
        SET_AUTH(state, payload) {
            state.isAuthenticated = true;
            state.token = payload;
            window.localStorage.removeItem('token');
            window.localStorage.setItem('token', JSON.stringify(payload));

        },
        UNSET_AUTH(state) {
            state.isAuthenticated = false;
            state.token = null
            window.localStorage.removeItem('token');
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
                    commit('SET_AUTH', res.data.token);
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
                    commit('SET_AUTH', res.data.token);
                    commit('SET_PROCESSING', false);
                })
                .catch((err) => {
                    commit('SET_ERROR', err.message);
                    commit('SET_PROCESSING', false);
                    commit('CLEAN_ERROR');
                })
        },
        LOG_OUT({commit}) {
            commit('SET_PROCESSING', true);
            commit('UNSET_AUTH');
            commit('UNSET_USER');
            commit('SET_PROCESSING', false);
        }
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        getToken: (state) => state.token
    }
}