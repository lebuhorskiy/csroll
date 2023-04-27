<template>
  <div class="crash-indicator-status">
    <div class="green" :class="{'active': crash.isStarted()}"></div>
    <div class="red" :class="{'active': crash.isFinished()}" ></div>
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
.crash-indicator-status {
  position: absolute;
  left: 86px;
  top: 99px;
  @media (max-width: 1500px) and (min-width: 1200px) {
    top: 66px;
    left: 58.5px;
  }
  @media (max-width: 1200px) {
    top: 87.5px;
    left: 85px;
  }
  @media (max-width: 600px) {
    top: 83px;
    left: 75px;
  }
  @media (max-width: 420px) {
    top: 74px;
    left: 70px;
  }
  @media (max-width: 390px) {
    top: 43%;
    left: 18.5%;
  }
  .green {
    width: 12px;
    height: 12px;
    transition: 0.2s;
    border-radius: 100%;
    opacity: 0.5;
    background: #97CF6A;
    border: 1px solid rgba(151, 207, 106, 0.3);
    &.active {
      opacity: 1;
      box-shadow: 0px -2px 53px rgba(151, 207, 106, 0.98), 0px -0.835552px 22.1421px rgba(151, 207, 106, 0.704477), 0px -0.446726px 11.8382px rgba(151, 207, 106, 0.584185), 0px -0.250431px 6.63642px rgba(151, 207, 106, 0.49), 0px -0.133002px 3.52455px rgba(151, 207, 106, 0.395815), 0px -0.0553451px 1.46665px rgba(151, 207, 106, 0.275523);
      animation: purf 2s infinite;
    }
  }
  .red {
    width: 12px;
    height: 12px;
    opacity: 0.5;
    border-radius: 100%;
    background: #FF5C30;
    transition: 0.2s;
    margin-top: 27px;
    @media (max-width: 1500px) and (min-width: 1200px) {
      margin-top: 18px;
    }
    @media (max-width: 1200px) {
      margin-top: 23px;
    }
    @media (max-width: 600px) {
      margin-top: 21px;
    }
    @media (max-width: 420px) {
      margin-top: 14px;
    }
    @media (max-width: 420px) {

    }
    &.active {
      opacity: 1;
      box-shadow: 0px -2px 53px rgba(255, 92, 48, 0.98), 0px -0.835552px 22.1421px rgba(255, 92, 48, 0.704477), 0px -0.446726px 11.8382px rgba(255, 92, 48, 0.584185), 0px -0.250431px 6.63642px rgba(255, 92, 48, 0.49), 0px -0.133002px 3.52455px rgba(255, 92, 48, 0.395815), 0px -0.0553451px 1.46665px rgba(255, 92, 48, 0.275523);
    }
    border: 1px solid rgba(255, 92, 48, 0.3);
  }
  @media (max-width: 1500px) and (min-width: 1200px) {
    .red,.green {
      width: 8px;
      height: 8px;
    }
  }
}
@keyframes purf {
  0% {
    transform: scale(1.0)
  }
  50% {
    transform: translateY(-0.5px) scale(1.2);
  }
  100% {
    transform: scale(1.0)
  }
}
</style>