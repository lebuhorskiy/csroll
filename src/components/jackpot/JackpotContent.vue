<template>
  <div class="jackpot-game">
    <HeaderTop v-if="$root.width > 1200" />
    <TopIndicators />
<!--    <UsersBets />-->
    <JackpotRoulette />
    <BetsList />
  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
import TopIndicators from "@/components/jackpot/TopIndicators.vue";
// import UsersBets from "@/components/jackpot/UsersBets.vue";
import BetsList from "@/components/jackpot/BetsList.vue";
import JackpotRoulette from "@/components/jackpot/JackpotRoulette.vue";
</script>
<style scoped lang="scss">
.jackpot-game {
  padding-top: 15px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    padding-top: 4px;
  }
}
</style>