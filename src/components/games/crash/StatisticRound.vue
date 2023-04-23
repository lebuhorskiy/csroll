<template>
  <div class="statistic-round">
    <div class="statistic-left">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4V1M14.25 5.7501L16.4 3.6001M16 10H19M14.25 14.25L16.4 16.4M10 16V19M5.75001 14.25L3.60001 16.4M4 10H1M5.75001 5.7501L3.60001 3.6001" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="title">Статистика раунда</span>
      <div class="hash">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_685_2528)">
            <path d="M6 6C6.27614 6 6.5 5.77614 6.5 5.5C6.5 5.22386 6.27614 5 6 5C5.72386 5 5.5 5.22386 5.5 5.5C5.5 5.77614 5.72386 6 6 6ZM6 6V7.25M6.00001 1.5C7.16792 2.53329 8.69224 3.07128 10.25 3C10.4768 3.77151 10.5462 4.58073 10.4541 5.37959C10.3619 6.17845 10.1102 6.95063 9.71371 7.65026C9.31725 8.34989 8.7842 8.96269 8.14624 9.45224C7.50827 9.94179 6.7784 10.2981 6.00001 10.5C5.22161 10.2981 4.49175 9.94179 3.85378 9.45224C3.21581 8.96269 2.68276 8.34989 2.28631 7.65026C1.88985 6.95063 1.63808 6.17845 1.54595 5.37959C1.45382 4.58073 1.52321 3.77151 1.75001 3C3.30777 3.07128 4.83209 2.53329 6.00001 1.5Z" stroke="#455489" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_685_2528">
              <rect width="12" height="12" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span @click="setShowCheckGameModal(true)">fa26w444fa8w88f44w8asddsfgsdfg3</span>
      </div>
      <router-link to="/crash/histories" class="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L14 14M3.05 11.0001C3.27409 8.80013 4.30027 6.75968 5.93274 5.26803C7.56521 3.77639 9.6897 2.93795 11.9009 2.9127C14.1121 2.88744 16.2552 3.67713 17.9213 5.1311C19.5874 6.58507 20.6599 8.60155 20.9342 10.7958C21.2085 12.99 20.6653 15.2085 19.4084 17.0278C18.1514 18.8472 16.2686 20.1401 14.1193 20.6599C11.9699 21.1797 9.70441 20.89 7.755 19.8461C5.80559 18.8022 4.30872 17.0772 3.55 15.0001M3.05 20.0001V15.0001H8.05" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </div>
    <div class="statistic-right">
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
      <div class="indicator">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7V17M4 8V16M12 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H12C10.8954 19 10 18.1046 10 17V7C10 5.89543 10.8954 5 12 5Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="text">
          <strong>187</strong>
          <span>Скинов</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setShowCheckGameModal: 'config/setShowCheckGameModal'
    })
  }
}
</script>
<style scoped lang="scss">
.statistic-round {
  padding: 16px 32px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(69, 84, 137, 0.1);
  .statistic-left {
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      align-items: center;
    }
    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 23px;
      margin-left: 12px;
      margin-right: 24px;
    }
    .hash {
      width: 195px;
      min-width: 195px;
      cursor: pointer;
      height: 22px;
      background: #252F50;
      border-radius: 4px;
      display: flex;
      margin-right: 24px;
      align-items: center;
      padding: 0 8px;
      transition: 0.2s;
      &:hover {
        opacity: 0.8;
      }
      span {
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        color: #455489;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-grow: 1;
      }
      svg {
        min-width: 12px;
        margin-right: 4px;
      }
    }
  }
  .statistic-right {
    display: flex;
    align-items: center;
    .indicator {
      display: flex;
      align-items: center;
      .icon {
        display: flex;
        align-items: center;
        margin-right: 8px;
      }
      .text {
        strong {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px
        }
        span {
          font-weight: 700;
          font-size: 12.5px;
          line-height: 14px;
          color: rgba(87, 108, 176, 1)
        }
        strong,span {
          display: block;
        }
      }
    }
    .indicator + .indicator {
      margin-left: 48px;
    }
  }
}
</style>