import { apolloClient } from '@/vue-apollo'
import {GET_CRASH} from "@/queries";
import CrashModel from "@/models/CrashModel";
import {STATUS_FINISHED, STATUS_STARTED} from "@/components/games/crash/definitions/statuses";

export default {
    namespaced: true,
    state: {
        betType: 'skins',
        crash: null
    },
    getters: {
        betType: state => state.betType,
        status: state => state.crash ? state.crash.status : null,
        crash: state => state.crash
    },
    mutations: {
        setCrash (state, crash) {
            state.crash = new CrashModel(crash)
        },
        startedCrash (state, date) {
          state.crash.status = STATUS_STARTED
          state.crash.startedAt = date
        },
        finishedCrash (state, data) {
          state.crash.status = STATUS_FINISHED
          state.crash.multiplier = data.multiplier
          state.crash.nextAt = data.nextAt
        },
        setBetType (state, type) {
            state.betType = type
        }
    },
    actions: {
        async init ({commit}) {
            const { data } = await apolloClient.query({ query: GET_CRASH })
            if (data.getCrash) {
                commit('setCrash', data.getCrash)
            }
        },
        async created ({commit}, data) {
          commit('setCrash', data)
        },
        async started ({commit}, date) {
            commit('startedCrash', date)
        },
        async crashFinished ({commit}, data) {
            commit('finishedCrash', data);
        }
    }
}