<template>
  <div class="bets-list">
      <BetInstance :bet="bet" v-for="bet in bets" :key="bet.id" />
  </div>
</template>
<script>
import BetInstance from "@/components/games/crash/BetInstance.vue";
export default {
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
          status: 'wait'
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
          status: 'wait'
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
          status: 'wait'
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
          status: 'wait'
        },
        {
          id: 12,
          status: 'wait'
        }
      ]
    }
  },
  components: {
    BetInstance
  }
}
</script>
<style scoped lang="scss">
.bets-list {
  .bet-instance + .bet-instance {
    margin-top: 12px;
  }
}
</style>