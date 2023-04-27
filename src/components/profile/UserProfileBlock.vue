<template>
  <div class="user-profile-block">

     <div class="avatar">
       <img :src="`https://avatars.akamai.steamstatic.com/${$root.user.steamPhoto}_full.jpg`" alt="">
<!--       <div class="lvl">{{ $root.user.level }} LVL</div>-->
       <UiLvl :text="$root.user.level + ' LVL'" />
     </div>
    <div class="nickname">{{ $root.user.nickname }}</div>

    <div class="progress">
      <div class="between">
        <div class="from">{{ $root.user.level }} LVL</div>
        <div class="to">{{ $root.user.level + 1 }} LVL</div>
      </div>
      <div class="progress-line">
        <div class="progress-line_fill"></div>
      </div>

      <div class="progress-indicators">
        {{ $root.currency.symbol }} 1 000   <em>/</em>   {{ $root.currency.symbol }} 2 000
      </div>
    </div>

  </div>
</template>
<script>
import {mapActions} from "vuex";
import UiLvl from "@/components/UI/UiLvl.vue";

export default {
  components: {UiLvl},
  methods: {
    ...mapActions({
      logOut: 'user/logOut'
    })
  }
}
</script>
<style scoped lang="scss">
.user-profile-block {
  width: 280px;
  min-width: 280px;
  background: rgba(69, 84, 137, 0.1);
  border-radius: 16px;
  padding: 24px 32px;
  padding-top: 32px;
  position: relative;
  @media (max-width: 1600px) {
    width: 260px;
    min-width: 260px;
  }
  @media (max-width: 600px) {
    padding: 16px;
  }
  .logout {
    position: absolute;
    right: 24px;
    top: 24px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    border: 2px solid #EAC159;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
    .ui-lvl {
      position: absolute;
      bottom: -5px;
      width: 79px;
      left: calc(50% - 39.5px);
    }
    .lvl {
      position: absolute;
      bottom: -5px;
      width: 79px;
      background: url(@/assets/images/lvl-bg-profile.png);
      background-size: 100% 100%;
      height: 29px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      left: calc(50% - 39.5px);
      font-size: 14px;
      line-height: 21px;
      backdrop-filter: blur(5px);
      border-radius: 8px;
    }
  }
  .nickname {
    margin-top: 23px;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 15px;
  }
  .progress {
    width: 100%;
    .between {
      display: flex;
      margin-bottom: 8px;
      justify-content: space-between;
      .from,.to {
        background: rgba(234, 193, 89, 0.1);
        border: 1px solid #EAC159;
        border-radius: 8px;
        padding: 4px 8px;
        font-weight: 700;
        font-size: 10px;
        line-height: 15px;
      }
    }
    .progress-line {
      height: 10px;
      width: 100%;
      background: rgba(69, 84, 137, 0.2);
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 27px;
      .progress-line_fill {
        width: 40%;
        height: 100%;
        background: #EAC159;
        border-radius: 6px;
      }
    }
    .progress-indicators {
      font-weight: 600;
      font-size: 15px;
      line-height: 100%;
      display: flex;
      justify-content: center;
      em {
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 100%;
        margin: 0 10px;
        color: rgba(69, 84, 137, 1)
      }
    }
  }
}
</style>