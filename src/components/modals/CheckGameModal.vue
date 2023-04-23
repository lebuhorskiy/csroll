<template>
  <div class="modal__body">
    <div @click="setShowCheckGameModal(false)" class="close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12ZM12 12V14.5M12 3C14.3358 5.06658 17.3845 6.14257 20.5 6C20.9536 7.54302 21.0924 9.16147 20.9081 10.7592C20.7239 12.3569 20.2203 13.9013 19.4274 15.3005C18.6345 16.6998 17.5684 17.9254 16.2925 18.9045C15.0165 19.8836 13.5568 20.5962 12 21C10.4432 20.5962 8.9835 19.8836 7.70756 18.9045C6.43163 17.9254 5.36553 16.6998 4.57261 15.3005C3.7797 13.9013 3.27615 12.3569 3.09189 10.7592C2.90763 9.16147 3.04642 7.54302 3.50002 6C6.61555 6.14257 9.66419 5.06658 12 3Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Проверка честной игры
    </div>
    <div class="text">
      <span>Данные раунда</span>
      <p>
        <em>Crash:</em> 1.35
      </p>
      <p>
        <em>Hash:</em> 42314f848a5a9f1c05e1ba711e5bb621c198be2dc8a4ba65f4ac3ad9e9a2849b
      </p>
      <p>
        <em>Salt:</em> c295e6543ea4d7f1cfe1055ac1128290
      </p>
      <br>
      <span>Как проверить?</span>
      <p class="cr">
        Хэш раунда генерируется по формуле sha256(Crash + Соль)<br>
        Для этой игры <span>1.35+c295e6543ea4d7f1cfe1055ac112829</span><br>
        Вы можете подставить данные и проверить хэш на сайте<br>
        генераторе <em>sha256</em>
      </p>
      <br>
      <span class="small">Пояснение:</span>
      <p class="small">
        Перед началом каждой игры случайным образом генерируются соль (32 случайных
        символа) и число, на котором закончится игра. Они складываются между собой
        и хешируются с помощью sha256, после чего этот хэш отображается до того
        как начнется игра. В конце игры можно увидеть соль, с помощью которой была
        произведена генерация, и убедиться, что хэш не менялся и все совпадает.
      </p>


      <strong>
        Это все означает, что мы никак не можем повлиять на исход
        игры заранее или во время самой игры.
      </strong>
    </div>

  </div>
</template>
<script>
import {mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      setShowCheckGameModal: 'config/setShowCheckGameModal'
    })
  }
}
</script>
<style scoped lang="scss">
.modal__body {
  width: 604px;
  max-width: 95%;
  padding: 32px 24px;
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
  .text {
    margin-top: 32px;
    & > span {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #576CB0;
      &.small {
        font-size: 12px;
      }
    }

      p:not(.cr) {
        font-weight: 600;
        width: 100%;
        font-size: 14px;
        line-height: 21px;
        word-break: break-word;
        em {
          font-style: normal;
          color: rgba(234, 193, 89, 1);
          font-size: 14px;
          line-height: 21px;
          font-weight: 600;
          white-space: nowrap;
        }
      }
    .cr {
      font-weight: 600;
      width: 100%;
      font-size: 14px;
      line-height: 21px;
      span {
        color: rgba(151, 167, 219, 1);
        font-size: 14px;
        line-height: 21px;
      }
      em {
        color: rgba(78, 112, 233, 1);
        font-style: normal;
        font-size: 14px;
        line-height: 21px;
      }
    }
    p.small {
      font-size: 12px;
      line-height: 18px;
    }
    strong {
      display: block;
      margin-top: 24px;
      line-height: 23px;
      color: rgba(234, 193, 89, 1);
      font-size: 14px;
    }
  }
}
</style>