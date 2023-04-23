<template>
  <div class="wheel-histories">
    <div class="history-item pink"></div>
    <div class="history-item blue"></div>
    <div class="history-item yellow"></div>
    <div class="history-item green"></div>
    <div class="history-item pink"></div>
    <div class="history-item blue"></div>
    <div class="history-item yellow"></div>
    <div class="history-item green"></div>
    <div class="history-item pink"></div>
    <div class="history-item blue"></div>
    <div class="history-item yellow"></div>
    <div class="history-item green"></div>
  </div>
</template>
<style scoped lang="scss">
.wheel-histories {
  position: absolute;
  right: 0;
  bottom: 24px;
  width: 24px;
  height: 280px;
  background: rgba(69, 84, 137, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .history-item {
    width: 8px;
    border-radius: 8px;
    transition: 0.2s;
    cursor: pointer;
    height: 24px;
    min-height: 24px;
    margin-bottom: 8px;
    &:hover {
      opacity: 0.8;
    }
    &.pink {
      background: rgba(164, 48, 255, 0.5);
    }
    &.green {
      background: rgba(74, 186, 98, 0.5);
    }
    &.yellow {
      background: rgba(234, 193, 89, 0.5);
    }
    &.blue {
      background: rgba(78, 112, 233, 0.5);
    }
  }
}
</style>