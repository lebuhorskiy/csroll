<template>
  <div class="crash-content">
    <HeaderTop v-if="$root.width > 1200" />
    <CrashControlPanel />
    <RoundsHistory v-if="$root.width > 1023" />
    <StatisticRound />
    <BetsList />
  </div>
</template>
<script setup>
import RoundsHistory from "@/components/games/crash/RoundsHistory.vue";
import StatisticRound from "@/components/games/crash/StatisticRound.vue";
import BetsList from "@/components/games/crash/BetsList.vue";
import CrashControlPanel from "@/components/games/crash/CrashControlPanel.vue";
import HeaderTop from "@/components/main/HeaderTop.vue";
</script>
<style scoped lang="scss">
.crash-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-top: 0;
  }
  .rounds-history {
    flex-shrink: 0;
    margin-bottom: 16px;
  }
  .statistic-round {
    flex-shrink: 0;
  }
  .bets-list {
    flex-shrink: 2;
    padding-right: 12px;
    flex-grow: 1;
    overflow-y: auto;
    @media (max-width: 575px) {
      padding-right: 5px;
    }
    &::-webkit-scrollbar {
      background: rgba(69, 84, 137, 0.05);
      width: 8px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(69, 84, 137, 0.25);
      border-radius: 5px;
    }
    margin-top: 16px;
  }
  .crash-control {
    flex-shrink: 0;
  }
}
</style>