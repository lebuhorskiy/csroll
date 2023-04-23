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
      </div>
      <div class="inventory-body">
        <div class="bet-skins">
          <BaseSkin :skin="skin" v-for="skin in skins" :key="skin.id" />
        </div>
        <div class="bet-control" @click="isShowShop = true">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17ZM6 17H17M6 17V3H4M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM6 5L20 6L19 13H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Магазин предметов
          </button>
        </div>
      </div>
      <transition name="slide-fade">
        <ShopItems @close="isShowShop = false" v-if="isShowShop" />
      </transition>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowShop: false,
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
        color: rgba(87, 108, 176, 1)
      }
      strong {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #fff;
      }
    }
    .indicator + .indicator {
      margin-left: 25px;
    }

    .ui-checkbox {
      margin-left: auto;
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

    .bet-skins {
      flex-grow: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 16px;
      position: relative;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .bet-control {
    margin-top: 24px;
    padding: 0 8px;
    position: relative;
    margin-bottom: 24px;
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