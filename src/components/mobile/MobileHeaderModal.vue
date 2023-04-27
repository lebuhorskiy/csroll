<template>
  <div class="mobile-header-modal">
    <div @click="setMobileMenu(false)" class="close">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9M1 1L9 9" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="separator"></div>
    <UserState :hide-notifications="true" />
    <nav>
      <a href="">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V21M12 8C11.6383 6.5094 11.0154 5.23507 10.2127 4.34317C9.41003 3.45127 8.46469 2.9832 7.5 3.00001C6.83696 3.00001 6.20107 3.2634 5.73223 3.73224C5.26339 4.20108 5 4.83697 5 5.50001C5 6.16305 5.26339 6.79894 5.73223 7.26778C6.20107 7.73662 6.83696 8.00001 7.5 8.00001M12 8C12.3617 6.5094 12.9846 5.23507 13.7873 4.34317C14.59 3.45127 15.5353 2.9832 16.5 3.00001C17.163 3.00001 17.7989 3.2634 18.2678 3.73224C18.7366 4.20108 19 4.83697 19 5.50001C19 6.16305 18.7366 6.79894 18.2678 7.26778C17.7989 7.73662 17.163 8.00001 16.5 8.00001M19 12V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12M4 8H20C20.5523 8 21 8.44772 21 9V11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11V9C3 8.44772 3.44772 8 4 8Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Бонусы</span>
      </a>
      <router-link to="/top-players" href="">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 21H16M12 17V21M12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12V4H7V12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17ZM7 9C7 10.1046 6.10457 11 5 11C3.89543 11 3 10.1046 3 9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9ZM21 9C21 10.1046 20.1046 11 19 11C17.8954 11 17 10.1046 17 9C17 7.89543 17.8954 7 19 7C20.1046 7 21 7.89543 21 9Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Топ</span>
      </router-link>
      <router-link to="/referral" href="">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Партнерство</span>
      </router-link>
      <a href="" class="active">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V21M12 8C11.6383 6.5094 11.0154 5.23507 10.2127 4.34317C9.41003 3.45127 8.46469 2.9832 7.5 3.00001C6.83696 3.00001 6.20107 3.2634 5.73223 3.73224C5.26339 4.20108 5 4.83697 5 5.50001C5 6.16305 5.26339 6.79894 5.73223 7.26778C6.20107 7.73662 6.83696 8.00001 7.5 8.00001M12 8C12.3617 6.5094 12.9846 5.23507 13.7873 4.34317C14.59 3.45127 15.5353 2.9832 16.5 3.00001C17.163 3.00001 17.7989 3.2634 18.2678 3.73224C18.7366 4.20108 19 4.83697 19 5.50001C19 6.16305 18.7366 6.79894 18.2678 7.26778C17.7989 7.73662 17.163 8.00001 16.5 8.00001M19 12V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V12M4 8H20C20.5523 8 21 8.44772 21 9V11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11V9C3 8.44772 3.44772 8 4 8Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Получи 1000$</span>
      </a>
      <router-link to="/support" href="" class="active">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9H16M8 13H14M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Поддержка</span>
      </router-link>
    </nav>
    <SettingsBlock />
    <SocialsBlock />
  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setMobileMenu: 'config/setMobileMenu'
    })
  }
}
</script>
<style scoped lang="scss">
.mobile-header-modal {
  position: fixed;
  top: 0;
  width: 320px;
  height: 100dvh;
  right: 0;
  padding: 20px;
  z-index: 1000;
  overflow: hidden;
  border-left: 1px solid rgba(69, 84, 137, 0.1);
  box-shadow: 0px 0px 30px 20px rgba(37, 47, 80, 0.7);
  background: linear-gradient(251.16deg, rgba(37, 47, 80, 0) -17.49%, rgba(37, 47, 80, 0.5) 104.25%), #1E2542;
  padding-top: 57px;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  .separator {
    height: 1px;
    width: auto;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 15px;
    margin-top: 15px;
    background: rgba(78, 112, 233, 0.1);
  }
  .close {
    position: absolute;
    right: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 15px;
    padding: 10px;
    cursor: pointer;
    background: rgba(78, 112, 233, 0.1);
    border-radius: 8px;
  }
  nav {
    flex-grow: 1;
    margin: 30px 0;
    width: 100%;
    a {
      display: flex;
      width: 100%;
      align-items: center;
      span {
        font-weight: 500;
        margin-left: 15px;
        font-size: 16px;
      }
    }
    a + a {
      margin-top: 20px;
    }
  }
  .settings {
    margin-left: -20px;
    margin-right: -20px;
  }
  .socials {
    margin-top: 15px;
  }
}

::v-deep {
  .unauthorization-state {
    a {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
<script setup>
import UserState from "@/components/main/UserState.vue";
import SocialsBlock from "@/components/main/SocialsBlock.vue";
import SettingsBlock from "@/components/main/SettingsBlock.vue";
</script>