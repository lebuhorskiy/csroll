<template>
  <div class="wheel-content">
    <HeaderTop />
    <WheelStatistics />
    <WheelBets />
  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
import WheelStatistics from "@/components/games/wheel/WheelStatistics.vue";
import WheelBets from "@/components/games/wheel/WheelBets.vue";
</script>
<style scoped lang="scss">
.wheel-content {
  padding-top: 15px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>