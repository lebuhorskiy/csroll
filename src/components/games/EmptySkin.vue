<template>
  <div class="empty-skin">
    <img src="@/assets/images/empty-gun.png" alt="">
  </div>
</template>
<style scoped lang="scss">
.empty-skin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(@/assets/images/empty-skin.png);
  background-size: 100% 100%;
  img {
    max-width: 100%;
  }
}
</style>