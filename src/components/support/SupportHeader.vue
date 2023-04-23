<template>
  <div class="support-header">
    <h2>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9H16M8 13H14M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ header }}
    </h2>
    <div class="actions">
      <button class="primary action-button" @click.stop.prevent="setTicketModal(true)">Задать вопрос</button>
      <router-link to="/support/tickets" class="secondary action-button" v-if="$route.name === 'support'">Мои обращения</router-link>
      <router-link to="/support" class="secondary action-button" v-if="$route.name === 'support.tickets'">Вернуться</router-link>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  props: {
    header: {
      type: String,
      default: 'Техническая поддержка'
    }
  },
  methods: {
    ...mapMutations({
      setTicketModal: 'config/setTicketModal'
    })
  }
}
</script>
<style scoped lang="scss">
.support-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    display: flex;
    align-items: center;
    svg {
      margin-right: 12px;
    }
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  .actions {
    display: flex;
    .action-button {
      padding: 17px 32px;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      border-radius: 8px;
      cursor: pointer;
      &.primary {
        background: #4E70E9;
      }
      &.secondary {
        color: #576CB0;
        background: #232C4B;
      }
      transition: 0.2s;
      &:hover {
        opacity: 0.8;
      }
      &:focus-within {
        opacity: 0.5;
      }
    }
    .action-button + .action-button {
      margin-left: 16px;
    }
  }
}
</style>