<template>
  <div class="jackpot-game">
    <JackpotPrize />
    <BetInventory />
  </div>
</template>
<script setup>
import BetInventory from "@/components/games/BetInventory.vue";
import JackpotPrize from "@/components/jackpot/JackpotPrize.vue";
</script>
<style scoped lang="scss">
.jackpot-game {
  padding-left: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
</style>