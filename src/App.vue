<template>
  <div id="app" >
    <div class="wrapper" :class="{'without-chat': !isShowChat}">
      <NavLeft></NavLeft>
      <div class="content">
        <router-view/>
      </div>

      <transition name="slide-fade">
        <ChatRight v-if="isShowChat" />
      </transition>
      <transition name="slide-fade">
        <ModalsWrapper v-if="isShowNewTicketModal">
          <CreateTicketModal />
        </ModalsWrapper>
        <ModalsWrapper v-if="isShowChatRulesModal">
          <ChatRulesModal />
        </ModalsWrapper>
        <ModalsWrapper v-if="isShowSettingsModal">
          <SettingsModal />
        </ModalsWrapper>
        <ModalsWrapper v-if="isShowCheckGameModal">
          <CheckGameModal />
        </ModalsWrapper>
        <ModalsWrapper v-if="isShowSkinopadModal">
          <SkinopadModal />
        </ModalsWrapper>
      </transition>
    </div>
  </div>
</template>
<script>
import ChatRight from "@/components/chat/ChatRight.vue";
import {mapActions, mapGetters} from "vuex";
import ModalsWrapper from "@/components/modals/ModalsWrapper.vue";
import CreateTicketModal from "@/components/modals/support/CreateTicketModal.vue";
import ChatRulesModal from "@/components/modals/ChatRulesModal.vue";
import SettingsModal from "@/components/modals/SettingsModal.vue";
import CheckGameModal from "@/components/modals/CheckGameModal.vue";
import SkinopadModal from "@/components/modals/SkinopadModal.vue";

export default {
  methods: {
    ...mapActions({
      getUser: 'user/getUser'
    })
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'user/isAuthenticated',
      isShowSkinopadModal: 'config/isShowSkinopadModal',
      isShowCheckGameModal: 'config/isShowCheckGameModal',
      isShowSettingsModal: 'config/isShowSettingsModal',
      isShowNewTicketModal: 'config/isShowNewTicketModal',
      isShowChatRulesModal: 'config/isShowChatRulesModal',
      isShowChat: 'config/isShowChat'
    })
  },
  async mounted () {
    if (this.isAuthenticated) {
      await this.getUser()
    }
  },
  components: {
    SkinopadModal,
    CheckGameModal,
    SettingsModal,
    ChatRulesModal,
    CreateTicketModal,
    ModalsWrapper,
    ChatRight,
    'NavLeft': () => import('./components/main/NavLeft.vue')
  }
}
</script>
<style lang="scss">
@import './styles/main.scss';

.wrapper {
  display: flex;
  padding-right: 350px;
  padding-left: 107px;
  &.without-chat {
    padding-right: 0;
  }
  .content {
    flex-grow: 1;
    overflow: hidden;
  }
}
</style>
