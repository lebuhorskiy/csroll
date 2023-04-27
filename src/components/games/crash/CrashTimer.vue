<template>
  <div class="crash-multiplier">
    <countdown :time="startedAt" :interval="100" v-slot="{ seconds, milliseconds }">
      <strong>{{ seconds < 10 ? '0' + seconds : seconds }}:0{{ Math.floor(milliseconds / 100) }}</strong>
    </countdown>
    <em>sec</em>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  data () {
    return {
      seconds: 10,
      timer: null
    }
  },
  computed: {
    ...mapGetters({
      crash: 'crash/crash'
    }),
    startedAt () {
      const now = (new Date()).getTime();
      const startGame = (new Date(this.crash.startedAt)).getTime()
      console.log(Math.abs((startGame - now) / 1000))
      return Math.abs((startGame - now) / 1000) * 1000
    }
  },
}
</script>
<style scoped lang="scss">
span {}
</style>