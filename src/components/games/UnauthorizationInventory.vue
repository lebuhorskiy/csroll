<template>
  <div class="unauthorization-inventory">
    <div class="image">
      <img src="@/assets/images/unauthorization-lock.png" alt="">
    </div>
    <span>Для доступа к инвентарю<br>
необходимо авторизоваться</span>
    <AuthorizationButton />
  </div>
</template>
<style scoped lang="scss">
.unauthorization-inventory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  .image {
    margin-bottom: 40px;
    img {
      filter: drop-shadow(0px 4px 10px rgba(160, 52, 52, 1));
    }
  }
  align-items: center;
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    display: block;
    width: 100%;
    margin-bottom: 24px;
  }
}
</style>
<script setup>
import AuthorizationButton from "@/components/UI/AuthorizationButton.vue";
</script>