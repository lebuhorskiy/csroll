<template>
  <div class="support-links">
    <router-link to="/support/terms-and-conditions">Пользовательское соглашение</router-link>
    <button>Контакты</button>
    <router-link to="/support/privacy-policy">Privacy Policy</router-link>
  </div>
</template>
<style scoped lang="scss">
.support-links {
  display: flex;
  flex-wrap: wrap;
  button,a {
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
    text-align: center;
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