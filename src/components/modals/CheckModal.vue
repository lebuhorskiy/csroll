<template>
  <div class="modal__body" ref="body">
    <div @click="setShowCheck(false)" class="close">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L4 12M4 4L12 12" stroke="#455489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="head">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9998 3C14.3357 5.06658 17.3843 6.14257 20.4998 6C20.9534 7.54302 21.0922 9.16147 20.908 10.7592C20.7237 12.3569 20.2202 13.9013 19.4272 15.3005C18.6343 16.6998 17.5682 17.9254 16.2923 18.9045C15.0164 19.8836 13.5566 20.5962 11.9998 21C10.443 20.5962 8.98331 19.8836 7.70738 18.9045C6.43144 17.9254 5.36534 16.6998 4.57243 15.3005C3.77952 13.9013 3.27597 12.3569 3.09171 10.7592C2.90745 9.16147 3.04624 7.54302 3.49983 6C6.61536 6.14257 9.664 5.06658 11.9998 3Z" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Проверка честности
    </div>

    <div class="modal-content">
      <div class="form">
        <div class="input">
          <label for="">Hash</label>
          <div class="input-block">
            fa26w444fa1g511n4t1r12g12s1188f44w8a41
          </div>
        </div>
        <div class="form-group">
          <div class="input">
            <label for="">Режим игры</label>
            <div class="input-block">
              Краш
            </div>
          </div>
          <div class="input">
            <label for="">ID Раунда</label>
            <div class="input-block">
              1564484125
            </div>
          </div>
        </div>

        <div class="input">
          <label for="">Seed</label>
          <div class="input-block">
            1e5r1h1hd17m7484e456d1j5uk151d5r1gd
          </div>
        </div>
        <div class="input">
          <label for="">API</label>
          <div class="input-block">
            9q2f9q4gf8q4gq8q5w15f1q5g4q54w5f45
          </div>
        </div>

        <div class="input">
          <label for="">Random</label>
          <div class="input-block">
            1g5aew15151e5fa1wf5eg15e1at1jyj15r1
            15h15dr15gh1r51eg5w15g5h15wg5b5wer5gew5
            wh1w5151g51hy51j5t1h51yj5m1dt51hds5rgr1r51h1tyj1y5j15t1dh5r1g5w1g5e15h15yj1kj15u1kuk8ukku9u4912ku626k6yr99b2rt4j848rg2e4rgh4her45he58r48er48v1be8r1h8ehj8je4848rg44e
          </div>
        </div>

        <button>Перейти на Random.Org</button>

      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from "vuex";
import closeModal from "@/mixins/closeModal";

export default {
  mixins: [closeModal],
  methods: {
    close () {
      this.setShowCheck(false)
    },
    ...mapMutations({
      setShowCheck: 'config/setShowCheck',
    })
  }
}
</script>
<style scoped lang="scss">
.modal__body {
  padding: 32px 24px;
  width: 472px;
  max-width: calc(100% - 30px);
  .head {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  .form {
    margin-top: 32px;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
    .form-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
    }
    .input {
      margin-bottom: 16px;
      label {
        font-weight: 600;
        font-size: 12px;
        line-height: 100%;
        margin-bottom: 8px;
        display: block;
      }
      .input-block {
        width: 100%;
        background: rgba(87, 108, 176, 0.1);
        border-radius: 8px;
        padding: 12px 16px;
        word-break: break-all;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #576CB0;
        @media (max-width: 768px) {
          font-size: 13px;
        }
      }
    }

    button {
      margin-top: 8px;
      background: #4E70E9;
      padding: 18px 0;
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      transition: 0.2s;
      line-height: 100%;
      cursor: pointer;
      border-radius: 8px;
      &:hover {
        opacity: 0.8;
      }
      &:focus-within {
        opacity: 0.5;
      }
    }
  }
}
</style>