<template>
  <div class="profile-inventory-item">
    <BaseSkin :skin="skin"/>
    <div class="inject">
      <div class="buttons" v-if="skin.status === 'process'">
        <button class="sell">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15ZM17.5 15L21 8H6V19C6.00019 19.2107 6.06691 19.4159 6.19063 19.5864C6.31436 19.7569 6.48877 19.884 6.68899 19.9495C6.8892 20.015 7.105 20.0156 7.30558 19.9513C7.50617 19.8869 7.6813 19.7608 7.806 19.591L11.5 14.5V14.555M17.5 15L10.4 14.253C9.67571 14.1769 8.98595 13.9045 8.40511 13.4651C7.82427 13.0258 7.37439 12.4362 7.104 11.76L4.251 4.63C4.17702 4.44425 4.04906 4.28494 3.88364 4.17264C3.71822 4.06034 3.52294 4.00021 3.323 4H2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="withdraw">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 11L19 15M19 15L15 19M19 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11C4 9.93913 4.42143 8.92172 5.17157 8.17157C5.92172 7.42143 6.93913 7 8 7H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="status" v-if="['withdraw', 'sell'].includes(skin.status)">
        <template v-if="skin.status === 'withdraw'">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12L10 17L20 7" stroke="#FF5C30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
        <template v-if="skin.status === 'sell'">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7 8C16.501 7.43524 16.1374 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16M12 3V6M12 18V21" stroke="#4ABA62" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import BaseSkin from "@/components/main/BaseSkin.vue";
export default {
  props: {
    skin: {
      type: Object
    }
  },
  components: {
    BaseSkin
  }
}
</script>
<style scoped lang="scss">
.profile-inventory-item {
  position: relative;
  ::v-deep {
    .skin {
      height: 184px;
      .image {
        height: 90px;
      }
    }
  }
  .inject {
    position: absolute;
    bottom: 16px;
    z-index: 2;
    right: 16px;
    .buttons {
      button {
        cursor: pointer;
      }
      .sell {
        background: #4ABA62;
        opacity: 0.5;
        border-radius: 10px;
        width: 40px;
        height: 40px;
        transition: 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          opacity: 1;
        }
      }
      .withdraw {
        width: 40px;
        height: 40px;
        background: #FF5C30;
        opacity: 0.5;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          opacity: 1;
        }
        transition: 0.2s;
      }
      button + button {
        margin-top: 16px;
      }
    }
  }
}
</style>