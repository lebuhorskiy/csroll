<template>
  <div class="profile-referral-block">
    <div class="head">
      <strong>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.393 13.3126C13.7992 13.3126 14.9377 12.1734 14.9377 10.7679V8.74288C14.0077 8.74288 13.2577 7.99288 13.2577 7.06363C13.2577 6.13363 14.0077 5.38438 14.9377 5.38438L14.9362 3.35713C14.9362 1.95163 13.7977 0.812378 12.3922 0.812378H3.60821C2.20271 0.812378 1.06346 1.95163 1.06346 3.35713L1.06271 5.44963C1.99196 5.44963 2.74196 6.13363 2.74196 7.06363C2.74196 7.99288 1.99196 8.74288 1.06271 8.74288V10.7679C1.06271 12.1734 2.20121 13.3126 3.60671 13.3126H12.393Z" stroke="#576CB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99983 8.39078L9.30483 9.07703C9.42708 9.14078 9.57033 9.03728 9.54708 8.90153L9.29733 7.44728L10.3541 6.41903C10.4531 6.32228 10.3983 6.15503 10.2618 6.13478L8.80233 5.92253L8.14908 4.59953C8.08833 4.47578 7.91208 4.47578 7.85058 4.59953L7.19733 5.92253L5.73858 6.13478C5.60208 6.15503 5.54733 6.32228 5.64633 6.41903L6.70233 7.44728L6.45258 8.90153C6.42933 9.03728 6.57258 9.14078 6.69483 9.07703L7.99983 8.39078Z" stroke="#576CB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Рефералы
      </strong>
      <span>Стандарт</span>
    </div>

    <div class="circle">
      <div class="circle-lvl">
        1
      </div>
      <CircleProgress total="100" completed="25" />
    </div>

    <router-link to="/referral">
      Подробнее
    </router-link>
  </div>
</template>
<style scoped lang="scss">
.profile-referral-block {
  width: 304px;
  min-width: 304px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background: rgba(69, 84, 137, 0.1);
  @media (max-width: 1600px) {
    width: 260px;
    min-width: 260px;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
      margin-bottom: 16px;
    }
    strong {
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
      }
    }
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      color: #576CB0;
    }
  }
  a {
    background: rgba(78, 112, 233, 0.1);
    border: 1px solid #4E70E9;
    font-weight: 600;
    text-align: center;
    font-size: 14px;
    line-height: 100%;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    padding: 17px 0;
    @media (max-width: 600px) {
      margin-top: 16px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .circle {
    display: flex;
    position: relative;
    .circle-lvl {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 64px;
      line-height: 100%;
      color: #EAC159;
    }
    align-items: center;
    justify-content: center;
    .circle-progress-container {
      transform: rotate(180deg);
    }
  }
}
</style>
<script setup>
import CircleProgress from "@/components/UI/CircleProgress.vue";
</script>