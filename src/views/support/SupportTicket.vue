<template>
  <div class="support-ticket">
    <HeaderTop />

    <div class="head">
      <h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9H16M8 13H14M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Большая комиссия!
      </h2>

      <div class="actions">
        <router-link to="/support/tickets" class="action primary">Мои тикеты</router-link>
        <div class="action danger" @click="isShowClosedTicket = true">Закрыть тикет</div>
      </div>
    </div>
    <div class="ticket-content">
      <div class="messages">
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
        <div class="message">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status">
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L11 11L21 1M1 6L6 11M11 6L16 1" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="message admin">
          <div class="avatar">
            <img src="@/assets/images/support-avatar.svg" alt="">
          </div>
          <div class="text">
            Не получается выйти из аккаунта, чтобы авторизоваться через другой профиль Steam
          </div>
          <div class="date">
            23.10.2022    14:15:22
          </div>
          <div class="status"></div>
        </div>
      </div>
      <div class="input-block">
        <textarea class="basic" placeholder="Продумайте и напишите ответ"></textarea>
        <button>Отправить ответ</button>
      </div>
    </div>

    <transition name="slide-fade">
      <ModalsWrapper v-if="isShowClosedTicket">
        <CloseTicketModal @close="isShowClosedTicket = false" />
      </ModalsWrapper>
    </transition>
  </div>
</template>
<script>
import HeaderTop from "@/components/main/HeaderTop.vue";
import ModalsWrapper from "@/components/modals/ModalsWrapper.vue";
import CloseTicketModal from "@/components/modals/support/CloseTicketModal.vue";
export default {
  data () {
    return {
      isShowClosedTicket: false
    }
  },
  components: {
    HeaderTop,
    ModalsWrapper,
    CloseTicketModal
  }
}
</script>
<style scoped lang="scss">
.support-ticket {
  height: 100vh;
  @media (min-width: 1200px) {
    min-height: 900px;
  }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 15px 12px;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      svg {
        margin-right: 12px;
      }
      align-items: center;
      display: flex;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    }
    .actions {
      display: flex;
      .action {
        padding: 17px 32px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        line-height: 100%;
        &.primary {
          background: #4E70E9;
        }
        &.danger {
          background: #FF5C30;
        }
        transition: 0.2s;
        &:hover {
          opacity: 0.8;
        }
        &:focus-within {
          opacity: 0.5;
        }
      }
      .action + .action {
        margin-left: 16px;
      }
    }
  }
  .ticket-content {
    margin-top: 32px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .messages {
      flex-grow: 1;
      overflow-y: auto;
      padding-right: 10px;
      &::-webkit-scrollbar {
        width: 8px;
        background: rgba(69, 84, 137, 0.05);
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(69, 84, 137, 0.1);
        border-radius: 5px;
      }
      .message {
        border-radius: 16px;
        padding: 16px 24px;
        background: rgba(69, 84, 137, 0.1);
        display: flex;
        align-items: center;
        overflow: hidden;
        &.admin {
          background: rgba(78, 112, 233, 0.2);
        }
        .avatar {
          min-width: 40px;
          width: 40px;
          height: 40px;
          overflow: hidden;
          border-radius: 100%;
          margin-right: 24px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }
        .text {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          flex-grow: 1;
          word-break: break-word;
        }
        .date {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          color: #576CB0;
          margin-right: 24px;
        }
        .status {
          width: 24px;
          min-width: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .message + .message {
        margin-top: 12px;
      }
    }
    .input-block {
      margin-top: 24px;
      textarea {
        width: 100%;
        background: #232C4B;
        resize: none;
        height: 200px;
        border: 1px solid #455489;
        border-radius: 8px;
        padding: 14px 16px;
      }
      button {
        padding: 17px 32px;
        background: #4E70E9;
        cursor: pointer;
        margin-top: 20px;
        &:hover {
          opacity: 0.8;
        }
        transition: 0.2s;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        border-radius: 8px;
      }
    }
  }
}
</style>