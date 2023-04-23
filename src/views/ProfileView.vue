<template>
  <div class="profile-view">
    <HeaderTop />

    <div class="profile-top">
      <UserProfileBlock />
      <div class="profile-top-center">
        <div class="profile-top-indicators">
          <ProfileIndicator :src="require('@/assets/images/icons/in1.svg')" />
          <ProfileIndicator :src="require('@/assets/images/icons/in2.svg')" />
          <ProfileIndicator :src="require('@/assets/images/icons/in3.svg')" />
          <ProfileIndicator :src="require('@/assets/images/icons/in4.svg')" />
          <ProfileIndicator :src="require('@/assets/images/icons/in5.svg')" />
          <ProfileIndicator :src="require('@/assets/images/icons/in6.svg')" />
        </div>
        <ProfileTradeBlock />
      </div>
      <ProfileReferralBlock />
    </div>

    <div class="profile-main">
      <ProfileTabs />
      <ProfileInventory v-if="selectTab === 'inventory'" />
      <ProfileTransactions v-if="selectTab === 'transactions'" />
    </div>

  </div>
</template>
<script >
import HeaderTop from "@/components/main/HeaderTop.vue";
import UserProfileBlock from "@/components/profile/UserProfileBlock.vue";
import ProfileIndicator from "@/components/profile/ProfileIndicator.vue";
import ProfileTradeBlock from "@/components/profile/ProfileTradeBlock.vue";
import ProfileReferralBlock from "@/components/profile/ProfileReferralBlock.vue";
import ProfileTabs from "@/components/profile/ProfileTabs.vue";
import ProfileInventory from "@/components/profile/ProfileInventory.vue";
import {mapGetters} from "vuex";
import ProfileTransactions from "@/components/profile/ProfileTransactions.vue";
export default {
  computed: {
    ...mapGetters({
      selectTab: 'profile/selectTab'
    })
  },
  components: {
    ProfileTransactions,
    HeaderTop,
    UserProfileBlock,
    ProfileIndicator,
    ProfileTradeBlock,
    ProfileReferralBlock,
    ProfileTabs,
    ProfileInventory
  }
}
</script>
<style scoped lang="scss">
.profile-view {
  padding: 15px 12px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .profile-top {
    padding-top: 10px;
    display: flex;
    overflow: hidden;
    .profile-top-center {
      flex-grow: 1;
      overflow: hidden;
      margin: 0 16px;
      display: flex;
      flex-direction: column;
      .profile-top-indicators {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 16px;
      }
      .profile-trade-block {
        margin-top: 16px;
        flex-grow: 1;
      }
    }
  }
  .profile-main {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 100;
  }
}
</style>