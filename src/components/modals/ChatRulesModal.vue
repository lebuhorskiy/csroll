<template>
  <div class="modal__body">
    <div @click="setShowChatRulesModal(false)" class="close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19.0002C10.6318 18.2103 9.07983 17.7944 7.5 17.7944C5.92017 17.7944 4.36817 18.2103 3 19.0002V6.00021C4.36817 5.21029 5.92017 4.79443 7.5 4.79443C9.07983 4.79443 10.6318 5.21029 12 6.00021M12 19.0002C13.3682 18.2103 14.9202 17.7944 16.5 17.7944C18.0798 17.7944 19.6318 18.2103 21 19.0002V6.00021C19.6318 5.21029 18.0798 4.79443 16.5 4.79443C14.9202 4.79443 13.3682 5.21029 12 6.00021M12 19.0002V6.00021" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Правила чата
    </div>

    <div class="text">
      <strong>В чате запрещено:</strong>
      <ul>
        <li>Сливать промокоды</li>
        <li>Попрошайничать</li>
        <li>Оскорблять администрацию</li>
        <li>Показывать чрезмерную агрессию и негатив</li>
        <li>Обвинять администрацию сайта или сайт в</li>
        <li>мошенничестве</li>
        <li>Отправлять ссылки на другие сайты</li>
        <li>Спамить</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setShowChatRulesModal: 'config/setShowChatRulesModal'
    })
  }
}
</script>
<style scoped lang="scss">
.modal__body {
  width: 472px;
  max-width: 95%;
  position: relative;
  padding: 32px 24px;
  .head {
    align-items: center;
    display: flex;
    svg {
      margin-right: 8px;
    }
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  .text {
    margin-top: 30px;
    strong {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: rgba(160, 52, 52, 1);
      margin-bottom: 20px;
      display: block;
      background: linear-gradient(64.52deg, #A03434 16.14%, #FF985E 83.86%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    ul {
      padding-left: 20px;
      li {
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
</style>