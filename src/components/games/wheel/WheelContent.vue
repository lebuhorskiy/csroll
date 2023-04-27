<template>
  <div class="wheel-content">
    <HeaderTop v-if="$root.width > 1200" />
    <WheelStatistics />
    <MobileBets v-if="$root.width < 600" />
    <WheelBets />
  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
import WheelStatistics from "@/components/games/wheel/WheelStatistics.vue";
import WheelBets from "@/components/games/wheel/WheelBets.vue";
import MobileBets from "@/components/games/wheel/MobileBets.vue";
</script>
<style scoped lang="scss">
.wheel-content {
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