<template>
  <div class="shop">
    <div class="shop-head">
      Выберите скины
      <div @click="$emit('close')" class="close">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 4L12 12" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <div class="shop-filters">
      <div class="search">
        <input type="text" class="basic-placeholder" placeholder="Поиск">
      </div>
      <div class="prices">
        <input type="text" placeholder="Мин. цена" class="basic-placeholder">
        <input type="text" placeholder="Макс. цена" class="basic-placeholder">
      </div>
    </div>

    <div class="shop-indicators">
      <div class="indicator">
        <span>Отдаете</span>
        <strong>1 763,44 $</strong>
      </div>
      <div class="indicator">
        <span>Остается</span>
        <strong>0,00 $</strong>
      </div>

      <button>
        Принять
      </button>
    </div>
    <div class="shop-items">
      <UiBlockLoader v-if="isLoading" />
      <template v-else>
        <BaseSkinReal :selectable="true" :skin="skin" v-for="skin in items" :key="skin.id" />
      </template>
    </div>

  </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import BaseSkinReal from "@/components/main/BaseSkinReal.vue";
import UiBlockLoader from "@/components/UI/UiBlockLoader.vue";

export default {
  methods: {
    ...mapActions({
      fetchData: 'shop/fetchData'
    })
  },
  computed: {
    ...mapGetters({
      items: 'shop/items'
    })
  },
  async mounted() {
    await this.fetchData()
    this.isLoading = false
  },
  components: {UiBlockLoader, BaseSkinReal},
  data () {
    return {
      isLoading: true,
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
.shop {
  position: fixed;
  left: 590px;
  bottom: 24px;
  background: #202844;
  box-shadow: 10px 10px 20px rgba(35, 44, 75, 0.8);

  width: 480px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  z-index: 99;
  padding-bottom: 20px;
  @media (max-width: 1500px) {
    left: 440px;
  }
  @media (max-width: 1200px) {
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 0;
    height: 100dvh;
  }
  .shop-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size: 16px;
    border-bottom: 1px solid rgba(69, 84, 137, 0.2);
    line-height: 21px;
    padding: 20px 20px;
    .close {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 5px;
      transition: 0.2s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .shop-filters {
    padding: 16px 20px;
    padding-bottom: 24px;
    .search {
      input {
        height: 48px;
        width: 100%;
        padding: 0 16px;
        background: #232C4B;
        border: 1px solid #455489;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .prices {
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 12px;
      overflow: hidden;
      input {
        background: #232C4B;
        font-weight: 600;
        font-size: 16px;
        width: 100%;
        line-height: 21px;
        height: 48px;
        padding: 0 16px;
        border: 1px solid #455489;
        border-radius: 8px;
      }
    }
  }
  .shop-indicators {
    display: flex;
    padding: 16px 20px;
    background: rgba(69, 84, 137, 0.5);
    align-items: center;
    .indicator {
      span,strong {
        display: block;
      }
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #576CB0;
        @media (max-width: 600px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      strong {
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        @media (max-width: 600px) {
          font-size: 14px;
        }
      }
    }
    .indicator + .indicator {
      margin-left: 24px;
    }
    button {
      margin-left: auto;
      padding: 17px 40px;
      background: #4E70E9;
      cursor: pointer;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      transition: 0.2s;
      line-height: 100%;
      &:hover {
        opacity: 0.8;
      }
      &:focus-within {
        opacity: 0.5;
      }
    }
  }
  .shop-items {
    width: calc(100% - 5px);
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    flex-grow: 1;
    padding: 20px;
    margin-top: 20px;
    padding-top: 0;
    padding-bottom: 2px;
    overflow-y: auto;
    @media (max-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 730px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 575px) {
      grid-template-columns: repeat(2, 1fr);
    }
    ::v-deep {
      .image {
        height: 70px;
      }
    }
    &::-webkit-scrollbar {
      background: rgba(69, 84, 137, 0.05);
      width: 8px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(69, 84, 137, 0.25);
      border-radius: 5px;
    }
  }
}
</style>