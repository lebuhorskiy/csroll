<template>
  <div class="language-switcher">
    <div class="language-switcher-main" :class="{'active': isShowLanguages}" @click.prevent.stop="isShowLanguages = !isShowLanguages">
      <img src="@/assets/images/flags/ru.svg" alt="">
    </div>
    <transition>
      <div class="language-switcher-dropdown" v-show="isShowLanguages">
        <div class="language">
          <img src="@/assets/images/flags/ru.svg" alt="">
          <div class="name">Russian</div>
        </div>
        <div class="language">
          <img src="@/assets/images/flags/ua.svg" alt="">
          <div class="name">Ukraine</div>
        </div>
        <div class="language">
          <img src="@/assets/images/flags/tu.svg" alt="">
          <div class="name">Turkey</div>
        </div>
        <div class="language">
          <img src="@/assets/images/flags/en.svg" alt="">
          <div class="name">English</div>
        </div>
        <div class="language">
          <img src="@/assets/images/flags/ch.svg" alt="">
          <div class="name">China</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowLanguages: false
    }
  },
  methods: {
    hideLanguages () {
      this.isShowLanguages = false
    }
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideLanguages)
  },
  mounted() {
    window.addEventListener('click', this.hideLanguages)
  }
}
</script>
<style scoped lang="scss">
.language-switcher {
  width: 48px;
  cursor: default;
  .language-switcher-main {
    cursor: pointer;
    background: rgba(69, 84, 137, 0.1);
    border-radius: 8px;
    padding: 13px 0;
    display: flex;
    transition: 0.2s;
    justify-content: center;
    &:hover:not(.active) {
      opacity: 0.6;
    }
  }

  position: relative;

  .language-switcher-dropdown {
    width: 100%;
    left: 0;
    position: absolute;
    bottom: calc(100% + 4px);
    background: #232C4B;
    border-radius: 8px;
    padding: 8px 0;
    .language {
      cursor: pointer;
      padding: 8px 0;
      width: 100%;
      transition: 0.2s;
      text-align: center;
      position: relative;
      img {
        transition: 0.2s;
      }
      &:hover {
        img {
          opacity: 0.5;
        }
      }
      .name {
        position: absolute;
        left: calc(100% + 8px);
        background: #2E385F;
        box-shadow: 0px 0px 10px rgba(33, 41, 72, 0.6);
        border-radius: 8px;
        padding: 8px 16px;
        font-weight: 600;
        font-size: 12px;
        z-index: 9;
        line-height: 18px;
        top: calc(50% - 17px);
        display: none;
        opacity: 0;
        transition: 0.2s;
      }
      &:hover {
        .name {
          display: block;
          opacity: 1;
        }
      }
    }
  }
}
</style>