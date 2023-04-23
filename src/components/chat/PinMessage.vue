<template>
  <div class="pin-message">
    <div class="pin">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 2.62501L6.41667 4.95834L4.08333 5.83334L3.20833 6.70834L7.29167 10.7917L8.16667 9.91668L9.04167 7.58334L11.375 5.25001M5.25 8.75001L2.625 11.375M8.45833 2.33334L11.6667 5.54168" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Закрепленное сообщение
    </div>

    <div class="bonus">
      <div class="text">
        <strong>+50% к депозиту</strong>
        <span>Использовано 100 / 100</span>
      </div>
      <button>
        C4GSQ41
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.pin-message {
  background: rgba(78, 112, 233, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  padding: 16px 24px;
  position: absolute;
  top: 0;
  width: calc(100% - 16px);
  left: 8px;
  z-index: 3;
  .pin {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    svg {
      margin-right: 4px;
    }
  }
  .bonus {
    display: flex;
    align-items: center;
    margin-top: 16px;
    overflow: hidden;
    .text {
      flex-grow: 1;
      strong,span {
        display: block;
        width: 100%;
      }
      strong {
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 4px;
      }
      span {
        font-weight: 600;
        font-size: 12px;
        opacity: 0.4;
        line-height: 18px;
      }
    }
    button {
      background: url(@/assets/images/bonus-bg.png);
      background-size: 100% 100%;
      height: 48px;
      padding: 0 18.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>