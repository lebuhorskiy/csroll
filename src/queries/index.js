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
          statistic {
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