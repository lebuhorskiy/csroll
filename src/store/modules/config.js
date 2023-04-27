import { apolloClient } from '@/vue-apollo'
import {GET_RATES} from "@/queries";
export default {
    namespaced: true,
    state: {
        windowWidth: null,
        currentCurrency: localStorage.getItem('currency') ? JSON.parse(localStorage.getItem('currency')) : {
            currency: 'USD',
            rate: 1,
            symbol: '$'
        },
        rates: null,
        isShowCheck: false,
        isShowSkinopadModal: false,
        isShowCheckGameModal: false,
        isShowSettingsModal: false,
        isShowChatRulesModal: false,
        isShowNewTicketModal: false,
        isShowShopModal: false,
        isShowMobileMenu: false,
        isShowChat: window.innerWidth < 1024 ? false : localStorage.getItem('isShowChat') ? parseInt(localStorage.getItem('isShowChat')) : true,
        chatMuted: localStorage.getItem('chatMuted') !== null ? localStorage.getItem('chatMuted') : 0,
    },
    getters: {
        isShowCheck: state => state.isShowCheck,
        isShowShopModal: state => state.isShowShopModal,
        windowWidth: state => state.windowWidth,
        isShowMobileMenu: state => state.isShowMobileMenu,
        isShowSkinopadModal: state => state.isShowSkinopadModal,
        isShowCheckGameModal: state => state.isShowCheckGameModal,
        isShowSettingsModal: state => state.isShowSettingsModal,
        isShowChatRulesModal: state => state.isShowChatRulesModal,
        isShowNewTicketModal: state => state.isShowNewTicketModal,
        chatMuted: state => parseInt(state.chatMuted),
        isShowChat: state => state.isShowChat,
        rates: state => state.rates,
        currentCurrency: state => state.currentCurrency,
        currency: state => {
            return {
                ...state.currentCurrency
            }
        },
        convertRate: (state) => (value) => {
            const rate = state.currentCurrency.rate

            return parseFloat(value * rate).toFixed(2)
        }
    },
    mutations: {
        setShowCheck (state, value) {
            state.isShowCheck = value
        },
        setShopModal (state, value) {
            state.isShowShopModal = value
        },
        setWidth (state, value) {
            state.windowWidth = value
        },
        setMobileMenu (state, value) {
            state.isShowMobileMenu = value
        },
        setCurrentCurrency (state, value) {
            localStorage.setItem('currency', JSON.stringify(value))
            state.currentCurrency = value
        },
        setTicketModal (state, value) {
            state.isShowNewTicketModal = value
        },
        setSkinopadModal (state, value) {
            state.isShowSkinopadModal = value
        },
        setShowSettingsModal (state, value) {
            state.isShowSettingsModal = value
        },
        setShowCheckGameModal (state, value) {
            state.isShowCheckGameModal = value
        },
        setShowChatRulesModal (state, value) {
            state.isShowChatRulesModal = value
        },
        setChatMuted (state, value) {
            localStorage.setItem('chatMuted', value)
            state.chatMuted = value
        },
        setShowChat (state, value) {
            localStorage.setItem('isShowChat', Number(value))
            state.isShowChat = value
        },
        setRates (state, rates) {
            state.rates = rates
        }
    },
    actions: {
        async getRates ({commit}) {
            const { data } = await apolloClient.query({ query: GET_RATES })

            if (data.getRates) {
                commit('setRates', data.getRates)
            }
        }
    }
}