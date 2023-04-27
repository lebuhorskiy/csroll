<template>
  <div class="bet-skins">
    <div class="bet-skin">
      <EmptySkin v-if="!skin" />
      <BetSkin :skin="skin" v-else />
    </div>
  </div>
</template>

<script>
import EmptySkin from "@/components/games/EmptySkin.vue";
import BetSkin from "@/components/games/crash/bet/BetSkin.vue";
export default  {
  props: ['skin'],
  components: {
    BetSkin,
    EmptySkin
  }
}
</script>
<style scoped lang="scss">
.bet-skins {
  display: flex;
  width: 100%;
  justify-content: space-around;
  .bet-skin {
    width: 180px;
    height: 180px;
    @media (max-width: 1500px) {
      width: 150px;
      height: 150px;
    }
  }
}
</style>