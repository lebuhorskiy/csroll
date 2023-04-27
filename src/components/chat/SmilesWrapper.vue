<template>
  <div class="smiles-wrapper">
    <div class="sticker-items">
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
      <div class="sticker-item">
        <img src="@/assets/images/sticker.png" alt="">
      </div>
    </div>
    <div class="stickers">
      <div class="sticker active">Последние</div>
      <div class="sticker">Набор 1</div>
      <div class="sticker">Набор 2</div>
      <div class="sticker">Набор 3</div>
      <div class="sticker">Набор 4</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.smiles-wrapper {
  background: rgba(69, 84, 137, 0.2);
  box-shadow: 10px 10px 20px rgba(35, 44, 75, 0.8);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 300px;
  right: 30px;
  bottom: 40px;
  height: 235px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-right: 10px;
  .sticker-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    flex-grow: 1;
    overflow-y: auto;
    padding-right: 10px;
    margin-bottom: 9px;
    &::-webkit-scrollbar {
      width: 8px;
      background: rgba(69, 84, 137, 0.3);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(69, 84, 137, 0.6);
      border-radius: 5px;
    }
    .sticker-item {
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &:focus-within {
        opacity: 0.5;
      }
      img {
        width: 100%;
        height: 80px;
      }
    }
  }
  border-radius: 16px;
  padding-bottom: 10px;
  .stickers {
    display: flex;
    overflow-x: auto;
    height: 30px;
    &::-webkit-scrollbar {
      display: none;
    }
    .sticker {
      cursor: pointer;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      transition: 0.2s;
      white-space: nowrap;
      color: #576CB0;
      &.active, &:hover {
        color: #FFFFFF;
      }
    }
    .sticker + .sticker {
      margin-left: 8px;
    }
  }
}
</style>