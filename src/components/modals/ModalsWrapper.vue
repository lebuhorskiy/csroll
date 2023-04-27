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
  height: 100dvh;
  width: 100%;
  background: rgba(69, 84, 137, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
