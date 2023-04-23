<template>
  <div class="jackpot-game">
    <HeaderTop />
    <TopIndicators />
    <UsersBets />
    <BetsList />
  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
import TopIndicators from "@/components/jackpot/TopIndicators.vue";
import UsersBets from "@/components/jackpot/UsersBets.vue";
import BetsList from "@/components/jackpot/BetsList.vue";
</script>
<style scoped lang="scss">
.jackpot-game {
  padding-top: 15px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>