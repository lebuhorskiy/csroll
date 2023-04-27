import gql from 'graphql-tag'


export const CRASH_CREATED = gql`subscription CrashCreatedStream {
    CrashCreatedStream {
            multiplier
            startedAt
            nextAt
            hash
            salt
            status
            currentDate
            bets {
                type
                multiplier
                itemsTotal
                winSumUsd
                status
                items {
                    priceUsd
                    item {
                        name
                        rarity
                        quality
                        isStattrak
                        stock
                        id
                    }
                    
                }
                winItem {
                    priceUsd
                    item {
                        name
                        rarity
                        quality
                        isStattrak
                        stock
                        id
                    }    
                }
                user {
                    steamId64
                    steamPhoto
                    nickname
                    balanceUsd
                    flags
                    level
                }
            }
            itemsCount
            usersCount
            itemsTotal
    }
}`
export const CRASH_STARTED = gql`subscription CrashStartedStream {
    CrashStartedStream {
        date
    }
}`
export const CRASH_FINISHED = gql`subscription CrashFinishedStream {
    CrashFinishedStream {
        multiplier
        nextAt
    }
}`