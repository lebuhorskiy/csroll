<template>
  <div class="crash-status-bg" :class="[crash.status]">
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      crash: 'crash/crash'
    })
  }
}
</script>
<style scoped lang="scss">
.crash-status-bg {
  position: absolute;
  z-index: 2;
  top: calc(50% - 13px);
  left: calc(50% - 75px);
  height: 47px;
  width: 186px;
  border-radius: 2px;
  overflow: hidden;
  transition: 0.5s;
  background: url(@/assets/images/crash-timer-bg.png);
  background-size: 100% 100%;

  &.started {
    background: url(@/assets/images/crash-progress-bg.png);
    background-size: 100% 100%;
  }
  &.finished {
    background: url(@/assets/images/crash-finish-bg.png);
    background-size: 100% 100%;
  }
  @media (max-width: 1500px) and (min-width: 1200px) {
    height: 30px;
    width: 122px;
    left: calc(50% - 49px);
    top: calc(50% - 7px)
  }
  @media (max-width: 1200px) {
    top: calc(50% - 12.5px);
    left: calc(50% - 75px);
    height: 44px;
    width: 186px;
  }
  @media (max-width: 600px) {
    height: 40px;
    width: 160px;
    top: calc(50% - 11px);
    left: calc(50% - 64px);
  }
  @media (max-width: 420px) {
    height: 35px;
    top: calc(50% - 9px);
    width: 40%;
    left: 33.8%;
  }

  @media (max-width: 390px) {
    height: 30px;
    top: calc(50% - 7.5px);
    width: 40%;
    left: 33.8%;
  }
}
</style>