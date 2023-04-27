<template>
  <div class="jackpot-roulette">
    <div class="roulette-items">
      <agile
          :slides-to-show="11"
             :swipe-distance="9999999"
          :pause-on-dots-hover="false"
          :pause-on-hover="false"
          :infinite="false"
          :nav-buttons="false"
          :responsive="[
          {
            breakpoint: 1750,
            settings: {
              slidesToShow: 11
            }
          },
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 9
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 3
            }
          }
        ]"
          :dots="false"
          :rtl="false">
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a1.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a2.png" alt="">
        </div>
        <div class="roulette-item">
          <img src="@/assets/images/a3.png" alt="">
        </div>
      </agile>
      <div class="cursor">
        <img src="@/assets/images/cursor.svg" alt="">
      </div>
    </div>
    <div class="roulette-status">
      <div class="status">
        <div class="circle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1C8.21997 1 6.47991 1.52784 4.99987 2.51677C3.51983 3.50571 2.36628 4.91131 1.68509 6.55585C1.0039 8.20038 0.82567 10.01 1.17294 11.7558C1.5202 13.5016 2.37737 15.1053 3.63604 16.364C4.89472 17.6226 6.49836 18.4798 8.24419 18.8271C9.99002 19.1743 11.7996 18.9961 13.4442 18.3149C15.0887 17.6337 16.4943 16.4802 17.4832 15.0001C18.4722 13.5201 19 11.78 19 10" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.jackpot-roulette {
  background: rgba(69, 84, 137, 0.1);
  margin-top: 16px;
  border-radius: 16px;
  padding-top: 32px;
  position: relative;
  .roulette-items {
    position: relative;
  }
  &::before {
    right: 0;
    transform: rotate(180deg);
    top: 0;
    z-index: 2;
    width: 160px;
    bottom: 0;
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    background: linear-gradient(90deg, rgba(30,37,66,1) 0%, rgba(0,0,0,0) 100%);
    @media (max-width: 1500px) {
      width: 80px;
    }
  }
  &::after {
    left: 0;
    top: 0;
    z-index: 2;
    width: 160px;
    bottom: 0;
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    background: linear-gradient(90deg, rgba(30,37,66,1) 0%, rgba(0,0,0,0) 100%);
    @media (max-width: 1500px) {
      width: 80px;
    }
  }
  .roulette-item {
    height: 120px;
    @media (max-width: 576px) {
      height: 170px;
    }
    @media (max-width: 500px) {
      height: unset;
    }
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .cursor {
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 48px;
    bottom: -12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .roulette-status {
    width: 100%;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    .status {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: rgba(78, 112, 233, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      .circle {
        width: 20px;
        margin-left: 1px;
        height: 20px;
        animation: spin-clockwise 1s infinite linear;
      }
    }
  }
}

@keyframes spin-clockwise {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>