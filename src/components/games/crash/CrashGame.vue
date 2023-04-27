<template>
  <div class="crash-game">
    <CrashIndicator />
    <RoundsHistory v-if="$root.width < 1024" />
    <BetInventory />
  </div>
</template>
<script setup>
import BetInventory from "@/components/games/BetInventory.vue";
import CrashIndicator from "@/components/games/crash/CrashIndicator.vue";
import RoundsHistory from "@/components/games/crash/RoundsHistory.vue";
</script>
<style scoped lang="scss">
.crash-game {
  flex-grow: 1;
  padding-left: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    padding-right: 12px;
  }
}
</style>