<template>
  <div class="chat-rooms">
    <div class="online" :class="{'active': isShowRooms}" @click.prevent.stop="isShowRooms = !isShowRooms">
      <div class="flag">
        <img src="@/assets/images/flags/ru.svg" alt="">
      </div>
      <span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13V11.6667C1 10.9594 1.28095 10.2811 1.78105 9.78105C2.28115 9.28095 2.95942 9 3.66667 9H6.33333C7.04058 9 7.71885 9.28095 8.21895 9.78105C8.71905 10.2811 9 10.9594 9 11.6667V13M7.66667 3.66667C7.66667 5.13943 6.47276 6.33333 5 6.33333C3.52724 6.33333 2.33333 5.13943 2.33333 3.66667C2.33333 2.19391 3.52724 1 5 1C6.47276 1 7.66667 2.19391 7.66667 3.66667Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          3 585
        </span>
    </div>
    <div class="rooms" v-if="isShowRooms">
      <div class="room">
        <div class="flag">
          <img src="@/assets/images/flags/ua.svg" alt="">
          UA
        </div>
        <div class="users">
          3 585
        </div>
      </div>
      <div class="room">
        <div class="flag">
          <img src="@/assets/images/flags/tu.svg" alt="">
          TU
        </div>
        <div class="users">
          3 585
        </div>
      </div>
      <div class="room">
        <div class="flag">
          <img src="@/assets/images/flags/ch.svg" alt="">
          CH
        </div>
        <div class="users">
          3 585
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowRooms: false
    }
  },
  methods: {
    hide () {
      this.isShowRooms = false
    }
  },
  mounted () {
    window.addEventListener('click', this.hide)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hide)
  }
}
</script>
<style scoped lang="scss">
.chat-rooms {
  position: relative;
  z-index: 99;
  .rooms {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: #232C4B;
    border-radius: 8px;
    padding: 8px 14px;
    .room {
      display: flex;
      align-items: center;
      padding: 8px 0;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
      .flag {
        margin-right: 8px;
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        color: #576CB0;
        img {
          width: 20px;
          height: 15px;
          margin-right: 4px;
        }
      }
      .users {
        white-space: nowrap;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
.online {
  display: flex;
  align-items: center;
  padding: 9.5px 14px;
  background: rgba(69, 84, 137, 0.1);
  border-radius: 8px;
  cursor: pointer;

  .flag {
    display: flex;
    align-items: center;
    width: 20px;
    img {
      width: 100%;
      height: 15px !important;
    }

    margin-right: 12px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    line-height: 21px;
    svg {
      margin-right: 10px;
    }
  }
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
  &.active {
    opacity: 0.5;
  }
}
</style>