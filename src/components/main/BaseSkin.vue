<template>
  <div class="skin" :class="[skin.color]">
    <div class="skin-top">
      <div class="slug">ST</div>
      <div class="price">1 763,44 $</div>
    </div>
    <div class="image">
      <img src="@/assets/images/big-skin.png" alt="">
    </div>
    <div class="quality">
      <div class="rarity">FN</div>
      ★ Nomad Knife
    </div>
    <div class="name">Slaughter</div>

    <div class="shadow"></div>
  </div>
</template>
<script>
export default {
  props: {
    skin: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.skin {
  width: 100%;
  background: linear-gradient(251.16deg, rgba(37, 47, 80, 0) -17.49%, #252F50 104.25%);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  min-height: 155px;
  padding: 12px;
  .skin-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .slug {
      background: linear-gradient(45deg, #CA6D00 0%, #FFE27B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-weight: 600;
      font-size: 10px;
      line-height: 140%;
    }
    .price {
      font-weight: 600;
      font-size: 12px;
    }
  }
  .image {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 7.5px;
    img {
      max-width: 100%;
      max-height: 100%;
      height: 100%;
    }
  }
  .shadow {
    position: absolute;
    right: -55px;
    bottom: -55px;
    width: 112px;
    height: 112px;
    background: rgba(237, 162, 49, 0.5);
    filter: blur(50px);
  }
  .quality {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: rgba(255, 255, 255, 0.5);
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    .rarity {
      font-weight: 600;
      position: absolute;
      left: 0;
      top: -20px;
      font-size: 10px;
      line-height: 15px;
      height: 15px;
      color: #576CB0;
      margin-bottom: 8px;
      opacity: 0.5;
    }
  }

  .name {
    font-weight: 400;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .name,.quality,.image, .price {
    position: relative;
    z-index: 2;
  }

  &.red {
    .shadow {
      background: rgba(237, 49, 49, 0.5);
      filter: blur(50px);
    }
  }
  &.pink {
    .shadow {
      background: rgba(237, 49, 173, 0.5);
      filter: blur(50px);
    }
  }
  &.purple {
    .shadow {
      background: rgba(121, 49, 237, 0.5);
      filter: blur(50px);
    }
  }
  &.blue {
    .shadow {
      background: rgba(49, 102, 237, 0.5);
      filter: blur(50px);
    }
  }
  &.gray {
    .shadow {
      background: rgba(255, 255, 255, 0.25);
      filter: blur(50px);
    }
  }
}
</style>