<template>
  <div class="profile-trade-block">
    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10H21L17 6M17 14H3L7 18" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h2>Трейд-ссылка</h2>
      <a href="">
        Где ее взять?
      </a>
    </div>

    <div class="form">
      <div class="input">
        <input type="text" v-model="link" placeholder="Введите ссылку на трейд">
        <button :disabled="!link">
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33334 5.00002L4.66667 8.33335L11.3333 1.66669" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Сохранить
        </button>
      </div>
      <div class="desc">
        Убедитесь, что ваш инвентарь находится в открытом доступе в Steam
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      link: null
    }
  }
}
</script>
<style scoped lang="scss">
.profile-trade-block {
  border-radius: 10px;
  padding: 24px;
  background: rgba(69, 84, 137, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 16px;
  }
  .head {
    display: flex;
    align-items: center;
    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      margin: 0 12px;
      display: block;
      padding: 0;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
    a {
      display: block;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #576CB0;
      opacity: 0.5;
      transition: 0.2s;
      @media (max-width: 600px) {
        font-size: 12px;
      }
      &:hover {
        opacity: 1;
      }
    }
    @media (max-width: 1600px) {
      margin-bottom: 16px;
    }
  }
  .form {
    .input {
      display: flex;
      margin-bottom: 6px;
      overflow: hidden;

      input {
        flex-grow: 1;
        border-radius: 10px;
        background: rgba(69, 84, 137, 0.1);
        padding: 0 16px;
        font-weight: 600;
        font-size: 14px;
        margin-right: 24px;
        line-height: 21px;
        &::placeholder {
          color: #576CB0;
        }
      }
      button {
        padding: 17px 32px;
        background: #4ABA62;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        font-size: 14px;
        transition: 0.2s;
        line-height: 100%;
        svg {
          margin-right: 8px;
        }
        &:hover {
          opacity: 0.8;
        }
        &[disabled="disabled"] {
          cursor: not-allowed;
          opacity: 0.2;
          filter: grayscale(1);
        }
        &:focus-within {
          opacity: 0.5;
        }
      }
      @media (max-width: 600px) {
        flex-wrap: wrap;
        input,button {
          width: 100%;
          height: 48px;
          margin-right: 0;
        }
        button {
          margin-top: 16px;
          padding-left: 0;
          margin-bottom: 5px;
        }
      }
    }
    .desc {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #576CB0;
    }
  }
}
</style>