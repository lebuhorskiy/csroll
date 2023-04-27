import BaseModel from './BaseModel'
import {STATUS_FINISHED, STATUS_STARTED, STATUS_TIMER} from "@/components/games/crash/definitions/statuses";

export default class CrashModel extends BaseModel {
    get schema () {
        return {
            id: undefined,
            multiplier: undefined,
            startedAt: undefined,
            nextAt: undefined,
            hash: undefined,
            salt: undefined,
            status: undefined,
            createdAt: undefined,
            currentDate: undefined,
            bets: [],
            itemsCount: undefined,
            usersCount: undefined,
            itemsTotal: undefined
        }
    }

    isTimer () {
        return this.status === STATUS_TIMER
    }

    isStarted () {
        return this.status === STATUS_STARTED
    }

    isFinished () {
        return this.status === STATUS_FINISHED
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
