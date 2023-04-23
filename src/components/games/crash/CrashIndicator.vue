<template>
  <div class="crash-indicator">
    <div class="crash-timer">
      <strong>{{ getValues }}</strong>
      <span>sec</span>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      seconds: 10,
      timer: null
    }
  },
  computed: {
    getValues () {
      const spl = String(this.seconds).split('.')
      if (!spl[0] || !spl[1]) {
        return '00:00'
      }
      return spl[0] + ':' + '0' + spl[1]
    },
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

}
</script>
<style scoped lang="scss">
.crash-indicator {
  height: 226px;
  min-height: 226px;
  background: url(@/assets/images/crash-panel-bg.png);
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .crash-timer {
    display: flex;
    align-items: flex-end;
    padding-top: 18px;
    padding-left: 30px;
    strong {
      width: 90px;
      font-weight: 700;
      font-size: 40px;
      line-height: 80%;
      font-family: 'DS-Digital', sans-serif;
    }
    span {
      font-weight: 700;
      font-family: 'DS-Digital', sans-serif;
      font-size: 18px;
      line-height: 100%;
      margin-left: 2px;
    }
  }
}
</style>