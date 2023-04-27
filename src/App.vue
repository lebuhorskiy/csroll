<template>
  <div id="app" :class="{'overflow-hidden': isOverflowHidden}">
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

      <transition name="slide-fade">
        <ModalsWrapper v-if="isShowCheck">
          <CheckModal />
        </ModalsWrapper>
      </transition>


      <!--   MOBILE COMPONENTS   -->
      <transition name="slide-fade">
        <MobileHeaderModal v-if="isShowMobileMenu" />
      </transition>
      <MobileHeader />
      <MobileNav />
    </div>
  </div>
</template>
<script>
import ChatRight from "@/components/chat/ChatRight.vue";
import {mapActions, mapGetters, mapMutations} from "vuex";
import ModalsWrapper from "@/components/modals/ModalsWrapper.vue";
import CreateTicketModal from "@/components/modals/support/CreateTicketModal.vue";
import ChatRulesModal from "@/components/modals/ChatRulesModal.vue";
import SettingsModal from "@/components/modals/SettingsModal.vue";
import CheckGameModal from "@/components/modals/CheckGameModal.vue";
import SkinopadModal from "@/components/modals/SkinopadModal.vue";
import MobileHeader from "@/components/mobile/MobileHeader.vue";
import MobileNav from "@/components/mobile/MobileNav.vue";
import MobileHeaderModal from "@/components/mobile/MobileHeaderModal.vue";
import CheckModal from "@/components/modals/CheckModal.vue";

export default {
  watch: {
    '$route': function () {
      this.setShowMobileMenu(false)
    }
  },
  methods: {
    ...mapActions({
      getRates: 'config/getRates',
      getUser: 'user/getUser',
      getInventory: 'inventory/getItems'
    }),
    ...mapMutations({
      setShowCheck: 'config/setShowCheck',
      setShowMobileMenu: 'config/setMobileMenu',
      setShowChat: 'config/setShowChat',
      setWidth: 'config/setWidth'
    }),
    subscribeResize () {
      this.setWidth(window.innerWidth)

      window.addEventListener('resize', () => {
        this.setWidth(window.innerWidth)
      });
    }
  },
  computed: {
    isOverflowHidden () {
      if (this.$root.width < 1024) {
        return this.isShowMobileMenu || this.isShowShopModal || this.isShowChat
      }
      return false
    },
    ...mapGetters({
      isShowCheck: 'config/isShowCheck',
      isShowShopModal: 'config/isShowShopModal',
      isShowMobileMenu: 'config/isShowMobileMenu',
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
      await this.getInventory()
    }
    await this.getRates()
    this.subscribeResize()
  },
  components: {
    CheckModal,
    MobileHeaderModal,
    MobileNav,
    MobileHeader,
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
#app {
  &.overflow-hidden {
    height: 100dvh;
    overflow-y: hidden;
  }
}
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
  @media (max-width: 1800px) {
    padding-right: 0;
  }
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  @media (max-width: 1024px) {
    padding-top: 73px;
    padding-bottom: 73px;
  }
}


</style>
