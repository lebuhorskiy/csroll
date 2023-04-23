<template>
  <div class="bet-skin" :class="[skin.color]">
    <img :src="skin.img" alt="">
    <div class="price">$ 54,87</div>
    <div class="shadow"></div>
  </div>
</template>
<script>
export default {
  props: {
    skin: {
      type: Object
    }
  },
}
</script>
<style scoped lang="scss">
.bet-skin {
  .more {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #576CB0;
  }
  width: 92px;
  min-width: 92px;
  position: relative;
  height: 77px;
  padding: 12px;
  padding-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(69, 84, 137, 0.1);
  img {
    margin: 0 auto;
    position: relative;
    z-index: 4;
    display: block;
    max-height: 45px;
    max-width: 60px;
  }
  .price {
    font-weight: 600;
    position: relative;
    z-index: 7;
    font-size: 10px;
    line-height: 15px;
  }
  .shadow {
    position: absolute;
    right: -25px;
    bottom: -25px;
    width: 60px;
    height: 60px;
    background: rgba(237, 162, 49, 0.5);
    filter: blur(30px);
  }
  &.red {
    .shadow {
      background: rgba(237, 49, 49, 0.5);
    }
  }
  &.pink {
    .shadow {
      background: rgba(237, 49, 173, 0.5);
    }
  }
  &.purple {
    .shadow {
      background: rgba(121, 49, 237, 0.5);
    }
  }
  &.blue {
    .shadow {
      background: rgba(49, 102, 237, 0.5);
    }
  }
  &.gray {
    .shadow {
      background: rgba(255, 255, 255, 0.25);
    }
  }
}

</style>