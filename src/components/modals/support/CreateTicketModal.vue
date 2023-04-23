<template>
  <div class="modal__body">
    <div @click="setTicketModal(false)" class="close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 20L20 13M13 20V14C13 13.7348 13.1054 13.4804 13.2929 13.2929C13.4804 13.1054 13.7348 13 14 13H20M13 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V13" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Задать вопрос
    </div>

    <div class="form">
      <input type="text" placeholder="Тема вопроса">
      <textarea placeholder="Сообщение"></textarea>
      <button>Отправить заявку на рассмотрение</button>
    </div>

  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setTicketModal: 'config/setTicketModal'
    })
  }
}
</script>
<style scoped lang="scss">
.modal__body {
  padding: 32px 24px;
  width: 593px;
  max-width: 95%;
  .head {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  .form {
    margin-top: 32px;
    input {
      background: #232C4B;
      height: 48px;
      padding: 0 16px;
      width: 100%;
      display: block;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
      border: 1px solid #455489;
      border-radius: 8px;
      transition: 0.2s;
      &::placeholder {
        transition: 0.2s;
        color: #576CB0;
        opacity: 0.5
      }
      &:hover {
        &::placeholder {
            color: #576CB0;
            opacity: 1;
        }
      }
      &:focus {
        border: 1px solid #97A7DB;
        &::placeholder {
          color: #576CB0;
          opacity: 1;
        }
      }
    }
    textarea {
      background: #232C4B;
      height: 224px;
      resize: none;
      width: 100%;
      margin-top: 16px;
      padding: 14px 16px;
      border: 1px solid #455489;
      outline: none;
      transition: 0.2s;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      &::placeholder {
        transition: 0.2s;
        color: #576CB0;
        opacity: 0.5
      }
      &:hover {
        &::placeholder {
          color: #576CB0;
          opacity: 1;
        }
      }
      &:focus {
        border: 1px solid #97A7DB;
        &::placeholder {
          color: #576CB0;
          opacity: 1;
        }
      }
    }
    button {
      margin-top: 24px;
      padding: 17px 0;
      width: 100%;
      background: #4E70E9;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      transition: 0.2s;
      line-height: 100%;
      &:focus-within {
        opacity: 0.5;
      }
    }
  }
}
</style>