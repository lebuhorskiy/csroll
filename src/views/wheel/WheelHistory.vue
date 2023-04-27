<template>
  <div class="wheel-history">
    <HeaderTop />

    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12L14 14M3.05005 11.0001C3.27414 8.80013 4.30031 6.75968 5.93278 5.26803C7.56525 3.77639 9.68974 2.93795 11.9009 2.9127C14.1121 2.88744 16.2552 3.67713 17.9213 5.1311C19.5874 6.58507 20.6599 8.60155 20.9342 10.7958C21.2085 12.99 20.6654 15.2085 19.4084 17.0278C18.1515 18.8472 16.2687 20.1401 14.1193 20.6599C11.97 21.1797 9.70446 20.89 7.75504 19.8461C5.80563 18.8022 4.30877 17.0772 3.55005 15.0001M3.05005 20.0001V15.0001H8.05005" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2>#725728352</h2>
    </div>

    <div class="indicators">
      <div class="indicator">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="text">
          <strong>1 117</strong>
          <span>Игроков</span>
        </div>
      </div>
      <div class="indicator">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7M9 9H19C20.1046 9 21 9.89543 21 11V17C21 18.1046 20.1046 19 19 19H9C7.89543 19 7 18.1046 7 17V11C7 9.89543 7.89543 9 9 9ZM16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="text">
          <strong>$ 9 771,87</strong>
          <span>Общий банк</span>
        </div>
      </div>
      <div class="big-indicator">
        <div class="icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0001 24C25.1047 24 26.0001 23.1046 26.0001 22C26.0001 20.8954 25.1047 20 24.0001 20C22.8956 20 22.0001 20.8954 22.0001 22C22.0001 23.1046 22.8956 24 24.0001 24ZM24.0001 24V29M24.0002 6C28.6718 10.1332 34.7691 12.2851 41.0002 12C41.9073 15.086 42.1849 18.3229 41.8164 21.5184C41.4479 24.7138 40.4408 27.8025 38.855 30.6011C37.2691 33.3996 35.1369 35.8508 32.5851 37.809C30.0332 39.7672 27.1137 41.1924 24.0002 42C20.8866 41.1924 17.9671 39.7672 15.4152 37.809C12.8634 35.8508 10.7312 33.3996 9.14535 30.6011C7.55952 27.8025 6.55242 24.7138 6.18391 21.5184C5.81539 18.3229 6.09297 15.086 7.00016 12C13.2312 12.2851 19.3285 10.1332 24.0002 6Z" stroke="#EAC159" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="indicator-span">
          Множитель <em>2x</em>
        </div>
        <div class="indicator-span">
          Число раунда <em>2</em>
        </div>
      </div>
    </div>

    <div class="bets">
      <WheelBet color="blue" />
      <WheelBet color="green" />
      <WheelBet color="pink" />
      <WheelBet color="yellow" />
    </div>
  </div>
</template>
<script setup>
import HeaderTop from "@/components/main/HeaderTop.vue";
import WheelBet from "@/components/games/wheel/WheelBet.vue";
</script>
<style scoped lang="scss">
.wheel-history {
  padding: 15px 12px;
  .head {
    display: flex;
    align-self: center;
    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      margin-left: 15px;
    }
  }
  .indicators {
    display: flex;
    margin-top: 24px;
    overflow: hidden;
    @media (max-width: 992px) {
      flex-wrap: wrap;

    }
    .indicator {
      display: flex;
      align-items: center;
      border-radius: 16px;
      background: rgba(69, 84, 137, 0.1);
      width: 230px;
      min-width: 230px;
      padding: 0 24px;
      @media (max-width: 992px) {
        padding: 24px 24px;
        width: calc(50% - 6px);
        min-width: unset;
      }
      @media (max-width: 600px) {
        width: calc(50% - 8px);
      }
      @media (max-width: 450px) {
        width: 100%;
      }
      .icon {
        display: flex;
        align-self: center;
        margin-right: 15px;
      }
      .text {
        strong,span {
          display: block;
          width: 100%;
        }
        strong {
          font-weight: 700;
          font-size: 16px;
          line-height: 16px;
        }
        span {
          font-weight: 700;
          font-size: 14px;
          color: rgba(87, 108, 176, 1)
        }
      }
    }
    .indicator + .indicator {
      margin-left: 12px;
      @media (max-width: 450px) {
        margin-left: 0;
        margin-top: 16px;
      }
    }
    .big-indicator {
      flex-grow: 1;
      margin-left: 12px;
      padding: 19px 32px;
      background: rgba(69, 84, 137, 0.1);
      display: flex;
      border-radius: 16px;
      overflow: hidden;
      align-items: center;
      .icon {
        margin-right: 24px;
      }
      .indicator-span {
        display: flex;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #576CB0;
        em {
          font-weight: 600;
          color: #fff;
          font-size: 16px;
          margin-left: 5px;
          font-style: normal;
          line-height: 24px;
        }
      }
      .indicator-span + .indicator-span {
        margin-left: 24px;
      }
      @media (max-width: 992px) {
        width: 100%;
        flex-grow: unset;
        margin-left: 0;
        margin-top: 16px;
      }
      @media (max-width: 600px) {
        flex-wrap: wrap;
        padding: 16px;
        .icon {
          width: 100%;
          justify-content: center;
          display: flex;
          margin-bottom: 16px;
        }
        .indicator-span {
          width: calc(50% - 14px);
          font-size: 14px;
          white-space: nowrap;
        }
      }
    }
  }
  .bets {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 11px;
    @media (max-width: 600px) {
      margin-top: 16px;
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>