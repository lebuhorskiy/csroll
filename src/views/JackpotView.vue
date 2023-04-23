<template>
  <GamePage>
    <template v-slot:game>
      <JackpotGame />
    </template>
    <template v-slot:content>
      <JackpotContent />
    </template>
  </GamePage>
</template>
<script setup>
import GamePage from "@/components/GamePage.vue";
import JackpotGame from "@/components/jackpot/JackpotGame.vue";
import JackpotContent from "@/components/jackpot/JackpotContent.vue";
</script>