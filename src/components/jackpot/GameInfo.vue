<template>
  <div class="game-info">
    <div class="game-info_title">
        <div class="icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 8C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8Z" fill="#4E70E9"/>
            <path d="M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7C15.2239 7 15 7.22386 15 7.5C15 7.77614 15.2239 8 15.5 8Z" fill="#4E70E9"/>
            <path d="M8.5 12.5C8.77614 12.5 9 12.2761 9 12C9 11.7239 8.77614 11.5 8.5 11.5C8.22386 11.5 8 11.7239 8 12C8 12.2761 8.22386 12.5 8.5 12.5Z" fill="#4E70E9"/>
            <path d="M15.5 12.5C15.7761 12.5 16 12.2761 16 12C16 11.7239 15.7761 11.5 15.5 11.5C15.2239 11.5 15 11.7239 15 12C15 12.2761 15.2239 12.5 15.5 12.5Z" fill="#4E70E9"/>
            <path d="M15.5 17C15.7761 17 16 16.7761 16 16.5C16 16.2239 15.7761 16 15.5 16C15.2239 16 15 16.2239 15 16.5C15 16.7761 15.2239 17 15.5 17Z" fill="#4E70E9"/>
            <path d="M8.5 17C8.77614 17 9 16.7761 9 16.5C9 16.2239 8.77614 16 8.5 16C8.22386 16 8 16.2239 8 16.5C8 16.7761 8.22386 17 8.5 17Z" fill="#4E70E9"/>
            <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 8C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7C15.2239 7 15 7.22386 15 7.5C15 7.77614 15.2239 8 15.5 8Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 12.5C8.77614 12.5 9 12.2761 9 12C9 11.7239 8.77614 11.5 8.5 11.5C8.22386 11.5 8 11.7239 8 12C8 12.2761 8.22386 12.5 8.5 12.5Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 12.5C15.7761 12.5 16 12.2761 16 12C16 11.7239 15.7761 11.5 15.5 11.5C15.2239 11.5 15 11.7239 15 12C15 12.2761 15.2239 12.5 15.5 12.5Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 17C15.7761 17 16 16.7761 16 16.5C16 16.2239 15.7761 16 15.5 16C15.2239 16 15 16.2239 15 16.5C15 16.7761 15.2239 17 15.5 17Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 17C8.77614 17 9 16.7761 9 16.5C9 16.2239 8.77614 16 8.5 16C8.22386 16 8 16.2239 8 16.5C8 16.7761 8.22386 17 8.5 17Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span>Игра #54621</span>
        <div class="hash">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_727_9339)">
              <path d="M5.99991 6C6.27605 6 6.49991 5.77614 6.49991 5.5C6.49991 5.22386 6.27605 5 5.99991 5C5.72377 5 5.49991 5.22386 5.49991 5.5C5.49991 5.77614 5.72377 6 5.99991 6ZM5.99991 6V7.25M5.99992 1.5C7.16783 2.53329 8.69215 3.07128 10.2499 3C10.4767 3.77151 10.5461 4.58073 10.454 5.37959C10.3619 6.17845 10.1101 6.95063 9.71362 7.65026C9.31716 8.34989 8.78411 8.96269 8.14614 9.45224C7.50818 9.94179 6.77831 10.2981 5.99992 10.5C5.22152 10.2981 4.49166 9.94179 3.85369 9.45224C3.21572 8.96269 2.68267 8.34989 2.28621 7.65026C1.88976 6.95063 1.63798 6.17845 1.54585 5.37959C1.45373 4.58073 1.52312 3.77151 1.74992 3C3.30768 3.07128 4.832 2.53329 5.99992 1.5Z" stroke="#455489" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_727_9339">
                <rect width="12" height="12" fill="white"/>
              </clipPath>
            </defs>
          </svg>

          <span @click="setShowCheckGameModal(true)">fa26w444fa8w88f44w8awf6a5g453gh9j9k7ng67d65567dtmf7n7fa26w444fa8w88f44w8awf6a5g453gh9j9k7ng67d65567dtmf7n7</span>
        </div>
        <router-link to="/jackpot/histories" class="history">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9998 8V12L13.9998 14M3.0498 11.0001C3.2739 8.80013 4.30007 6.75968 5.93254 5.26803C7.56501 3.77639 9.6895 2.93795 11.9007 2.9127C14.1119 2.88744 16.255 3.67713 17.9211 5.1311C19.5872 6.58507 20.6597 8.60155 20.934 10.7958C21.2083 12.99 20.6651 15.2085 19.4082 17.0278C18.1512 18.8472 16.2684 20.1401 14.1191 20.6599C11.9697 21.1797 9.70421 20.89 7.7548 19.8461C5.80539 18.8022 4.30853 17.0772 3.5498 15.0001M3.0498 20.0001V15.0001H8.0498" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
    <div class="game-info_indicators">
      <div class="bank">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7M9 9H19C20.1046 9 21 9.89543 21 11V17C21 18.1046 20.1046 19 19 19H9C7.89543 19 7 18.1046 7 17V11C7 9.89543 7.89543 9 9 9ZM16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>$ 225,16</span>
      </div>
      <div class="skins">
        <div class="fill"></div>
        <span>25 / 50 скинов</span>
      </div>
    </div>

    <div class="game-info_colors">
      <div class="color" style="background: #4ABA62; width: 25%"></div>
      <div class="color" style="background: #4E70E9; width: 25%"></div>
      <div class="color" style="background: #FF5C30; width: 25%"></div>
      <div class="color" style="background: #EAC159; width: 25%"></div>
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
.game-info {
  background: rgba(69, 84, 137, 0.1);
  padding: 24px 32px;
  margin-right: 16px;
  border-radius: 16px;
  .game-info_title {
    display: flex;
    overflow: hidden;
    align-items: center;
    .icon {
      margin-right: 12px;
    }
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      white-space: nowrap;
      padding-bottom: 2px;
    }
    .history {
      cursor: pointer;
      margin-left: auto;
      &:hover {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
    .hash {
      flex-grow: 1;
      margin: 0 24px;
      display: flex;
      overflow: hidden;
      align-items: center;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        opacity: 0.8;
      }
      padding: 4px 8px;
      svg {
        margin-right: 4px;
        min-width: 12px;
      }
      span {
        display: block;
        white-space: nowrap;
        font-weight: 600;
        font-size: 12px;
        line-height: 10px;
        padding-top: 2px;
        color: #455489;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      background: rgba(69, 84, 137, 0.1);
      border-radius: 4px;
    }
  }
  .game-info_indicators {
    display: flex;
    overflow: hidden;
    margin-top: 32px;
    .bank {
      padding: 19px 24px;
      width: 200px;
      min-width: 200px;
      background: rgba(78, 112, 233, 0.2);
      border-radius: 16px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        margin-left: 16px;
      }
    }
    .skins {
      background: rgba(69, 84, 137, 0.1);
      border-radius: 16px;
      flex-grow: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .fill {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        bottom: 0;
        background: #4E70E9;
        background-image: url(http://localhost:8080/img/gift-bg.a83fce92.png);
        background-position: center center;
        width: 50%;
        border-radius: 16px;
      }
      span {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        position: relative;
        z-index: 5;
      }
    }
  }
  .game-info_colors {
    width: 100%;
    display: flex;
    align-items: center;
    background: rgba(69, 84, 137, 0.1);
    border-radius: 16px;
    height: 16px;
    margin-top: 24px;
    padding: 0 4px;
    .color {
      height: 8px;
      border-radius: 16px;
    }
    .color + .color {
      margin-left: 4px;
    }
  }
}
</style>