<template>
  <div class="wheel-bets">
    <WheelBet color="blue" />
    <WheelBet color="green" />
    <WheelBet color="pink" />
    <WheelBet color="yellow" />
  </div>
</template>
<script setup>
import WheelBet from "@/components/games/wheel/WheelBet.vue";
</script>
<style scoped lang="scss">
.wheel-bets {
  display: grid;
  margin-top: 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 11px;
  flex-grow: 1;
  overflow: hidden;
}
</style>