<template>
  <div class="profile-indicator">
    <div class="icon">
      <img :src="src" alt="">
    </div>
    <strong>4 790</strong>
    <span>Сыграно игр</span>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String
    }
  },
}
</script>
<style scoped lang="scss">
.profile-indicator {
  border-radius: 10px;
  padding: 16px 0;
  background: rgba(69, 84, 137, 0.1);
  .icon {
    margin-bottom: 11px;
    display: flex;
    justify-content: center;
  }
  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 4px;
    text-align: center;
    display: block;
    width: 100%;
  }
  span {
    width: 100%;
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #576CB0;
  }
}
</style>