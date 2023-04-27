<template>
  <div class="profile-indicator">
    <div class="icon">
      <img :src="src" alt="">
    </div>
    <strong>{{ value }}</strong>
    <span>{{ name }}</span>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      default: 0
    },
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
  @media (max-width: 1600px) {
    position: relative;
    padding-left: 40px;
  }
  @media (max-width: 1400px) {
    padding-left: 0;
  }
  .icon {
    margin-bottom: 11px;
    display: flex;
    justify-content: center;
    @media (max-width: 1600px) {
      position: absolute;
      left: 20px;
      top: calc(50% - 20px);
      margin-bottom: 0;
    }
    @media (max-width: 1400px) {
      width: 25px;
      height: 25px;
      display: none;
      top: calc(50% - 12.5px);
      svg {
        width: 25px;
      }
    }

    @media (max-width: 1200px) {
      display: block;
      position: static;
      width: 40px;
      height: 40px;
      margin: 0 auto;
      margin-bottom: 10px;
      top: 0;
    }
  }
  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 4px;
    text-align: center;
    display: block;
    width: 100%;
    @media (max-width: 1400px) {
      font-size: 16px;
      margin-bottom: 0;
    }
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