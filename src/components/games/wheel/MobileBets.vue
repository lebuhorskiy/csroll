<template>
  <div class="mobile-bets">
    <div class="bet blue">2x</div>
    <div class="bet green">3x</div>
    <div class="bet purple">5x</div>
    <div class="bet yellow">20x</div>
  </div>
</template>
<style scoped lang="scss">
.mobile-bets {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-top: 16px;
  .bet {
    padding: 10px 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    transition: 0.2s;
    border-radius: 16px;
    &.blue {
      background: rgba(78, 112, 233, 0.2);
      &:hover {
        background: rgba(78, 112, 233, 0.5);
      }
    }
    &.green {
      background: rgba(74, 186, 98, 0.2);
      &:hover {
        background: rgba(74, 186, 98, 0.5);
      }
    }
    &.purple {
      background: rgba(164, 48, 255, 0.2);
      &:hover {
        background: rgba(164, 48, 255, 0.5);
      }
    }
    &.yellow {
      background: rgba(234, 193, 89, 0.2);
      &:hover {
        background: rgba(234, 193, 89, 0.5);
      }
    }
  }
}
</style>