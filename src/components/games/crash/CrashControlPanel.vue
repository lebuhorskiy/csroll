<template>
  <div class="crash-control">
    <div class="skin">
      <div class="slider-wrapper">
        <div class="slider-navs">
          <div class="slider-nav" @click="prev">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4L6 8L10 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="slider-nav" @click="next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <agile :pause-on-hover="false" :pause-on-dots-hover="false" :swipe-distance="1000000000" ref="agile" :infinite="false" :nav="false" :dots="false" :rtl="false" :navButtons="false" :slidesToShow="2" :center-mode="true">
          <BetSkins :skin="{
          id: 0,
          color: 'yellow'
        }" />
          <BetSkins :skin="{
          id: 0,
          color: 'pink'
        }" />
          <BetSkins />
          <BetSkins />
        </agile>
      </div>
    </div>
    <div class="panel">
      <div class="panel-methods">
        <PanelMethod />
        <BetValue />
      </div>
      <div class="prices">
        <label for="">
          Редактировать
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00008 4.33332L11.6667 6.99999M2.66675 13.3334H5.33341L12.3334 6.33336C12.687 5.97974 12.8857 5.50013 12.8857 5.00003C12.8857 4.49993 12.687 4.02032 12.3334 3.6667C11.9798 3.31307 11.5002 3.11441 11.0001 3.11441C10.5 3.11441 10.0204 3.31307 9.66675 3.6667L2.66675 10.6667V13.3334Z" stroke="#455489" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </label>

        <div class="prices-list">
          <div class="price-item active">1.1 x</div>
          <div class="price-item">1.2 x</div>
          <div class="price-item">1.5 x</div>
          <div class="price-item">2 x</div>
          <div class="price-item">3 x</div>
        </div>
      </div>
      <div class="withdraw">
        <label for="">Авто-вывод</label>

        <div class="withdraw-body">
          <input :class="{'disabled': !$root.isAuth}" :disabled="!$root.isAuth || isDisabledBet" :readonly="!$root.isAuth" type="number" placeholder="1.1">
          <button v-if="$root.isAuth" class="action" :disabled="isDisabledBet">
            <template v-if="crash.isStarted() || crash.isFinished()">
              Игра идет...
            </template>
            <template v-else>
              Начать $ 120,77
            </template>
          </button>
          <a :href="LOGIN_URL" v-else class="action unauthorization">
            Авторизуйтесь
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      crash: 'crash/crash'
    }),
    isDisabledBet () {
      return this.crash.isStarted() || this.crash.isFinished();
    }
  },
  methods: {
    next () {
      const slider = this.$refs.agile
      slider.goToNext()
    },
    prev () {
      const slider = this.$refs.agile
      slider.goToPrev()
    }
  }
}
</script>
<style scoped lang="scss">
::v-deep {
  .agile .agile__slides {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
.crash-control {
  padding-bottom: 14px;
  display: flex;
  padding-right: 13px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 8px;
  }
  .slider-wrapper {
    width: 550px;
    margin: 0 auto;
    user-select: none;
    position: relative;
    @media (max-width: 1500px) {
      width: 400px;
    }
    .slider-navs {
      display: flex;
      justify-content: center;
      position: absolute;
      left: 0;
      z-index: 3;
      width: 100%;
      .slider-nav {
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 100%;
        height: 32px;
        background: rgba(69, 84, 137, 0.1);
        &:hover {
          opacity: 0.8;
        }
        &:focus-within {
          opacity: 0.5;
        }
        transition: 0.2s;
      }
      .slider-nav + .slider-nav {
        margin-left: 24px;
      }
    }
    &::after {
      left: 0;
      top: 0;
      width: 120px;
      bottom: 0;
      position: absolute;
      content: "";
      display: block;
      z-index: 2;
      height: 100%;
      background: linear-gradient(90deg, rgba(30,37,66,1) 0%, rgba(0,0,0,0) 72%);
      @media (max-width: 1500px) {
        width: 80px;
      }
    }
    &::before {
      right: 0;
      transform: rotate(180deg);
      top: 0;
      z-index: 2;
      width: 120px;
      bottom: 0;
      position: absolute;
      content: "";
      display: block;
      height: 100%;
      background: linear-gradient(90deg, rgba(30,37,66,1) 0%, rgba(0,0,0,0) 72%);
      @media (max-width: 1500px) {
        width: 80px;
      }
    }
  }
  .skin {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      display: none;
    }
    .empty-skin {
      height: 180px;
      width: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url(@/assets/images/crash-empty-prize.png);
      background-size: 100% 100%;
    }
  }
  .panel {
    width: 388px;
    min-width: 388px;
    @media (max-width: 768px) {
      flex-grow: 1;
    }
    @media (max-width: 575px) {
      width: 100%;
      min-width: 100%;
    }
    .panel-methods {
      display: flex;
      border-radius: 10px;

    }
    .prices {
      width: 100%;
      margin-top: 25px;
      @media (max-width: 768px) {
        margin-top: 16px;
      }
      label {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #455489;
        svg {
          margin-left: 4px;
        }

        margin-bottom: 8px;
      }
      .prices-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 12px;
        @media (max-width: 600px) {
          grid-gap: 10px;
        }
        .price-item {
          border-radius: 16px;
          background: rgba(78, 112, 233, 0.1);
          height: 50px;
          display: flex;
          cursor: pointer;
          transition: 0.2s;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          line-height: 100%;
          color: #4E70E9;
          &:hover, &.active {
            background: #4E70E9;
            color: #fff;
          }
        }
      }
    }
    .withdraw {
      margin-top: 24px;
      @media (max-width: 600px) {
        margin-top: 16px;
      }
      label {
        display: block;
        width: 100%;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 8px;
        color: #455489;
      }
      .withdraw-body {
        display: flex;
        @media (max-width: 600px) {
          flex-wrap: wrap;
        }
        input {
          border: 1px solid rgba(69, 84, 137, 0.1);
          border-radius: 8px;
          background: transparent;
          width: 140px;
          min-width: 140px;
          margin-right: 23px;
          height: 50px;
          padding: 0 16px;
          @media (max-width: 600px) {
            width: 100%;
            min-width: 100%;
            margin-bottom: 16px;
          }
          &:not(.disabled) {
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
        .action {
          flex-grow: 1;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 100%;
          background: url(@/assets/images/bet-bg.png);
          background-size: 102% 102%;
          background-position: center center;
          transition: 0.1s;
          &:hover {
            box-shadow: 0px 5px 19px -1px rgba(78, 112, 233, 0.3);
          }
          &.unauthorization {
            background: #4E70E9;
          }

          @media (max-width: 600px) {
            width: 100%;
            height: 50px;
          }
        }
      }
      margin-bottom: 8px;
    }
  }
}
</style>
<script setup>
import {LOGIN_URL} from "@/definitions/urls";
import PanelMethod from "@/components/games/crash/bet/PanelMethod.vue";
import BetValue from "@/components/games/crash/bet/BetValue.vue";
import BetSkins from "@/components/games/crash/bet/BetSkins.vue";
</script>