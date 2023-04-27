<template>
  <div class="user-bet">
    <div class="avatar" :style="{'border-color': color}">
      <img :src="avatar" alt="">
      <div class="chance">25.0%</div>
    </div>
    <div class="information">
      <span>BroTwiceInDa</span>
      <strong>$ 54,87</strong>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    avatar: {
      type: String
    },
    color: {
      type: String
    }
  }
}
</script>
<style scoped lang="scss">
.user-bet {
  .avatar {
    margin: 0 auto;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    @media (max-width: 600px) {
      width: 60px;
      height: 60px;
      min-width: 60px;
    }
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      background: rgba(0,0,0, 0.3);
    }
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    border-style: solid;
    border-width: 3px;
    position: relative;
    .chance {
      font-weight: 700;
      font-size: 14px;
      line-height: 21px;
      bottom: 8px;
      text-align: center;
      width: 100%;
      left: 0;
      z-index: 3;
      position: absolute;
      @media (max-width: 600px) {
        font-size: 12px;
        bottom: 5px;
      }
    }

  }
  .information {
    margin-top: 12px;
    width: 100%;
    span, strong {
      display: block;
      width: 100%;
      text-align: center;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 2px;
      @media (max-width: 600px) {
        font-size: 14px;
        margin-bottom: 0px;
      }
    }
    strong {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #EAC159;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
}
</style>