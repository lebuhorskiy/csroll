<template>
  <div class="profile-view" v-if="$root.user">
    <HeaderTop />

    <div class="profile-top">
      <UserProfileBlock />
      <div class="profile-top-center">
        <div class="profile-top-indicators">
          <ProfileIndicator name="Сделал ставок" :value="$root.user.getStatistic.totalCountBets" :src="require('@/assets/images/icons/in1.svg')" />
          <ProfileIndicator name="Побед" :value="$root.user.getStatistic.totalCountWins" :src="require('@/assets/images/icons/in2.svg')" />
          <ProfileIndicator name="Винрейт" :value="parseFloat($root.user.getStatistic.winRate).toFixed() + ' %'" :src="require('@/assets/images/icons/in3.svg')" />
          <ProfileIndicator name="Всего выиграл" :value="parseFloat($root.user.getStatistic.totalWinAmount).toFixed(2) + ' ' + $root.currency.symbol" :src="require('@/assets/images/icons/in4.svg')" />
          <ProfileIndicator name="Топ выигрыш" :value="parseFloat($root.user.getStatistic.largestWinAmount).toFixed(2) + ' ' + $root.currency.symbol" :src="require('@/assets/images/icons/in5.svg')" />
          <ProfileIndicator name="Топ коэф" :value="'x' + parseFloat($root.user.getStatistic.biggestMultiplier).toFixed(2)" :src="require('@/assets/images/icons/in6.svg')" />
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
  @media (min-width: 1200px) {
    min-height: 900px;
  }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 1200px) {
    height: auto;
  }
  .profile-top {
    padding-top: 10px;
    display: flex;
    overflow: hidden;
    @media (max-width: 1600px) {
      padding-top: 0;
    }
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
        @media (max-width: 1600px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 600px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .profile-trade-block {
        margin-top: 16px;
        flex-grow: 1;
      }
    }

    @media (max-width: 1200px) {
      flex-wrap: wrap;
      .user-profile-block {
        order: 0;
        width: calc(50% - 8px);
        margin-right: 16px;
        min-width: auto;
      }
      .profile-top-center {
        order: 2;
        margin: 0;
        margin-top: 16px;
      }
      .profile-referral-block {
        min-width: auto;
        order: 1;
        width: calc(50% - 8px);
      }

    }
    @media (max-width: 600px) {
      .profile-referral-block, .user-profile-block {
        width: 100%;
        margin-right: 0;
      }
      .profile-referral-block {
        margin-top: 16px;
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