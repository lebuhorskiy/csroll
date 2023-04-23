<template>
  <div class="crash-game">
    <CrashIndicator />
    <BetInventory />
  </div>
</template>
<script setup>
import BetInventory from "@/components/games/BetInventory.vue";
import CrashIndicator from "@/components/games/crash/CrashIndicator.vue";
</script>
<style scoped lang="scss">
.crash-game {
  flex-grow: 1;
  padding-left: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>