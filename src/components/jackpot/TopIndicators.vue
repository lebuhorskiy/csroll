<template>
  <div class="top-indicators">
    <GameInfo />
    <GameIndicator :chance="0.27" :user="{
      avatar: require('@/assets/images/avatar-1.png'),
      name: 'BroTwiceInDa',
      balance: 54.87
    }">
      <template v-slot:icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19C9.34784 19 6.8043 17.9464 4.92893 16.0711C3.05357 14.1957 2 11.6522 2 9C3.31322 9 4.61358 9.25866 5.82683 9.7612C7.04009 10.2638 8.14248 11.0003 9.07107 11.9289C9.99965 12.8575 10.7362 13.9599 11.2388 15.1732C11.7413 16.3864 12 17.6868 12 19ZM12 19C14.6522 19 17.1957 17.9464 19.0711 16.0711C20.9464 14.1957 22 11.6522 22 9C19.3478 9 16.8043 10.0536 14.9289 11.9289C13.0536 13.8043 12 16.3478 12 19ZM14.99 11.5C15.0595 10.1085 14.8284 8.71832 14.3124 7.42412C13.7965 6.12992 13.0078 4.96205 12 4C10.9922 4.96205 10.2035 6.12992 9.68756 7.42412C9.17161 8.71832 8.94051 10.1085 9.01 11.5" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
      <template v-slot:title>
        Удача дня
      </template>
    </GameIndicator>

    <GameIndicator :chance="12.97" :user="{
      avatar: require('@/assets/images/avatar-2.png'),
      name: 'EdwinAcoofa',
      balance: 144.43
    }">
      <template v-slot:icon>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 4.5501C14.0217 4.15613 12.9754 3.95872 11.9207 3.96914C10.8661 3.97956 9.82384 4.19761 8.85347 4.61083C7.8831 5.02405 7.00362 5.62435 6.26524 6.37746C5.52687 7.13058 4.94406 8.02175 4.5501 9.00009C3.75445 10.976 3.77629 13.187 4.61083 15.1467C5.44537 17.1065 7.02423 18.6544 9.00009 19.4501M9.00009 15.0001V20.0001H4.00009M18.3701 7.15991V7.16991M13.0001 19.9399V19.9499M16.8401 18.3701V18.3801M19.3701 15.1001V15.1101M19.9401 11V11.01" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </template>
      <template v-slot:title>
        Последняя игра
      </template>
    </GameIndicator>
  </div>
</template>
<style scoped lang="scss">
.top-indicators {
  display: flex;
  overflow: hidden;
  .game-info {
    flex-grow: 1;
    overflow: hidden;
  }
  .game-indicator {
    width: 277px;
    min-width: 277px;
    background: rgba(69, 84, 137, 0.1);
    border-radius: 16px;
  }
  .game-indicator + .game-indicator {
    margin-left: 16px;
  }
}
</style>
<script setup>
import GameInfo from "@/components/jackpot/GameInfo.vue";
import GameIndicator from "@/components/jackpot/GameIndicator.vue";
</script>