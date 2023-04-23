export default {
    namespaced: true,
    state: {
        selectTab: 'inventory'
    },
    getters: {
        selectTab: state => state.selectTab,
    },
    mutations: {
        setTab (state, value) {
            state.selectTab = value
        }
    }
}