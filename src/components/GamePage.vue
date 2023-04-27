<template>
  <div class="game-page">
    <div class="game">
      <div class="tablet-header" :class="{'hide': $route.name === 'wheel'}">
        <HeaderTop />
      </div>
      <slot name="game"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-page {
  display: flex;
  overflow: hidden;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  .game {
    width: 470px;
    min-width: 470px;
    height: 100vh;
    padding-bottom: 12px;
    overflow: hidden;
    display: flex;
    @media (min-width: 1200px) {
      min-height: 900px;
    }
    flex-direction: column;
    @media (max-width: 1500px) {
      width: 320px;
      min-width: 320px;
    }
    @media (max-width: 1200px) {
      min-width: 100%;
      width: 100%;
      .tablet-header {
        padding: 15px 12px;
        padding-top: 10px;
        &.hide {
          display: none !important;
        }
      }
    }
    @media (max-width: 1024px) {
      display: block;
      height: auto;
    }
  }
  .content {
    padding-left: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-right: 12px;
    height: 100vh;
    @media (min-width: 1200px) {
      min-height: 900px;
    }
    padding-bottom: 12px;
    @media (max-width: 1024px) {
      height: auto;
    }
  }
}
</style>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
</script>