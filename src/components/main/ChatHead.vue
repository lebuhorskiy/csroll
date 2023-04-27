<template>
  <div class="chat-head" :class="{'fixed': !isShowChat, 'fromHeader': fromHeader}">
    <ChatRooms v-if="!fromHeader"></ChatRooms>
    <div class="controls">
<!--      <a @click.stop.prevent="setShowChatRulesModal(true)" v-if="!fromHeader">Правила</a>-->

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
import ChatRooms from "@/components/main/ChatRooms.vue";

export default {
  components: {ChatRooms},
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
  width: auto;
  display: flex;
  align-items: center;
  padding: 28px 16px;
  padding-left: 20px;
  background: #1E2542;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 16px;
  }
  &.fromHeader {
    z-index: 9;
    border-bottom: 1px solid rgba(69, 84, 137, 0.1);
    height: 97px;
    .hide {
      margin-left: 0 !important;
    }
    @media (max-width: 1200px) {
      height: 92px;
      padding-left: 0;
    }
  }
  &.fixed {
    top: 0;
    right: 0;
    position: absolute;
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
      @media (max-width: 1200px) {
        height: 35px;
        width: 35px;
        min-width: 35px;
        margin-left: 20px;
        svg {
          width: 7px;
        }
      }
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