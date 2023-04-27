<template>
  <div class="bet-instance" :class="[color, {'is-win': isWin}]">
    <div class="bet-instance_user">
      <div class="avatar">
        <img src="@/assets/images/av1.png" alt="">
      </div>
      <div class="nickname">Courtney</div>
    </div>
    <div class="shadow" v-if="isWin"></div>
    <div class="shadow-default" v-else></div>
    <div class="bet-instance_bet" >
      <strong>$ 54,87</strong>
      <div class="skin">
        <div class="img">
          <img src="@/assets/images/skin-2.png" alt="">
        </div>
        <div class="cost">182,87$</div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    isWin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="scss">
.bet-instance {
  display: flex;
  padding: 12px 20px;
  cursor: pointer;
  align-items: center;
  background: rgba(69, 84, 137, 0.1);
  border-radius: 16px;
  overflow: hidden;
  min-height: 70px;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-height: 50px;
  }
  .bet-instance_user {
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      min-height: 40px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }

      margin-right: 12px;
      @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        min-width: 30px;
        min-height: 30px;
      }
    }
    .nickname {
      font-weight: 600;
      font-size: 12px;
      line-height: 21px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      @media (max-width: 1600px) and (min-width: 768px) {
        display: none;
      }
      @media (max-width: 600px) {
        font-size: 10px;
      }
    }

  }
  .bet-instance_bet {
    strong {
      font-weight: 700;
      font-size: 12px;
      line-height: 24px;
      color: #EAC159;
    }
    .skin {
      opacity: 0;
      width: 70px;
      transition: 0.2s;
      min-width: 70px;
      display: none;

      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 48px;
        @media (max-width: 600px) {
          height: 30px;
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .cost {
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
        font-weight: 700;
        color: #4ABA62;
        font-size: 12px;
        line-height: 18px;
        @media (max-width: 600px) {
          font-size: 10px;
        }
      }
    }
  }
  &.is-win {
    padding-right: 5px;
    @media (max-width: 600px) {
      padding-right: 0;
    }
    .bet-instance_bet {
      strong {
        display: none;
      }
      .skin {
        display: block;
        opacity: 1;
      }
    }
  }
  position: relative;
  .shadow {
    position: absolute;
    right: 0;
    width: 160px;
    top: 0;
    height: 100%;
    z-index: 2;
    opacity: 0.2;
    &:hover {
        + .bet-instance_bet {
          strong {
            display: none;
          }
          .skin {
            display: block;
            opacity: 1;
          }
        }
    }
  }
  .shadow-default {
    position: absolute;
    right: 0;
    width: 160px;
    top: 0;
    height: 100%;
    z-index: 1;
    transition: 0.2s;
    opacity: 0;
    background: linear-gradient(270deg, #576CB0 0%, rgba(87, 108, 176, 0) 94.41%);
    &:hover {
      + .bet-instance_bet {
        margin-right: -15px;
        strong {
          display: none;
        }
        .skin {
          display: block;
          opacity: 1;
        }
      }
    }
  }

  &.green {
    .shadow {
      background: linear-gradient(270deg, #4ABA62 0%, rgba(74, 186, 98, 0) 94.41%);
    }


  }
  &.pink {
    .shadow {
      background: linear-gradient(270deg, #A430FF 0%, rgba(164, 48, 255, 0) 94.41%);
    }
    .bet-instance_bet {
      .skin {
        .cost {
          color: #A430FF;
        }
      }
    }
  }
  &.yellow {
    .shadow {
      background: linear-gradient(270deg, #EAC159 0%, rgba(164, 48, 255, 0) 94.41%);
    }
    .bet-instance_bet {
      .skin {
        .cost {
          color: #EAC159;
        }
      }
    }
  }
  &.blue  {
    .shadow {
      background: linear-gradient(270deg, #4E70E9 0%, rgba(164, 48, 255, 0) 94.41%);
    }
    .bet-instance_bet {
      .skin {
        .cost {
          color: #4E70E9;
        }
      }
    }
  }

  &:hover {
    .shadow-default {
      opacity: 0.2;
    }
  }
}
</style>