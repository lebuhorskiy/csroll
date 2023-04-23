<template>
  <div class="game-page">
    <div class="game">
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
  .game {
    width: 470px;
    min-width: 470px;
    height: 100vh;
    padding-bottom: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .content {
    padding-left: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-right: 12px;
    height: 100vh;
    padding-bottom: 12px;
  }
}
</style>