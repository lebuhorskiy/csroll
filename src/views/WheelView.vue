<template>
  <div class="wheel">
    <GamePage>
      <template v-slot:game>
        <WheelGame />
      </template>
      <template v-slot:content>
        <WheelContent />
      </template>
    </GamePage>
  </div>
</template>
<script setup>
import GamePage from "@/components/GamePage.vue";
import WheelGame from "@/components/games/wheel/WheelGame.vue";
import WheelContent from "@/components/games/wheel/WheelContent.vue";
</script>