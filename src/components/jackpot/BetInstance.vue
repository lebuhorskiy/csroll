<template>
  <div class="bet">
    <div class="bet-user">
      <div class="avatar" :style="{'border-color': '#4ABA62'}">
        <img src="@/assets/images/av1.png" alt="">
      </div>
      <div class="information">
        <span>BroTwiceInDa</span>
        <strong>$ 54,87</strong>
      </div>
    </div>
    <div class="bet-skins">
      <JackpotBetSkin v-for="skin in getSkins" :key="skin.id" :skin="skin"></JackpotBetSkin>
      <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 5"></MoreSkinsBlock>
    </div>
    <div class="chance">
      <span>Шанс:</span> <strong>25%</strong>
    </div>
    <div class="billets">
      Билеты: <strong>100 - 1001</strong>
    </div>
  </div>
</template>
<script>
import JackpotBetSkin from "@/components/jackpot/JackpotBetSkin.vue";
import MoreSkinsBlock from "@/components/games/MoreSkinsBlock.vue";

export default {
  components: {MoreSkinsBlock, JackpotBetSkin},
  data () {
    return {
      skins: [
        {
          id: 0,
          color: 'yellow',
          img: require('@/assets/images/skin-1.png')
        },
        {
          id: 1,
          color: 'red',
          img: require('@/assets/images/skin-2.png')
        },
        {
          id: 2,
          color: 'pink',
          img: require('@/assets/images/skin-3.png')
        },
        {
          id: 3,
          color: 'purple',
          img: require('@/assets/images/skin-1.png')
        },
        {
          id: 4,
          color: 'blue',
          img: require('@/assets/images/skin-2.png')
        },
        {
          id: 5,
          color: 'gray',
          img: require('@/assets/images/skin-3.png')
        },
      ]
    }
  },
  computed: {
    getSkins () {
      const limit = 3
      const skins = []
      for (const item in this.skins) {
        if (skins.length < limit) {
          if (this.skins[item]) {
            skins.push(this.skins[item])
          }
        }
      }

      return skins
    }
  }
}
</script>
<style scoped lang="scss">
.bet {
  background: rgba(69, 84, 137, 0.1);
  border-radius: 16px;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  .bet-user {
    display: flex;
    width: 260px;
    align-items: center;
    .avatar {
      width: 64px;
      border-width: 2px;
      border-style: solid;
      height: 64px;
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
      span,strong {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 8px;
      }
      strong {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #EAC159;
      }
    }
  }
  .bet-skins {
    display: flex;
    .bet-skin + .bet-skin {
      margin-left: 12px;
    }
  }
  .chance {
    display: flex;
    margin-left: auto;
    align-items: center;
    margin-right: 24px;
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #576CB0;
    }
    strong {
      font-weight: 600;
      font-size: 14px;
      margin-left: 3px;
      line-height: 21px;
      color: #fff;
    }
  }
  .billets {
    white-space: nowrap;
    display: flex;
    align-items: center;
    background: rgba(69, 84, 137, 0.1);
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #576CB0;
    strong {
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      margin-left: 5px;
    }
  }

}
</style>