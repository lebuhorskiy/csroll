import { apolloClient } from '@/vue-apollo'
import {GET_SHOP_ITEMS} from "@/queries";

export default {
    namespaced: true,
    state: {
        data: null,
        filters: {
            skip: 0,
            take: 30,
            priceSort: 'desc',
            priceFrom: 0,
            priceTo: 999999
        }
    },
    getters: {
        items: state => state.data ? state.data.records : [],
        total: state => state.data ? state.data.total : 0,
        filters: state => state.filters
    },
    mutations: {
        setData (state, data) {
            state.data = data
        }
    },
    actions: {
        async fetchData ({commit, getters}) {
            const { data } = await apolloClient.query({ query: GET_SHOP_ITEMS, variables: getters.filters })
            if (data.getItems) {
                await commit('setData', data.getItems)
            }
        }
    }
}