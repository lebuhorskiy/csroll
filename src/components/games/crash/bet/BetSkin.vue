<template>
  <div class="bet-skin" :class="[skin.color]">
    <img src="@/assets/images/big-skin.png" alt="" class="image">
    <div class="shadow"></div>
  </div>
</template>
<script>
export default {
  props: ['skin']
}
</script>
<style scoped lang="scss">
.bet-skin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(@/assets/images/empty-skin.png);
  background-size: 100% 100%;
  .shadow {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 3px solid #4C31ED;
    background: rgba(76, 49, 237, 0.4);
    box-shadow: 0px 0px 70px 25px rgba(76, 49, 237, 1);
    @media (max-width: 1500px) {
      box-shadow: 0px 0px 50px 17px rgba(76, 49, 237, 1);
    }
  }
  img {
    position: relative;
    z-index: 2;
    max-width: 100%;
  }
  &.pink {
    .shadow {
      background: rgba(237, 49, 173, 0.4);
      box-shadow: 0px 0px 70px 25px rgba(237, 49, 173, 1);
      border-color: rgba(237, 49, 173, 1);
      @media (max-width: 1500px) {
        box-shadow: 0px 0px 50px 17px rgba(237, 49, 173, 1);
      }
    }
  }
  &.red {
    .shadow {
      background: rgba(237, 49, 49, 0.4);
      border-color: rgba(237, 49, 49, 1);
      box-shadow: 0px 0px 70px 25px rgba(237, 49, 49, 1);
      @media (max-width: 1500px) {
        box-shadow: 0px 0px 50px 17px rgba(237, 49, 49, 1);
      }
    }
  }
  &.yellow {
    .shadow {
      background: rgba(234, 193, 89, 0.4);
      box-shadow: 0px 0px 70px 25px rgba(234, 193, 89, 1);
      border-color: rgba(234, 193, 89, 1);
      @media (max-width: 1500px) {
        box-shadow: 0px 0px 50px 17px rgba(234, 193, 89, 1);
      }
    }
  }
  &.purple {
    .shadow {
      background: rgba(121, 49, 237, 0.4);
      box-shadow: 0px 0px 70px 25px rgba(121, 49, 237, 1);
      border-color: rgba(121, 49, 237, 1);
      @media (max-width: 1500px) {
        box-shadow: 0px 0px 50px 17px rgba(121, 49, 237, 1);
      }
    }
  }
}
</style>