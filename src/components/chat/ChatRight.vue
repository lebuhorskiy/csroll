<template>
  <div class="chat">
    <ChatHead />

    <div class="gift" @click="setSkinopadModal(true)">
      <span>Скинопад</span>
      <div class="timer">23:59:59</div>
    </div>

    <div class="chat-body">
      <PinMessage />
      <div class="chat__body-items">


        <ChatMessage :message="{
        color: 'green',
        nickname: 'Chance',
        role: 'youtuber'
      }" />
        <ChatMessage :message="{
        color: 'purple',
        nickname: 'Martin',
        nickname_color: 'purple',
        showIndicators: true,
        role: null
      }" />
        <ChatMessage :message="{
        color: 'yellow',
        nickname: 'Gustavo',
        nickname_color: 'yellow',
        role: 'moderator'
      }" />
        <ChatMessage :message="{
        color: 'orange',
        nickname: 'Talan',
        nickname_color: 'blue',
        role: 'admin'
      }" />

        <ChatMessage :message="{
        color: 'green',
        nickname: 'Chance',
        role: 'youtuber'
      }" />
        <ChatMessage :message="{
        color: 'purple',
        nickname: 'Martin',
        nickname_color: 'purple',
        showIndicators: true,
        role: null
      }" />
        <ChatMessage :message="{
        color: 'yellow',
        nickname: 'Gustavo',
        nickname_color: 'yellow',
        role: 'moderator'
      }" />
        <ChatMessage :message="{
        color: 'orange',
        nickname: 'Talan',
        nickname_color: 'blue',
        role: 'admin'
      }" />
      </div>

      <ChatInput />
    </div>


  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    ...mapGetters({
      isShowChat: 'config/isShowChat'
    })
  },
  methods: {
    ...mapMutations({
      setSkinopadModal: 'config/setSkinopadModal',
      setShowChatRulesModal: 'config/setShowChatRulesModal',
      setShowChat: 'config/setShowChat'
    })
  }
}
</script>
<style scoped lang="scss">
.chat {
  width: 350px;
  height: 100vh;
  min-width: 350px;
  position: fixed;
  top: 0;
  background: #232C4B;
  box-shadow: -10px 10px 40px rgba(0, 0, 0, 0.05);
  right: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .gift {
    justify-content: space-between;
    background: #4E70E9;
    display: flex;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    transition: 0.2s;
    align-items: center;
    background-image: url(@/assets/images/gift-bg.png);
    background-position: center center;
    padding: 12px 24px;
    position: relative;
    span {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
    }
    .timer {
      font-family: 'DS-Digital', sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 100%;
    }
  }
  .chat-body {
    padding-left: 20px;
    margin-top: 16px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    .chat__body-items {
      overflow-y: auto;
      position: relative;
      flex-grow: 1;
      &::-webkit-scrollbar {
        width: 8px;
        background: rgba(69, 84, 137, 0.1);
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(69, 84, 137, 0.5);
        &:hover {
          scrollbar-width: thin;
        }

      }
    }
    .chat-message + .chat-message {
      margin-top: 24px;
    }
  }

  padding-bottom: 24px;
}
</style>
<script setup>
import ChatInput from "@/components/chat/ChatInput.vue";
import ChatMessage from "@/components/chat/ChatMessage.vue";
import PinMessage from "@/components/chat/PinMessage.vue";
import ChatHead from "@/components/main/ChatHead.vue";
</script>