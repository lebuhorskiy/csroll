<template>
  <div class="jackpot-game">
<!--    <JackpotPrize />-->

    <div class="skin">
      <EmptySkin />
    </div>

    <JackpotBetButton />

    <BetInventory />
  </div>
</template>
<script setup>
import BetInventory from "@/components/games/BetInventory.vue";
// import JackpotPrize from "@/components/jackpot/JackpotPrize.vue";
import JackpotBetButton from "@/components/jackpot/JackpotBetButton.vue";
import EmptySkin from "@/components/games/EmptySkin.vue";
</script>
<style scoped lang="scss">
.jackpot-game {
  padding-left: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  .skin {
    width: 180px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 180px;
    min-height: 180px;
    margin-bottom: 45px;
    margin-top: 56px;
  }
  @media (max-width: 1200px) {
    padding-right: 12px;

  }
}
</style>