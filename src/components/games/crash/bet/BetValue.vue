<template>
  <div class="panel-value">
    <div class="bet-select">
      <SelectSkinsBet v-if="betType === 'skins'" />
      <SelectBalanceBet v-if="betType === 'balance'" />
    </div>

    <div class="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9999 10L15.9999 14M15.9999 10L11.9999 14M19.9999 6C20.2651 6 20.5195 6.10536 20.707 6.29289C20.8945 6.48043 20.9999 6.73478 20.9999 7V17C20.9999 17.2652 20.8945 17.5196 20.707 17.7071C20.5195 17.8946 20.2651 18 19.9999 18H8.99989L3.99989 13C3.75391 12.725 3.61792 12.369 3.61792 12C3.61792 11.631 3.75391 11.275 3.99989 11L8.99989 6H19.9999Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import SelectSkinsBet from "@/components/games/crash/bet/SelectSkinsBet.vue";
import SelectBalanceBet from "@/components/games/crash/bet/SelectBalanceBet.vue";

export default {
  components: {SelectBalanceBet, SelectSkinsBet},
  computed: {
    ...mapGetters({
      betType: 'crash/betType'
    })
  }
}
</script>
<style scoped lang="scss">
.panel-value {
  width: 50%;
  background: rgba(78, 112, 233, 0.1);
  padding: 0 16px;
  display: flex;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  .bet-select {
    overflow: hidden;
    height: 100%;
    flex-grow: 1;
  }
  .icon {
    display: flex;
    align-items: center;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>