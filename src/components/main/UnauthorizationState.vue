<template>
  <div class="unauthorization-state">
    <AuthorizationButton />
  </div>
</template>
<script>
import AuthorizationButton from "@/components/UI/AuthorizationButton.vue";
export default {
  components: {AuthorizationButton},
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.unauthorization-state {
  margin-right: 20px;
}
</style>