<template>
  <div class="bets-list">
    <BetInstance />
    <BetInstance />
    <BetInstance />
    <BetInstance />
    <BetInstance />
    <BetInstance />
    <BetInstance />
    <BetInstance />
  </div>
</template>

<style scoped lang="scss">
.bets-list {
  flex-grow: 1;
  margin-top: 16px;
  padding-right: 10px;
  flex-shrink: 100;
  overflow-y: auto;
  .bet + .bet {
    margin-top: 12px;
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
}
</style>
<script setup>
import BetInstance from "./BetInstance.vue";
</script>