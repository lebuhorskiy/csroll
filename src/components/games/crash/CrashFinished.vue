<template>
  <div class="crash-multiplier">
    <strong>{{ crash.multiplier < 10 ? '0' : '' }}{{ parseFloat(crash.multiplier).toFixed(2) }}</strong>
    <em>x</em>
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
