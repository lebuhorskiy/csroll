<template>
  <div class="mobile-header">
    <router-link to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </router-link>
    <router-link to="/profile" v-if="$root.isAuth" class="user">
      <span>{{ $root.user.nickname }}</span>
      <strong>{{ $root.currency.symbol }} {{ convertRate(parseFloat($root.user.balanceUsd).toFixed(2)) }}</strong>
    </router-link>
    <AuthorizationButton class="auth-button" v-else />

    <button v-if="$root.isAuth">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V8L19 12V9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6ZM4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V16M20 12V16H16C15.4696 16 14.9609 15.7893 14.5858 15.4142C14.2107 15.0391 14 14.5304 14 14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <NotificationWrapper v-if="$root.isAuth" />

    <div class="burger" @click="setMobileMenu(true)">
      <svg width="22" height="22" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H17M1 7H17M1 13H17" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    ...mapGetters({
      convertRate: 'config/convertRate'
    })
  },
  methods: {
    ...mapMutations({
      setMobileMenu: 'config/setMobileMenu'
    })
  }
}
</script>
<style scoped lang="scss">
.mobile-header {
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-right: 16px;
  z-index: 999;
  align-items: center;
  height: 73px;
  border-bottom: 1px solid rgba(69, 84, 137, 0.1);
  background: linear-gradient(251.16deg, rgba(37, 47, 80, 0) -17.49%, rgba(37, 47, 80, 0.5) 104.25%), #1E2542;
  .logo {
    height: 100%;
    margin-right: 5px;
    img {
      height: 100%;
    }
  }
  .user {
    span,strong {
      display: block;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
    strong {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #EAC159;
    }
  }
  button {
    margin-right: 28px;
    padding: 0 8px;
    height: 40px;
    background: #4ABA62;
    margin-left: auto;
    border-radius: 10px;
  }
  .burger {
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 22px;
    justify-content: center;

  }
  .notification-wrapper {
    margin-top: 4px;
  }
}

::v-deep {
  .auth-button {
    margin-left: auto;
    justify-content: center;
    span {
      display: none;
    }
    svg {
      margin-left: 0;
    }
  }
}
</style>
<script setup>
import NotificationWrapper from "@/components/main/NotificationWrapper.vue";
import AuthorizationButton from "@/components/UI/AuthorizationButton.vue";
</script>