<template>
  <div class="authorization-state">
    <NotificationWrapper />
    <button class="deposit">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V8L19 12V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6ZM4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V16M20 12V16H16C15.4696 16 14.9609 15.7893 14.5858 15.4142C14.2107 15.0391 14 14.5304 14 14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <router-link to="/profile" class="user">
      <div class="avatar">
        <img :src="`https://avatars.akamai.steamstatic.com/${$root.user.steamPhoto}_full.jpg`" alt="">
      </div>
      <div class="information">
        <span>{{ $root.user.nickname }}</span>
        <strong class="balance">$ {{ parseFloat($root.user.balanceUsd).toFixed(2) }}</strong>
      </div>
      
      <button class="logout" @click.prevent.stop="logOut">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M7 12H21M21 12L18 9M21 12L18 15" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
    </router-link>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  methods: {
    ...mapActions({
      logOut: 'user/logOut'
    })
  }
}
</script>
<style scoped lang="scss">
.authorization-state {
  align-items: center;
  display: flex;
  .deposit {
    width: 40px;
    height: 40px;
    background: #4ABA62;
    border-radius: 10px;
    display: flex;
    align-items: center;
    transition: 0.2s;
    justify-content: center;
    cursor: pointer;
    margin: 0 32px;
    &:hover {
      opacity: 0.7;
    }
    &:focus-within {
      opacity: 0.5;
    }
  }
  .user {
    display: flex;
    align-items: center;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
      margin-right: 12px;
    }
    .information {
      width: 82px;
      padding-right: 7.5px;
      span {
        display: block;
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      strong {
        display: block;
        width: 100%;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #EAC159;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .logout {
    padding: 7px 7.5px;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      svg {
        path {
          stroke: #fff;
        }
      }
    }
  }
}
</style>
<script setup>
import NotificationWrapper from "@/components/main/NotificationWrapper.vue";
</script>