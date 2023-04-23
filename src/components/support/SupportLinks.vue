<template>
  <div class="support-links">
    <button>Пользовательское соглашение</button>
    <button>Контакты</button>
    <button>Privacy Policy</button>
  </div>
</template>
<style scoped lang="scss">
.support-links {
  display: flex;
  flex-wrap: wrap;
  button {
    background: rgba(69, 84, 137, 0.1);
    background: #455489;
    border-radius: 8px;
    padding: 17px 0;
    display: block;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    flex: 1;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
    &:first-child {
      margin-bottom: 16px;
      flex: 1 0 100%;
    }
    &:last-child {
      margin-left: 16px;
    }
  }
}
</style>