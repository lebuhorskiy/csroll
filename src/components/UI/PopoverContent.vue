<template>
  <div class="popover-content">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.popover-content {
  background: #2E385F;
  box-shadow: 0px 0px 10px rgba(33, 41, 72, 0.6);
  border-radius: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  padding: 8px 16px;
  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>