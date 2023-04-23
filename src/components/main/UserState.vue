<template>
  <div class="user-state">
    <AuthorizationState v-if="$root.isAuth" />
    <UnauthorizationState v-else />
  </div>
</template>
<script setup>
import AuthorizationState from "@/components/main/AuthorizationState.vue";
import UnauthorizationState from "@/components/main/UnauthorizationState.vue";
</script>