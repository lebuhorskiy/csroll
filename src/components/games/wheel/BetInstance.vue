<template>
  <div class="bet-instance">
    <div class="bet-instance_user">
      <div class="avatar">
        <img src="@/assets/images/av1.png" alt="">
      </div>
      <div class="nickname">Courtney</div>
    </div>
    <div class="bet-instance_bet">
      <strong>$ 54,87</strong>
    </div>
  </div>
</template>
<style scoped lang="scss">
.bet-instance {
  display: flex;
  padding: 16px 24px;
  align-items: center;
  background: rgba(69, 84, 137, 0.1);
  border-radius: 16px;
  overflow: hidden;
  min-height: 82px;
  justify-content: space-between;
  .bet-instance_user {
    display: flex;
    align-items: center;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      min-height: 50px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }

      margin-right: 16px;
    }
    .nickname {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
  }
  .bet-instance_bet {
    strong {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #EAC159;
    }
  }
}
</style>