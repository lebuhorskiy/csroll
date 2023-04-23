import BaseModel from './BaseModel'

export default class UserModel extends BaseModel {
    get schema () {
        return {
            steamId64: undefined,
            steamTradeToken: undefined,
            steamPhoto: undefined,
            nickname: undefined,
            balanceUsd: undefined,
            flags: undefined,
            level: undefined,
            statistic: undefined,
        }
    }

    getBalance () {
        return parseFloat(this.balanceUsd).toFixed(2)
    }

    prepareCreate () {
        this.baseClear()

        return this
    }

    prepareUpdate () {
        this.baseClear()

        return this
    }
}
