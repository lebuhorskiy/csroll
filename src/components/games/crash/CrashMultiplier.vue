<template>
  <div class="crash-multiplier">
    <strong>
      {{ multiplier < 10 ? '0' : '' }}{{ parseFloat(multiplier).toFixed(2) }}
    </strong>
    <em>x</em>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  data () {
    return {
      name: 'David',
      now: 0,
      i: 0,
      interval: null,
      multiplier: 0.0
    }
  },
  computed: {
    ...mapGetters({
        crash: 'crash/crash'
    })
  },
  mounted () {
    this.updateNow()
    setInterval(this.updateNow.bind(this) , 10)
  },

  methods: {
    updateNow() {
      const currentTime = new Date().getTime() / 1000;
      const elapsedTime = currentTime - new Date(this.crash.startedAt).getTime() / 1000;
      let i = elapsedTime * 20;
      this.multiplier = Math.pow(Math.E, (0.00006 * i * 1000) / 20).toFixed(2);
    }
  }
}
</script>
