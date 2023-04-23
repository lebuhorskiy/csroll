<template>
  <div class="home">
    <GamePage>
      <template v-slot:game>
        <CrashGame />
      </template>
      <template v-slot:content>
        <CrashContent />
      </template>
    </GamePage>
  </div>
</template>

<script>
import GamePage from "@/components/GamePage.vue";
import CrashGame from "@/components/games/crash/CrashGame.vue";
import CrashContent from "@/components/games/crash/CrashContent.vue";

export default {
  name: 'HomeView',
  components: {CrashContent, CrashGame, GamePage},
}
</script>
