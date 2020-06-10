import { json } from "body-parser";

export default {
    state: {
        cart: JSON.parse(window.localStorage.getItem('cart')) || [],
        cartVisible: false
    },
    mutations: {
        SET_PRODUCT(state, payload) {
            const product = {...payload};
            state.cart.unshift(product);
            window.localStorage.removeItem('cart');
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_VISIBLE(state) {
            state.cartVisible = !state.cartVisible;
        },
        UNSET_PRODUCT(state, payload) {
            state.cart = state.cart.filter(i => i._id !== payload);
            window.localStorage.removeItem('cart');
            window.localStorage.setItem('cart', json.stringify(state.cart));
        }
    },
    actions: {
        ADD_TO_CART({commit}, payload) {
            commit('SET_PRODUCT', payload);
        },
        CHANGE_CART_VISIBLE({commit}) {
            commit('SET_VISIBLE');
        },
        REMOVE_FROM_CART({commit}, payload) {
            commit('UNSET_PRODUCT', payload)
        }
    },
    getters: {
        getCart: (state) => state.cart,
        getCartVisible: (state) => state.cartVisible,
        getFullSum: (state) => {
            return state.cart.reduce((accumulator, currentValue) => {
                return accumulator + (currentValue.ordered * currentValue.price);
            }, 0);
        }
    }
}