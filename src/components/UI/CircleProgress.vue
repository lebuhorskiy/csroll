<template>
  <progress-circle :completed-steps="completed" :total-steps="total" :start-color="startColor" :stop-color="stopColor" :circle-width="circleWidth" circle-color="#2A3457" :diameter="diameter"></progress-circle>
</template>
<script>
import { ProgressCircle } from 'vue-progress-circle'
export default {
  props: {
    diameter: {
      default: 132,
      type: Number
    },
    circleWidth: {
      default: 12,
      type: Number
    },
    startColor: {
      type: String,
      default: 'rgba(234, 193, 89, 0.1)'
    },
    stopColor: {
      type: String,
      default: 'rgba(234, 193, 89, 1)'
    },
    completed: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  components: {
    ProgressCircle
  }
}
</script>
<style scoped lang="scss">

</style>