import { fromCookie } from '@/helpers/fromCookie'
import { apolloClient } from '@/vue-apollo'
import UserModel from '../../models/UserModel'
import { GET_MY_PROFILE } from '../../queries/index'

const state = {
    token: fromCookie('token') ?? null,
    user: {},
    authStatus: false
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
    user: state => state.user
};

const actions = {
    async getUser ({ commit }) {
        const { data } = await apolloClient.query({ query: GET_MY_PROFILE })
        if (data.getUser) {
            await commit('LOGIN_USER', new UserModel(data.getUser))
        }
    },
    async logOut ({ commit }) {
        commit('LOGOUT_USER')
    }
};

const mutations = {
    LOGOUT_USER () {
        document.cookie = "token=asd; max-age=0";
        window.location.reload()
    },
    updateBalance(state, balance) {
        //console.log('balance', balance)
        state.user.balance = balance
    },
    LOGIN_USER (state, user) {
        state.authStatus = true
        state.user = user
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
