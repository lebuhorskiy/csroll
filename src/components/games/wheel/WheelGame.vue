<template>
  <div class="wheel-game">
    <div class="wheel-wrapper">
      <WheelInstance />
      <WheelHistories />
      <div class="corner-shadow"></div>
      <div class="indicator">
        <strong>{{seconds }}</strong>
        <span>До старта</span>
      </div>
    </div>
    <button class="bet">
      Поставить 1 763,44 $
    </button>

    <BetInventory />
  </div>
</template>
<script >
import WheelInstance from "@/components/games/wheel/WheelInstance.vue";
import WheelHistories from "@/components/games/wheel/WheelHistories.vue";
import BetInventory from "@/components/games/BetInventory.vue";
export default {
  data () {
    return {
      seconds: 10,
      timer: null
    }
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
    }
  },
  mounted () {
    this.setTimer()
  },
  components: {
    WheelHistories,
    BetInventory,
    WheelInstance
  }
}
</script>
<style scoped lang="scss">
.wheel-game {
  position: relative;
  width: 100%;
  padding-left: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding-right: 12px;
  }
  .wheel-wrapper {
    .indicator {
      position: absolute;
      z-index: 9;
      left: 30px;
      top: 20px;
      @media (max-width: 600px) {
        left: 20px;
      }
      strong,span {
        display: block;
        width: 100%;
      }
      strong {
        font-weight: 700;
        font-size: 40px;
        line-height: 120%;
      }
      span {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #576CB0;
      }
    }
    height: 275px;
    min-height: 275px;
    position: relative;
    .corner-shadow {
      position: absolute;
      right: 0;
      z-index: 99;
      top: 0;
      height: 0px;
      width: 0px;
      box-shadow: 0px 0px 90px 132px rgba(30, 37, 66, 0.9);
    }
  }
  .bet {
    background: #4E70E9;
    border-radius: 8px;
    padding: 18px 0;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 100%;
    width: 100%;
    transition: 0.2s;
    cursor: pointer;
    @media (max-width: 600px) {
      margin-bottom: 0;
    }
    &:hover {
      opacity: 0.8;
    }
    &:focus-within {
      opacity: 0.5;
    }
  }
}
</style>