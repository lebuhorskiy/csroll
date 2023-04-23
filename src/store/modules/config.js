export default {
    namespaced: true,
    state: {
        isShowSkinopadModal: false,
        isShowCheckGameModal: false,
        isShowSettingsModal: false,
        isShowChatRulesModal: false,
        isShowNewTicketModal: false,
        isShowChat: localStorage.getItem('isShowChat') ? parseInt(localStorage.getItem('isShowChat')) : true,
        chatMuted: localStorage.getItem('chatMuted') !== null ? localStorage.getItem('chatMuted') : 0
    },
    getters: {
        isShowSkinopadModal: state => state.isShowSkinopadModal,
        isShowCheckGameModal: state => state.isShowCheckGameModal,
        isShowSettingsModal: state => state.isShowSettingsModal,
        isShowChatRulesModal: state => state.isShowChatRulesModal,
        isShowNewTicketModal: state => state.isShowNewTicketModal,
        chatMuted: state => parseInt(state.chatMuted),
        isShowChat: state => state.isShowChat
    },
    mutations: {
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
        }
    }
}