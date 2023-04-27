<template>
  <div class="modal__body" ref="body">
    <div @click="setSkinopadModal(false)" class="close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3H9M15 6H9M15 12H18.586C18.7837 12 18.977 12.0587 19.1414 12.1686C19.3058 12.2785 19.434 12.4346 19.5096 12.6173C19.5853 12.8 19.6051 13.0011 19.5666 13.195C19.528 13.389 19.4328 13.5671 19.293 13.707L12.707 20.293C12.5194 20.4805 12.2651 20.5858 12 20.5858C11.7348 20.5858 11.4805 20.4805 11.293 20.293L4.70697 13.707C4.56716 13.5671 4.47196 13.389 4.43339 13.195C4.39482 13.0011 4.41462 12.8 4.49029 12.6173C4.56596 12.4346 4.6941 12.2785 4.85851 12.1686C5.02292 12.0587 5.21622 12 5.41397 12H8.99997V9H15V12Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Скинопад
    </div>

    <strong>Самые активные получают призы!</strong>

    <div class="content">
      <div class="players">
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
        <div class="player">
          <div class="avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="nickname">
            Francisco
          </div>
          <div class="skin">
            <img src="@/assets/images/big-skin.png" alt="">
          </div>
          <div class="amount">
            $ 119,87
          </div>
        </div>
      </div>
      <div class="timer">
        <div class="timer-circle">
          <CircleProgress total="100" :start-color="'rgba(255, 152, 94, 1)'" :stop-color="'rgba(255, 152, 94, 0)'" :diameter="150" :circleWidth="8" completed="50" />
          <div class="timer-text">
            <strong>59:57</strong>
            <span>до конца</span>
          </div>
        </div>
        <p>
          <strong>Розыгрыш каждый час.</strong>
          <br>
          <br>
          Чтобы попасть в список самых
          активных и поучаствовать
          в розыгрыше нужно:

        </p>
        <ul>
          <li>Быть активным в чате</li>
          <li>Быть активным в ставках</li>
          <li>Сыграть больше 10 игр</li>
        </ul>

        <button class="previous">
          Предыдущий
        </button>
      </div>
    </div>

  </div>
</template>
<script>
import CircleProgress from "@/components/UI/CircleProgress.vue";
import {mapMutations} from "vuex";
import closeModal from "@/mixins/closeModal";

export default {
  mixins: [closeModal],
  methods: {
    close () {
      this.setSkinopadModal(false)
    },
    ...mapMutations({
      setSkinopadModal: 'config/setSkinopadModal'
    })
  },
  components: {
    CircleProgress
  }
}
</script>
<style scoped lang="scss">
.modal__body {
  width: 642px;
  max-width: 95%;
  padding: 32px 24px;
  padding-right: 50px;
  .head {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  & > strong {
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 32px;
    margin-bottom: 24px;
    color: #EAC159;
  }
  .content {
    display: flex;
    overflow: hidden;
    .players {
      flex-grow: 1;
      margin-right: 50px;
      .player {
        padding: 4px 16px;
        border-radius: 8px;
        display: flex;
        background: rgba(69, 84, 137, 0.1);
        align-items: center;
        .avatar {
          width: 32px;
          height: 32px;
          margin-right: 16px;
          border-radius: 100%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .nickname {
          width: 75px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-weight: 600;
          font-size: 14px;
          line-height: 100%;
          margin-right: 23px;
        }
        .skin {
          height: 30px;
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-height: 100%;
            max-width: 100%;
          }
        }
        .amount {
          margin-left: auto;
          font-weight: 600;
          font-size: 12px;
          line-height: 100%;
          color: #EAC159;
        }

      }
      .player + .player {
        margin-top: 8px;
      }
    }
    .timer {
      width: 200px;
      min-width: 200px;
      .timer-circle {
        margin: 0 auto;
        margin-bottom: 40px;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .timer-text {
          position: absolute;
          strong {
            font-family: 'DS-Digital';
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            display: block;
            color: #fff;
            line-height: 100%;
            text-align: center;
            margin: 0;
          }
          span {
            text-align: center;
            font-weight: 600;
            font-size: 14px;
            line-height: 100%;
            margin-top: 4px;
            display: block;
            color: #576CB0;
          }
        }
      }
      p {
        strong {
          font-weight: 600;
          font-size: 12px;
          line-height: 21px;
          color: rgba(234, 193, 89, 1)
        }
        font-weight: 600;
        font-size: 12px;
        line-height: 21px;
      }
      ul {
        padding-left: 10px;
        margin-top: 15px;
        list-style: none;
        li {
          font-weight: 600;
          font-size: 12px;
          line-height: 21px;
          &::before {
            content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
            color: rgba(160, 52, 52, 1); /* Change the color */
            font-weight: bold; /* If you want it to be bold */
            display: inline-block; /* Needed to add space between the bullet and the text */
            width: 1em; /* Also needed for space (tweak if needed) */
            margin-left: -1em; /* Also needed for space (tweak if needed) */
          }
        }
      }
      .previous {
        margin-top: 32px;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        background: #4E70E9;
        cursor: pointer;
        padding: 13px 0;
        width: 100%;
        &:hover {
          opacity: 0.8;
        }
        transition: 0.2s;
        border: 1px solid #4E70E9;
        border-radius: 5px
      }
    }
  }
}
</style>