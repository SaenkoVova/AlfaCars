import Axios from 'axios';
import config from '../proxy';

export default {
    state: {
        user: null,
    },
    mutations: {
        SET_USER(state, payload) {
            if(!state.user) {
                state.user = payload;
            }
            else {
                Object.assign(state.user, payload)
            }
        },
        UNSET_USER(state) {
            state.user = null;
        },
        ADD_TO_WISHLIST(state) {
            state.user.bookmarksQuantity += 1;
        }
    },
    actions: {
        GET_BASIC_USER_DATA({commit}, payload) {
            commit('CLEAN_ERROR');
            Axios.get(`${config.path}/user`,
                {
                    headers: {
                        Authorization: `Bearer ${payload}`
                    }
                }
            )
                .then((res) => {
                    commit('SET_USER', res.data);
                    commit('SET_AUTH', payload);
                })
                .catch(() => {
                    commit('UNSET_USER');
                    commit('UNSET_AUTH');
                })
        },
        ADD_TO_WISHLIST({commit}) {
            commit('ADD_TO_WISHLIST');
        }
    },
    getters: {
        getUser: (state) => state.user
    }
}