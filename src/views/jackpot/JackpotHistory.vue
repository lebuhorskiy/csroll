<template>
  <div class="jackpot-history">
    <HeaderTop />
    <GameHistoryIndicators />

    <div class="bets">
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
      <BetInstance />
    </div>
  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
import GameHistoryIndicators from "@/components/games/GameHistoryIndicators.vue";
import BetInstance from "@/components/jackpot/BetInstance.vue";
</script>
<style scoped lang="scss">
.jackpot-history {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  @media (min-width: 1200px) {
    min-height: 900px;
  }
  padding: 15px 12px;
  .bets {
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
    margin-top: 16px;
    &::-webkit-scrollbar {
      width: 8px;
      background: rgba(69, 84, 137, 0.05);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(69, 84, 137, 0.25);
      border-radius: 5px;
    }
    .bet + .bet {
      margin-top: 12px;
    }
  }
}
</style>