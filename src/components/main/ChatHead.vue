<template>
  <div class="chat-head" :class="{'fixed': !isShowChat, 'fromHeader': fromHeader}">
    <div class="online">
      <div class="flag">
        <img src="@/assets/images/flags/ru.svg" alt="">
      </div>
      <span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 13V11.6667C1 10.9594 1.28095 10.2811 1.78105 9.78105C2.28115 9.28095 2.95942 9 3.66667 9H6.33333C7.04058 9 7.71885 9.28095 8.21895 9.78105C8.71905 10.2811 9 10.9594 9 11.6667V13M7.66667 3.66667C7.66667 5.13943 6.47276 6.33333 5 6.33333C3.52724 6.33333 2.33333 5.13943 2.33333 3.66667C2.33333 2.19391 3.52724 1 5 1C6.47276 1 7.66667 2.19391 7.66667 3.66667Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          3 585
        </span>
    </div>
    <div class="controls">
      <a @click.stop.prevent="setShowChatRulesModal(true)">Правила</a>

      <div class="hide" :class="{'reverse': !isShowChat}" @click="setShowChat(!isShowChat)">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  props: {
    fromHeader: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      isShowChat: 'config/isShowChat'
    })
  },
  methods: {
    ...mapMutations({
      setShowChatRulesModal: 'config/setShowChatRulesModal',
      setShowChat: 'config/setShowChat'
    })
  }
}
</script>
<style scoped lang="scss">
.chat-head {
  width: 350px;
  display: flex;
  align-items: center;
  padding: 28px 16px;
  padding-left: 20px;
  background: #1E2542;
  justify-content: space-between;
  &.fromHeader {
    z-index: 9999;
    border-bottom: 1px solid rgba(69, 84, 137, 0.1);
    height: 97px;
  }
  &.fixed {
    top: 0;
    right: 0;
    position: absolute;
  }
  .online {
    display: flex;
    align-items: center;
    padding: 9.5px 14px;
    background: rgba(69, 84, 137, 0.1);
    border-radius: 8px;
    .flag {
      display: flex;
      align-items: center;
      width: 20px;
      img {
        width: 100%;
        height: 15px !important;
      }

      margin-right: 12px;
    }
    span {
      font-weight: 600;
      font-size: 16px;
      display: flex;
      align-items: center;
      line-height: 21px;
      svg {
        margin-right: 10px;
      }
    }
  }
  .controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      color: #576CB0;
      transition: 0.2s;
      &:hover {
        color: #97A7DB
      }
    }
    .hide {
      margin-left: 40px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      cursor: pointer;
      background: rgba(87, 108, 176, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;
      &:hover {
        background: rgba(87, 108, 176, 0.5);
      }
      &.reverse {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>