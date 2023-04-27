import { apolloClient } from '@/vue-apollo'
import {GET_INVENTORY} from "@/queries";

export default {
    namespaced: true,
    state: {
        filters: {
          skip: 0,
          take: 20
        },
        items: [],
    },
    getters: {
        filters: state => state.filters,
        items: state => state.items
    },
    mutations: {
        setItems (state, items) {
            state.items = items
        }
    },
    actions: {
        async getItems ({commit, getters}) {
            const { data } = await apolloClient.query({ query: GET_INVENTORY, variables: getters.filters })
            if (data.getInventory) {
                commit('setItems', data.getInventory)
            }
        }
    }
}