<template>
  <div class="home">
    <GamePage v-if="crash">
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
import {mapActions, mapGetters} from 'vuex'
import {CRASH_CREATED, CRASH_FINISHED, CRASH_STARTED} from "@/queries/subscriptions";
export default {
  name: 'HomeView',
  methods: {
    ...mapActions({
      init: 'crash/init',
      crashStarted: 'crash/started',
      crashFinished: 'crash/crashFinished',
      crashCreated: 'crash/created'
    })
  },
  computed: {
    ...mapGetters({
      crash: 'crash/crash'
    })
  },
  apollo: {
    $subscribe: {
      crashStarted: {
        query: CRASH_STARTED,
        result({data}) {
          this.crashStarted(data.CrashStartedStream.date)
        }
      },
      crashFinished: {
        query: CRASH_FINISHED,
        result({data}) {
          this.crashFinished(data.CrashFinishedStream)
        }
      },
      crashCreated: {
        query: CRASH_CREATED,
        result({data}) {
          this.crashCreated(data.CrashCreatedStream)
        }
      }
    }
  },
  components: {CrashContent, CrashGame, GamePage},
  mounted () {
    this.init();
  }
}
</script>
