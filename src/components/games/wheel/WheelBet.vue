<template>
  <div class="wheel-bet" :class="[color, {'is-win': isWin}]">
    <div class="wheel-bet_head" :class="{'active': selectTab}" @click="selectTab = !selectTab">
      <strong>2x</strong>
      <div class="indicators">
        <div class="indicator">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.595 7.93189C19.1973 7.93189 20.4971 6.63298 20.4971 5.03064C20.4971 3.42831 19.1973 2.12939 17.595 2.12939" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.9292 11.0848C19.4077 11.1178 19.8834 11.1856 20.3519 11.291C21.0027 11.4184 21.7855 11.6852 22.0642 12.2691C22.242 12.6431 22.242 13.0785 22.0642 13.4534C21.7864 14.0374 21.0027 14.3032 20.3519 14.437" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.29011 7.93189C4.68777 7.93189 3.38794 6.63298 3.38794 5.03064C3.38794 3.42831 4.68777 2.12939 6.29011 2.12939" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.95589 11.0848C4.47739 11.1178 4.00164 11.1856 3.53322 11.291C2.88239 11.4184 2.09956 11.6852 1.82181 12.2691C1.64306 12.6431 1.64306 13.0785 1.82181 13.4534C2.09864 14.0374 2.88239 14.3032 3.53322 14.437" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9379 11.7095C15.1847 11.7095 17.9586 12.2009 17.9586 14.1671C17.9586 16.1324 15.2031 16.6421 11.9379 16.6421C8.69015 16.6421 5.91724 16.1508 5.91724 14.1845C5.91724 12.2183 8.67274 11.7095 11.9379 11.7095Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9378 8.90492C9.79651 8.90492 8.07959 7.188 8.07959 5.04575C8.07959 2.90442 9.79651 1.1875 11.9378 1.1875C14.0792 1.1875 15.7961 2.90442 15.7961 5.04575C15.7961 7.188 14.0792 8.90492 11.9378 8.90492Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          50
        </div>
        <div class="indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7M9 9H19C20.1046 9 21 9.89543 21 11V17C21 18.1046 20.1046 19 19 19H9C7.89543 19 7 18.1046 7 17V11C7 9.89543 7.89543 9 9 9ZM16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          324,12 $
        </div>
      </div>
    </div>
      <div v-if="empty" class="wheel-bets empty" :class="{'active': selectTab}">
        <EmptyBets />
      </div>
      <div v-else class="wheel-bets" :class="{'active': selectTab}">
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
        <BetInstance :color="color" :is-win="isWin" />
      </div>
  </div>
</template>
<script>
// import EmptyBets from "@/components/games/wheel/EmptyBets.vue";

import BetInstance from "@/components/games/wheel/BetInstance.vue";
import EmptyBets from "@/components/games/wheel/EmptyBets.vue";

export default {
  data () {
    return {
      selectTab: false
    }
  },
  components: {
    EmptyBets,
    BetInstance
    // EmptyBets
  },
  props: {
    empty: {
      type: Boolean,
      default: false
    },
    isWin: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  }
}
</script>
<style scoped lang="scss">
.wheel-bet {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .wheel-bet_head {
    padding: 16px;
    display: flex;
    background: rgba(78, 112, 233, 0.2);
    align-items: center;
    border-radius: 16px;
    @media (max-width: 600px) {
      border: 2px solid transparent;
    }
    justify-content: space-between;
    @media (max-width: 600px) {
      &.active {
        border: 2px solid rgba(255,255,255, 0.3) !important;
      }
    }
    @media (max-width: 600px) {
      background: rgb(65 79 128 / 10%) !important;
      padding: 14px;
    }
    strong {
      font-weight: 700;
      font-size: 22px;
      line-height: 36px;
      color: #4E70E9;
      @media (max-width: 620px) {
        display: none;
      }
    }
    .indicators {
      display: flex;
      align-items: center;
      .indicator {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #4E70E9;
        svg {
          margin-right: 4px;
        }
      }
      .indicator + .indicator {
        margin-left: 24px;
      }
    }
  }
  .wheel-bets {
    display: flex;
    overflow-y: auto;
    margin-top: 16px;
    padding-right: 4px;
    flex-direction: column;
    border-radius: 16px;
    @media (max-width: 600px) {
      display: none;
      &.active {
        display: flex;
      }
    }
    @media (max-width: 1024px) {
      height: 350px;
      &.empty {
        height: 110px;
      }
    }
    @media (max-width: 600px) {
      margin-top: 10px;
    }
    &::-webkit-scrollbar {
      width: 4px;
      background: rgba(69, 84, 137, 0.05);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(69, 84, 137, 0.1);
      border-radius: 5px;
    }
    flex-grow: 1;
    .bet-instance + .bet-instance {
      margin-top: 8px;
      @media (max-width: 600px) {
        margin-top: 4px;
      }
    }
  }
}
.wheel-bet {
  &.pink {
    .wheel-bet_head {
      background: rgba(164, 48, 255, 0.2);
      strong {
        color: #A430FF;
      }
      .indicators {
        .indicator {
          color: #A430FF;
          svg {
            path {
              stroke: #A430FF;
            }
          }
        }
      }
    }
  }
  &.green {
    .wheel-bet_head {
      background: rgba(74, 186, 98, 0.2);
      strong {
        color: #4ABA62;
      }
      .indicators {
        .indicator {
          color: #4ABA62;
          svg {
            path {
              stroke: #4ABA62;
            }
          }
        }
      }
    }
  }
  &.yellow {
    .wheel-bet_head {
      background: rgba(234, 193, 89, 0.2);
      strong {
        color: #EAC159;
      }
      .indicators {
        .indicator {
          svg {
            path {
              stroke: #EAC159;
            }
          }
          color: #EAC159;
        }
      }
    }
  }
}

.wheel-bet.is-win {
    &.pink {
      .wheel-bet_head {
        background: rgba(164, 48, 255, 0.5) !important;
      }
    }
    &.green {
      .wheel-bet_head {
        background: rgba(74, 186, 98, 0.5) !important;
      }
    }
    &.yellow {
      .wheel-bet_head {
        background: rgba(234, 193, 89, 0.5) !important;
      }
    }
  &.blue {
    .wheel-bet_head {
      background: rgba(78, 112, 233, 0.5) !important;
    }
  }
}
</style>