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
  @media (max-width: 1024px) {
    height: 500px;
    min-height: 500px;
    flex-grow: unset;
    flex-shrink: unset;
  }
  @media (max-width: 600px) {
    padding-right: 5px;
  }
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