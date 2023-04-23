<template>
  <div class="users-bets">
    <div class="list">
      <UserChanceBet :avatar="require('@/assets/images/av1.png')" color="#4ABA62" />
      <UserChanceBet :avatar="require('@/assets/images/av2.png')" color="rgba(78, 112, 233, 1)" />
      <UserChanceBet :avatar="require('@/assets/images/av3.png')" color="#FF5C30" />
      <UserChanceBet :avatar="require('@/assets/images/av4.png')" color="#EAC159" />
      <UserChanceBet :avatar="require('@/assets/images/av1.png')" color="#4ABA62" />
      <UserChanceBet :avatar="require('@/assets/images/av2.png')" color="rgba(78, 112, 233, 1)" />
      <UserChanceBet :avatar="require('@/assets/images/av3.png')" color="#FF5C30" />
      <UserChanceBet :avatar="require('@/assets/images/av4.png')" color="#EAC159" />
      <UserChanceBet :avatar="require('@/assets/images/av1.png')" color="#4ABA62" />
      <UserChanceBet :avatar="require('@/assets/images/av2.png')" color="rgba(78, 112, 233, 1)" />
      <UserChanceBet :avatar="require('@/assets/images/av3.png')" color="#FF5C30" />
      <UserChanceBet :avatar="require('@/assets/images/av4.png')" color="#EAC159" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.users-bets {
  background: rgba(69, 84, 137, 0.1);
  border-radius: 16px;
  margin-top: 16px;
  padding: 32px 40px;
  padding-right: 10px;
  overflow: hidden;
  position: relative;

  .list {
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .user-bet + .user-bet {
    margin-left: 35px;
  }
}
</style>
<script setup>
import UserChanceBet from "@/components/jackpot/UserChanceBet.vue";
</script>