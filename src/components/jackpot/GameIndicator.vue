<template>
  <div class="game-indicator">
    <div class="game-indicator_title">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </div>

    <div class="game-indicator_user">
      <div class="avatar">
        <img :src="user.avatar" alt="">
      </div>
      <div class="information">
        <strong>$ {{ parseFloat(user.balance).toFixed(2) }}</strong>
        <span>{{ user.name }}</span>
      </div>
    </div>

    <div class="game-indicator_chance">
      Шанс: {{ parseFloat(chance).toFixed(2) }}%
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    chance: {
      type: Number
    }
  }
}
</script>
<style scoped lang="scss">
.game-indicator {
  padding: 24px 32px;
  .game-indicator_title {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    svg {
      margin-right: 12px;
    }
  }
  .game-indicator_user {
    margin-top: 24px;
    display: flex;
    align-items: center;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }

      margin-right: 16px;
    }
    .information {
      strong,span {
        display: block;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      strong {
        margin-bottom: 2px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #EAC159;
      }
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  .game-indicator_chance {
    background: rgba(69, 84, 137, 0.1);
    border-radius: 8px;
    padding: 13.5px 0;
    text-align: center;
    margin-top: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #576CB0;
  }
}
</style>