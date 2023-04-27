<template>
  <div class="crash-indicator">
    <CrashTimer v-if="crash.isTimer()" />
    <CrashMultiplier v-if="crash.isStarted()"></CrashMultiplier>
    <CrashFinished v-if="crash.isFinished()" />
    <CrashStatusBg />
    <CrashIndicatorStatus />
  </div>
</template>
<script>

import CrashTimer from "@/components/games/crash/CrashTimer.vue";
import {mapGetters} from "vuex";
import CrashMultiplier from "@/components/games/crash/CrashMultiplier.vue";
import CrashFinished from "@/components/games/crash/CrashFinished.vue";
import CrashStatusBg from "@/components/games/crash/CrashStatusBg.vue";
import CrashIndicatorStatus from "@/components/games/crash/CrashIndicatorStatus.vue";

export default {
  components: {CrashIndicatorStatus, CrashStatusBg, CrashFinished, CrashMultiplier, CrashTimer},
  data () {
    return {
      seconds: 10,
      timer: null
    }
  },
  computed: {
    ...mapGetters({
      crash: 'crash/crash'
    })
  },
  methods: {
    setTimer () {
      this.timer = setInterval(() => {
        this.seconds = '0' + parseFloat(this.seconds - 0.1).toFixed(1)
        if (parseFloat(this.seconds) < 0.1) {
          clearInterval(this.timer)
          this.seconds = 10
          this.setTimer()
        }
      }, 100)
    },
  },
  mounted () {
    this.setTimer()
  },

}
</script>
<style scoped lang="scss">
.crash-indicator {
  height: 226px;
  position: relative;
  min-height: 226px;
  background: url(@/assets/images/crash-panel-bg-2.png);
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1500px) {
    height: 150px;
    min-height: 150px;
  }
  @media (max-width: 1200px) {
    width: 450px;
    height: 200px;
    min-height: 200px;
    margin: 0 auto;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    width: 400px;
    height: 190px;
    min-height: 190px;
  }
  @media (max-width: 420px) {
    height: 170px;
    min-height: 170px;
  }
  @media (max-width: 390px) {
    height: 150px;
    min-height: 150px;
  }
}
</style>