<template>
  <div class="crash-history">
    <HeaderTop />
    <GameHistoryIndicators />

    <div class="bets">
      <BetInstance v-for="bet in bets" :key="bet.id" :bet="bet" />
    </div>

  </div>
</template>
<script>
import BetInstance from "@/components/games/crash/BetInstance.vue";
import HeaderTop from "@/components/main/HeaderTop.vue";
import GameHistoryIndicators from "@/components/games/GameHistoryIndicators.vue";
export default  {
  data () {
    return {
      bets: [
        {
          id: 0,
          status: 'success'
        },
        {
          id: 1,
          status: 'fail'
        },
        {
          id: 2,
          status: 'success'
        },
        {
          id: 3,
          status: 'success'
        },
        {
          id: 4,
          status: 'fail'
        },
        {
          id: 5,
          status: 'success'
        },
        {
          id: 6,
          status: 'success'
        },
        {
          id: 7,
          status: 'fail'
        },
        {
          id: 8,
          status: 'success'
        },
        {
          id: 9,
          status: 'success'
        },
        {
          id: 10,
          status: 'fail'
        },
        {
          id: 11,
          status: 'success'
        },
        {
          id: 12,
          status: 'success'
        }
      ]
    }
  },
  components: {
    GameHistoryIndicators,
    HeaderTop,
    BetInstance
  }
}
</script>
<style scoped lang="scss">
.crash-history {
  height: 100vh;
  @media (min-width: 1200px) {
    min-height: 900px;
  }
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 15px 12px;
  @media (max-width: 1024px) {
    height: auto;
  }
  .bets {
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 32px;
    @media (max-width: 1024px) {
      height: 500px;
      padding-right: 5px;
    }
    &::-webkit-scrollbar {
      width: 8px;
      background: rgba(69, 84, 137, 0.05);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(69, 84, 137, 0.25);
      border-radius: 5px;
    }
    .bet-instance + .bet-instance {
      margin-top: 12px;
    }
  }
}
</style>