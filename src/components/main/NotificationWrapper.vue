<template>
  <div class="notification-wrapper">
    <div class="notification-indicator" :class="{'active': isShowNotifications}" @click.prevent.stop="isShowNotifications = !isShowNotifications" >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="has"></div>
    </div>
    <transition name="slide-fade">
      <div class="notification-content" v-if="isShowNotifications">
        <div class="notification-content-body">
          <div class="shadow"></div>
          <div class="items">
            <div class="item">
              <div class="date">
                24.10.2022  12:44
              </div>
              <div class="text">
                <div class="type info"></div>
                Ваш баланс пополнен на сумму
                1789,99₽ с помощью QIWI
              </div>
            </div>
            <div class="item">
              <div class="date">
                24.10.2022  12:44
              </div>
              <div class="text">
                <div class="type info"></div>
                Не удалось вывести предмет.
                Попробуйте еще раз!
              </div>
            </div>
            <div class="item">
              <div class="date">
                24.10.2022  12:44
              </div>
              <div class="text">
                <div class="type danger"></div>

                Ваш аккаунт заблокирован навсегда.
                Всего доброго!
              </div>
            </div>
            <div class="item">
              <div class="date">
                24.10.2022  12:44
              </div>
              <div class="text">
                <div class="type danger"></div>

                Ваш аккаунт заблокирован навсегда.
                Всего доброго!
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowNotifications: false
    }
  },
  methods: {
    hide () {
      this.isShowNotifications = false
    }
  },
  mounted() {
    window.addEventListener('click', this.hide)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hide)
  }
}
</script>
<style scoped lang="scss">
.notification-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
  &:hover {
    svg {
      path {
        stroke: rgba(151, 167, 219, 1)
      }
    }
  }
  .notification-indicator {
    cursor: pointer;
    &.active {
      svg {
        path {
          stroke: #fff
        }
      }
    }
  }
  .has {
    position: absolute;
    top: 2px;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    overflow: hidden;
    background: linear-gradient(45deg, #A03434 0%, #FF985E 100%);
    border: 2px solid #1E2542;
  }
  .notification-content {
    position: absolute;
    top: 100%;
    width: 320px;
    left: calc(50% - 160px);
    cursor: default;
    padding-top: 10px;
    border-radius: 16px;
    overflow: hidden;
    @media (max-width: 1024px) {
      right: calc(100% - 50px);
      left: unset;
    }
    @media (max-width: 600px) {
      right: calc(100% - 80px);
      width: 300px;
    }
    .notification-content-body {
      background: #232C4B;
      cursor: default;
      height: 273px;
      box-shadow: 0px 0px 20px rgba(33, 41, 72, 0.6);
      border-radius: 16px;
      padding: 24px 22px;
      position: relative;
      padding-right: 15px;
      &::after {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        transform: rotate(45deg);
        position: absolute;
        top: -7px;
        left: calc(50% - 7.5px);
        background: #232C4B;
        @media (max-width: 1024px) {
          left: unset;
          right: 34px;
        }
        @media (max-width: 600px) {
          right: 63px;
        }
      }
      .items {
        max-height: 100%;
        overflow-y: auto;
        padding-right: 10px;
        &::-webkit-scrollbar {
          background: rgba(69, 84, 137, 0.1);
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background: #455489;
          opacity: 0.5;
          border-radius: 8px;
        }
        .item {
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(69, 84, 137, 0.2);
          position: relative;
          .date {
            padding-left: 8px;
            font-weight: 600;
            font-size: 10px;
            line-height: 15px;
            color: #576CB0;
            margin-bottom: 4px;
          }
          .type {
            margin-right: 8px;
            width: 6px;
            height: 6px;
            min-width: 6px;
            border-radius: 100%;
            &.danger {
              background: #FF5C30;
            }
            &.info {
              background: #EAC159;
            }
            &.success {
              background: #4ABA62;
            }
          }
          .text {
            display: flex;
            font-weight: 600;
            align-items: center;
            font-size: 12px;
            line-height: 18px;
          }
        }
        .item + .item {
          margin-top: 16px;
        }
        .item:last-child {
          border-bottom: none;
        }
      }
      .shadow {
        position: absolute;
        height: 0px;
        width: 80%;
        left: 10%;
        margin: 0 auto;
        box-shadow: 0px 0px 30px 30px rgba(35, 44, 75, 0.8);
        bottom: 40px;
        z-index: 4;
      }
    }
  }
}
</style>