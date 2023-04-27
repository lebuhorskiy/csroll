<template>
  <div class="chat-input" @mouseleave="isShowStickers = false">
    <div class="input" >
      <input type="text" placeholder="Текст сообщения">
      <div class="smiles" :class="{'active': isShowStickers}" @click="isShowStickers = !isShowStickers">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 10H9.01M15 10H15.01M9.5 15C9.82588 15.3326 10.2148 15.5968 10.6441 15.7772C11.0734 15.9576 11.5344 16.0505 12 16.0505C12.4656 16.0505 12.9266 15.9576 13.3559 15.7772C13.7852 15.5968 14.1741 15.3326 14.5 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <button>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19.978H5.33099C4.66499 19.978 4.18499 19.34 4.36999 18.701L5.12899 16.079L5.12499 16.081V16.081C2.59899 11.837 4.45899 6.20004 9.37099 4.43904C12.361 3.36704 15.805 4.24104 17.92 6.60904C21.393 10.498 20.337 16.337 16.089 18.862C14.829 19.611 13.414 19.986 11.999 19.986" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <transition name="slide-fade">
      <SmilesWrapper  v-if="isShowStickers" />
    </transition>

  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowStickers: false,
    }
  }
}
</script>
<style scoped lang="scss">
.chat-input {
  display: flex;
  min-height: 50px;
  margin-top: 30px;
  position: relative;
  align-items: center;
  padding-right: 16px;
  .input {
    background: #252F50;
    border: 1px solid #4E70E9;
    flex-grow: 1;
    height: 50px;
    min-height: 50px;
    overflow: hidden;
    border-radius: 16px;
    position: relative;
    .smiles {
      position: absolute;
      right: 24px;
      height: 24px;
      width: 24px;
      transition: 0.2s;
      cursor: pointer;
      svg {
        path {
          transition: 0.2s;
        }
      }
      top: calc(50% - 12px);
      &:hover, &.active {
        opacity: 0.8;
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
    input {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #fff;
      height: 100%;
      width: 100%;
      background: transparent;
      padding: 0 16px;
      padding-right: 55px;
      overflow: hidden;
      &::placeholder {
        color: #576CB0;
        transition: 0.1s;
        opacity: 0.5;
      }
      &:hover, &:focus {
        &::placeholder {
          color: #576CB0;
          opacity: 1;
        }
      }
    }
  }
  button {
    background: #4E70E9;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    min-width: 50px;
    cursor: pointer;
    transition: 0.2s;
    margin-left: 16px;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
<script setup>
import SmilesWrapper from "@/components/chat/SmilesWrapper.vue";
</script>