<template>
  <div class="bet-instance" :class="[bet.status]">
    <div class="bet-user">
      <img src="@/assets/images/avatar-2.png" alt="">
    </div>
    <div class="bet-cost">
      $ 278,15
    </div>
    <div class="skins">
      <div class="skin">
        <img src="@/assets/images/skin-1.png" alt="">
      </div>
      <div class="skin">
        <img src="@/assets/images/skin-2.png" alt="">
      </div>
      <div class="skin">
        <img src="@/assets/images/skin-3.png" alt="">
      </div>
    </div>
    <div class="coeficient" v-if="bet.status !== 'wait'">
      10.20 x
    </div>

    <div class="result">
      <div class="win-information" v-if="bet.status === 'success'">
        <div class="prize-cost">
          $ 3 999,87
        </div>
        <div class="prize-img">
          <img src="@/assets/images/skin-3.png" alt="">
        </div>
        <div class="prize-bg">
          <img src="@/assets/images/bet-prize-bg.png" alt="">
        </div>
      </div>
      <div class="lose-information" v-else-if="bet.status === 'fail'">
        <div class="prize-bg">
          <img src="@/assets/images/bet-prize-bg-fail.png" alt="">
        </div>
      </div>
      <div class="in-game" v-else>
        В игре
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bet: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.bet-instance {
  border-radius: 16px;
  background: rgba(69, 84, 137, 0.1);
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 19px;
  .bet-user {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    img {
      width: 100%;
      height: 100%;
    }

    margin-right: 40px;
  }
  .bet-cost {
    width: 96px;
    min-width: 96px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
  .skins {
    width: 200px;
    min-width: 200px;
    margin-right: 85px;
    display: flex;
    .skin {
      width: 60px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .skin + .skin {
      margin-left: 16px;
    }
  }
  .coeficient {
    border-radius: 8px;
    padding: 9.5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    width: 100px;
  }
  .result {
    margin-left: auto;
  }
  .in-game {
    background: linear-gradient(251.16deg, #FFFFFF -17.5%, rgba(37, 47, 80, 0) -17.49%, #252F50 104.25%), linear-gradient(79.73deg, rgba(115, 121, 158, 0.5) -157.22%, rgba(115, 121, 158, 0) 109.61%);
    border-radius: 8px;
    padding: 9.5px 25px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
  .win-information {
    display: flex;
    align-items: center;
    .prize-cost {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #4ABA62;
      margin-right: 25px;
    }
    .prize-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 45px;
      margin-right: 24px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .prize-bg {
      display: flex;
      align-items: center;
    }
  }
  &.success {
    background: rgba(74, 186, 98, 0.1);
    .coeficient {
      background: rgba(74, 186, 98, 0.1);
    }
  }
  &.fail {
    background: rgba(255, 92, 48, 0.1);
    .coeficient {
      background: rgba(255, 92, 48, 0.1);
    }
  }
}
</style>