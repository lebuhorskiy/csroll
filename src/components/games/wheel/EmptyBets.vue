<template>
  <div class="empty-bets">
    <img src="@/assets/images/big-info.png" alt="">
    <span>Ставок нет</span>
  </div>
</template>
<style scoped lang="scss">
.empty-bets {
  flex-grow: 1;
  width: 100%;
  display: flex;
  background: linear-gradient(180deg, rgba(69, 84, 137, 0) 0%, rgba(69, 84, 137, 0.1) 100%);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    width: 100%;
    display: block;
    text-align: center;
    margin-top: 24px;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #576CB0;

  }
  @media (max-width: 620px) {
    img {
      width: 40px;
    }
    span {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>