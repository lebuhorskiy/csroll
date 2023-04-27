<template>
  <div class="bet-inventory">
    <UnauthorizationInventory v-if="!$root.isAuth" />
    <template v-else>
      <div class="bet-top">
        <div class="indicator">
          <span>Баланс</span>
          <strong>1 763,44 $</strong>
        </div>
        <div class="indicator">
          <span>Выбрано</span>
          <strong>1 763,44 $</strong>
        </div>

        <UiCheckbox />
        <div @click="isShowMobileItems = !isShowMobileItems" class="is-show-items">
          <template v-if="!isShowMobileItems">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
          <template v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3L21 21M10.584 10.587C10.2087 10.962 9.99778 11.4707 9.99759 12.0013C9.9974 12.5318 10.208 13.0407 10.583 13.416C10.958 13.7913 11.4667 14.0022 11.9973 14.0024C12.5278 14.0026 13.0367 13.792 13.412 13.417M9.363 5.365C10.2204 5.11972 11.1082 4.99684 12 5C16 5 19.333 7.333 22 12C21.222 13.361 20.388 14.524 19.497 15.488M17.357 17.349C15.726 18.449 13.942 19 12 19C8 19 4.667 16.667 2 12C3.369 9.605 4.913 7.825 6.632 6.659" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </div>
      </div>
      <div :class="{'show': isShowMobileItems}" class="inventory-body">
        <div class="bet-skins">
          <BaseSkin :selectable="true" :skin="skin" v-for="skin in skins" :key="skin.id" />
        </div>
        <div class="bet-control" @click="setShopModal(true)">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17ZM6 17H17M6 17V3H4M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM6 5L20 6L19 13H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Магазин предметов
          </button>
        </div>
      </div>
      <transition name="slide-fade">
        <ShopItems @close="setShopModal(false)" v-if="isShowShopModal" />
      </transition>
    </template>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  data () {
    return {
      isShowMobileItems: false,
      skins: [
        {
          id: 0,
          color: 'yellow'
        },
        {
          id: 1,
          color: 'red'
        },
        {
          id: 2,
          color: 'pink'
        },
        {
          id: 3,
          color: 'purple'
        },
        {
          id: 4,
          color: 'blue'
        },
        {
          id: 5,
          color: 'gray'
        },
        {
          id: 6,
          color: 'yellow'
        },
        {
          id: 7,
          color: 'red'
        },
        {
          id: 8,
          color: 'pink'
        },
        {
          id: 9,
          color: 'purple'
        },
        {
          id: 10,
          color: 'blue'
        },
        {
          id: 11,
          color: 'gray'
        },
        {
          id: 12,
          color: 'yellow'
        },
        {
          id: 13,
          color: 'red'
        },
        {
          id: 14,
          color: 'pink'
        },
        {
          id: 15,
          color: 'purple'
        },
        {
          id: 16,
          color: 'blue'
        },
        {
          id: 17,
          color: 'gray'
        }
      ]
    }
  },
  methods: {
    ...mapMutations({
      setShopModal: 'config/setShopModal'
    })
  },
  computed: {
    ...mapGetters({
      isShowShopModal: 'config/isShowShopModal'
    })
  }
}
</script>
<style scoped lang="scss">
.bet-inventory {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 16px;
  flex-grow: 1;
  position: relative;
  padding-top: 16px;
  background: linear-gradient(180deg, rgba(69, 84, 137, 0) 0%, rgba(69, 84, 137, 0.1) 100%);
  @media (max-width: 1024px) {
    background: rgba(69, 84, 137, 0.1);
    padding-top: 0;
    margin-top: 15px;
  }
  .bet-top {
    display: flex;
    align-items: center;
    background: rgba(69, 84, 137, 0.1);
    border-radius: 16px;
    padding: 24px 32px;
    .indicator {
      span,strong {
        display: block;
      }
      span {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        @media (max-width: 600px) {
          font-size: 12px;
        }
        color: rgba(87, 108, 176, 1)
      }
      strong {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #fff;
        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
    }
    .indicator + .indicator {
      margin-left: 25px;
    }

    .ui-checkbox {
      margin-left: auto;
    }
    .is-show-items {
      display: none;
      width: 40px;
      height: 40px;
      margin-left: 16px;
      align-items: center;
      justify-content: center;
      background: rgba(69, 84, 137, 0.1);
      border-radius: 8px;
      transition: 0.2s;
      @media (max-width: 1024px) {
        display: flex;
      }
    }
    @media (max-width: 600px) {
      padding: 15px 16px;
    }
  }
  .inventory-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    padding-bottom: 0px;
    overflow: hidden;
    flex-grow: 1;
    padding-top: 32px;
    @media (max-width: 600px) {
      padding-top: 8px;
    }
    .bet-skins {
      flex-grow: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 16px;
      position: relative;
      overflow-y: auto;
      @media (max-width: 1500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      &::-webkit-scrollbar {
        display: none;
      }
      @media (max-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
        height: 350px;
      }
      @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 1024px) {
      display: none;
      &.show {
        display: flex;
      }
    }
  }
  .bet-control {
    margin-top: 24px;
    padding: 0 8px;
    position: relative;
    margin-bottom: 24px;
    @media (max-width: 600px) {
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &::after {
      content: "";
      display: block;
      z-index: 2;
      height: 100px;
      bottom: 100%;
      width: 100%;
      left: 0;
      transform: rotate(180deg);
      position: absolute;
      background: linear-gradient(180deg, rgb(32 40 69 / 95%) 26.54%, rgba(217, 217, 217, 0) 100.79%);
      @media (max-width: 1024px) {
        display: none;
      }
    }
    button {
      background: #4E70E9;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 20px;
      }
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      width: 100%;
      transition: 0.2s;
      cursor: pointer;
      padding: 12px 0;
      &:hover {
        opacity: 0.8;
      }
    }
  }

}
</style>
<script setup>
import UiCheckbox from "@/components/UI/UiCheckbox.vue";
import BaseSkin from "@/components/main/BaseSkin.vue";
import ShopItems from "@/components/games/ShopItems.vue";
import UnauthorizationInventory from "@/components/games/UnauthorizationInventory.vue";
</script>