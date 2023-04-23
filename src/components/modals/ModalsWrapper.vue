<template>
  <div class="modals-wrapper">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.modals-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background: rgba(69, 84, 137, 0.2);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
