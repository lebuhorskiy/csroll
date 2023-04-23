<template>
  <div class="chat-message">
    <div class="user">
      <img src="@/assets/images/avatar-1.png" alt="">
    </div>
    <div class="info">
      <router-link to="/profile/1" class="nickname" :class="[message.nickname_color]">
        <div class="role-preview" v-if="message.role">
          <template v-if="message.role === 'youtuber'">Ютубер</template>
          <template v-if="message.role === 'admin'">Админ</template>
          <template v-if="message.role === 'moderator'">Модератор</template>
        </div>
        <div class="role" v-if="message.role && message.role === 'youtuber'">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3365 13.2726L10.7768 13.4489L10.7595 13.4504C9.92179 13.5179 9.09904 13.7016 8.31679 13.9941L6.66904 14.5896C6.31916 14.716 5.94692 14.7686 5.57572 14.7443C5.20452 14.7199 4.84237 14.619 4.51204 14.4479C4.18816 14.2823 3.9042 14.0482 3.67988 13.7618C3.45557 13.4755 3.29626 13.1437 3.21304 12.7896L2.31004 8.81989C2.23751 8.49954 2.2313 8.16773 2.29179 7.84489C2.35228 7.52205 2.4782 7.215 2.66179 6.94264C3.04295 6.38035 3.62896 5.9895 4.29454 5.85364L11.6768 4.30864C13.0793 4.01464 14.4638 4.86664 14.7698 6.21139L15.69 10.2554C15.7693 10.6057 15.7694 10.9693 15.6902 11.3196C15.6111 11.6699 15.4547 11.9982 15.2325 12.2804C15.0037 12.5695 14.7167 12.8072 14.39 12.9781C14.0634 13.1491 13.7045 13.2494 13.3365 13.2726Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.50002 8.00015L8.22902 11.0002L11.25 8.75015L7.50002 8.00015Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="role" v-if="message.role && message.role === 'moderator'">
          <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 1.75012V7.00012H12.25L6.25 15.2501V10.0001H1.75L7.75 1.75012Z" stroke="#EAC159" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="role" v-if="message.role && message.role === 'admin'">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6.25012V15.2501M8 6.25012C9.24264 6.25012 10.25 5.24276 10.25 4.00012C10.25 2.75748 9.24264 1.75012 8 1.75012C6.75736 1.75012 5.75 2.75748 5.75 4.00012C5.75 5.24276 6.75736 6.25012 8 6.25012ZM8 15.2501C6.4087 15.2501 4.88258 14.618 3.75736 13.4928C2.63214 12.3675 2 10.8414 2 9.25012M8 15.2501C9.5913 15.2501 11.1174 14.618 12.2426 13.4928C13.3679 12.3675 14 10.8414 14 9.25012M14.75 9.25012H13.25M2.75 9.25012H1.25" stroke="#4E70E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span>{{ message.nickname }}</span>

        <div class="level" :class="[message.color]">
          4
        </div>
      </router-link>
      <div class="indicators" v-if="message.showIndicators">
        <div class="indicator">
          <div class="icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.2652 1 13.5196 1.10536 13.7071 1.29289C13.8946 1.48043 14 1.73478 14 2V5L16 9V6C16 5.73478 15.8946 5.48043 15.7071 5.29289C15.5196 5.10536 15.2652 5 15 5H3C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3ZM1 3V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V13M17 9V13H13C12.4696 13 11.9609 12.7893 11.5858 12.4142C11.2107 12.0391 11 11.5304 11 11C11 10.4696 11.2107 9.96086 11.5858 9.58579C11.9609 9.21071 12.4696 9 13 9H17Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="words">
            <span>ДЕПОЗИТОВ</span>
            <strong>499.96 $</strong>
          </div>
        </div>
        <div class="indicator">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 12H18.01M6 12H6.01M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM5 6H19C20.1046 6 21 6.89543 21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8C3 6.89543 3.89543 6 5 6Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="words">
            <span>ДЕНЕГ НА АККАУНТЕ</span>
            <strong>0.96 $</strong>
          </div>
        </div>
        <div class="indicator">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12L10 17L20 7" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="words">
            <span>ВЫВЕЛ</span>
            <strong>499 $</strong>
          </div>
        </div>
      </div>
      <div v-else class="text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit official consequat duis enim velit mollit.
      </div>

      <div class="time">14:45</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.chat-message {
  display: flex;
  padding-right: 16px;
  align-items: flex-start;
  .user {
    width: 40px;
    height: 40px;
    min-width: 40px;
    margin-right: 8px;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
  .info {
    flex-grow: 1;
    padding-top: 2px;
    position: relative;
    .time {
      right: 0;
      top: 1px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #576CB0;
      position: absolute;
      opacity: 0.5
    }
    .nickname {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      .role-preview {
        position: absolute;
        bottom: calc(100% + 8px);
        z-index: 2;
        background: #2E385F;
        box-shadow: 0px 0px 10px rgba(33, 41, 72, 0.6);
        border-radius: 8px;
        padding: 8px 16px;
        left: 0;
        font-weight: 600;
        transition: 0.2s;
        font-size: 12px;
        line-height: 18px;
        opacity: 0;
        visibility: hidden;
      }
      &:hover {
        .role-preview {
          opacity: 1;
          visibility: visible;
        }
      }
      span {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
      }
      .role {
        margin-right: 8px;
        display: flex;
        align-items: center;
      }
      .level {
        margin-left: 10px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 20px;
        font-weight: 600;
        font-size: 10px;
        line-height: 100%;
        padding-right: 1px;
        &.green {
          background: linear-gradient(45deg, rgba(100, 160, 52, 0.1) 0%, rgba(165, 255, 94, 0.1) 100%);
          border: 2px solid rgba(165, 255, 94, 1);
        }
        &.purple {
          background: rgba(78, 112, 233, 0.1);
          border: 2px solid #4E70E9;
        }
        &.yellow {
          background: rgba(234, 193, 89, 0.1);
          border: 2px solid #EAC159;
        }
        &.orange {
          background: linear-gradient(45deg, rgba(160, 52, 52, 0.1) 0%, rgba(255, 152, 94, 0.1) 100%);
          border: 2px solid rgba(255, 152, 94, 1);
        }
      }
      &.purple {
        span {
          background: linear-gradient(70.91deg, #8F5FC0 0%, #5E78EA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
      &.yellow {
        span {
          background: linear-gradient(70.91deg, #DC8F48 0%, #DFD049 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
      &.blue {
        span {
          background: linear-gradient(67.84deg, #464EE7 -1.82%, #3FD3D5 106.59%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
    }
    .indicators {
      margin-top: 8px;
      .indicator {
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        background: rgba(69, 84, 137, 0.1);
        .icon {
          width: 62px;
          background: rgba(69, 84, 137, 0.2);
          height: 62px;
          min-width: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .words {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 17px;
          span,strong {
            width: 100%;
            display: block;
          }
          span {
            font-weight: 600;
            font-size: 10px;
            line-height: 15px;
            color: #576CB0;
          }
          strong {
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            color: #EAC159;
          }
        }
      }
      .indicator + .indicator {
        margin-top: 8px;
      }
    }
    .text {
      margin-top: 8px;
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #97A7DB;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>