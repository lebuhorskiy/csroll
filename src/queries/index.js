import gql from 'graphql-tag'
export const GET_MY_PROFILE = gql`
  query getUser {
      getUser {
          steamId64
          steamTradeToken
          steamPhoto
          nickname
          balanceUsd
          flags
          level
          getStatistic {
            biggestMultiplier
            totalCountBets
            totalCountWins
            winRate
            totalWinAmount
            largestWinAmount
          }
      }
  }
`

export const GET_SHOP_ITEMS = gql`
    query getItems ($skip: Int!, $take: Int!, $priceFrom: Float!, $priceTo: Float!) {
        getItems (skip: $skip, take: $take, priceFrom: $priceFrom, priceTo: $priceTo) {
            total
            records {
                id
                name
                rarity
                quality
                isStattrak
                stock
                priceUsd
                type
            }
        }
    }
`

export const GET_RATES = gql`
    query getRates {
        getRates {
            symbol
            currency
            rate
        }
    }
`


//// crash

export const GET_CRASH = gql`
    query getCrash {
        getCrash {
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
    }
`

export const GET_INVENTORY = gql`
    query getInventory ($skip: Int!, $take: Int!) {
        getInventory (skip: $skip, take: $take) {
            records {
                id
                steamId64
                status
                createdAt
                priceUsd
                item {
                    id
                    name
                    rarity
                    quality
                    isStattrak
                    stock
                }
            }
            total
        }
    }
`