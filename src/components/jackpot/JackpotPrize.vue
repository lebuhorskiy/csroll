<template>
  <div class="jackpot-prize">
    <div class="image">
      <img src="@/assets/images/big-skin.png" alt="">
    </div>
    <span class="name">
      ★ Nomad Knife Slaughter
    </span>
    <strong class="price">
      1 763,44 $
    </strong>
  </div>
</template>
<style scoped lang="scss">
.jackpot-prize {
  padding: 20px 0;
   .image {
     margin: 0 auto;
     width: 206px;
     margin-bottom: 20px;
     height: 206px;
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
     &::before {
       content: "";
       display: block;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       height: 100%;
       width: 100%;
       background: url(@/assets/images/jackpot-prize-bg.png);
       background-size: 100% 100%;
       position: absolute;
     }
     &::after {
       content: "";
       display: block;
       width: 30px;
       height: 30px;
       border: 3px solid rgba(234, 193, 89, 0.5);
       background: rgba(234, 193, 89, 0.1);
       border-radius: 100%;
       position: absolute;
       top: calc(50% - 15px);
       left: calc(50% - 15px);
       box-shadow: 0px 0px 50px 72px rgba(234, 193, 89, 0.1)
     }
     img {
       position: relative;
       z-index: 3;
       width: 100%;
     }
   }
  .name {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #576CB0;
    margin-bottom: 4px;
  }
  strong {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #EAC159;
  }
  .name,.price {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>