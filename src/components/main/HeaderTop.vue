<template>
  <div class="header-top" :class="{'pr': !isShowChat}">
    <div class="nav">
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
    </div>
    <div class="user">
      <UserState />
      <router-link to="/support" class="support-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9H16M8 13H14M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </div>

    <ChatHead :fromHeader="true" v-if="!isShowChat" />
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      isShowChat: 'config/isShowChat'
    })
  }
}
</script>
<style scoped lang="scss">
.header-top {
  padding: 21px 0;
  border-bottom: 1px solid rgba(69, 84, 137, 0.1);
  width: 100%;
  padding-top: 10px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  &.pr {
    padding-right: 60px;
    @media (max-width: 1200px) {
      padding-right: 50px;
    }
  }
  .nav {
    display: flex;
    padding-left: 42px;
    @media (max-width: 1890px) {
      padding-left: 5px;
    }
    @media (max-width: 1200px) {
      flex-grow: 1;
      justify-content: space-between;
      padding-right: 40px;
    }
    @media (max-width: 1100px) {
      padding-right: 20px;
    }
    a {
      display: flex;
      align-items: center;
      span {
        transition: 0.2s;
        margin-left: 8px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        display: block;
        color: #576CB0;
      }
      svg {
        path {
          transition: 0.2s;
        }
      }
      &:hover {
        span {
          color: #97A7DB;
        }
        svg {
          path {
            stroke: #97A7DB;
          }
        }
      }
      &.active {
        span {
          color: #EAC159
        }
        svg {
          path {
            stroke: #EAC159
          }
        }
      }
    }
    a + a {
      margin-left: 32px;
      @media (max-width: 1890px) {
        margin-left: 24px;
      }
      @media (max-width: 1200px) {
        margin-left: 0;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    .support-icon {
      display: flex;
      align-items: center;
      padding: 5px;
      cursor: pointer;
      svg {
        path {
          transition: 0.2s;
        }
      }
      &:hover {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }

  }
}
</style>
<script setup>
import UserState from "@/components/main/UserState.vue";
import ChatHead from "@/components/main/ChatHead.vue";
</script>