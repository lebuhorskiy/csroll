<template>
  <div class="modal__body">
    <div @click="$emit('close')" class="close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="head">
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5H13M5 9H11M9 16L6 13H4C3.20435 13 2.44129 12.6839 1.87868 12.1213C1.31607 11.5587 1 10.7956 1 10V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H14C14.7956 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V10C17 10.7956 16.6839 11.5587 16.1213 12.1213C15.5587 12.6839 14.7956 13 14 13H12L9 16Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Закрытие тикета
    </div>
    <span>Обращение в техподдержку помогло вам решить проблему?</span>

    <div class="actions">
      <button class="action primary">Помогло, спасибо</button>
      <button class="action danger">Нет, сам справился</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.modal__body {
  width: 593px;
  max-width: 95%;
  padding: 32px 24px;
  .head {
    display: flex;
    align-items: center;
    width: 100%;
    svg {
      margin-right: 12px;
    }
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    display: block;
    line-height: 24px;
    margin-top: 32px;
    margin-bottom: 24px;
    color: #576CB0;
  }
  .actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    .action {
      padding: 17px 0;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      line-height: 100%;
      transition: 0.2s;
      border-radius: 8px;
      &.primary {
        background: #4E70E9;
      }
      &:hover {
        opacity: 0.8;
      }
      &.danger {
        background: rgba(255, 92, 48, 0.1);
        border: 1px solid #FF5C30;
      }
    }
  }
}
</style>