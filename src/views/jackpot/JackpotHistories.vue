<template>
  <div class="jackpot-histories">
    <HeaderTop />
    <HistoriesTopPanel />

    <div class="games">
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
      <router-link to="/jackpot/histories/1" class="game">
        <div class="winner">
          <div class="winner-avatar">
            <img src="@/assets/images/av1.png" alt="">
          </div>
          <div class="winner-prize">
            $ 54.87
          </div>
          <div class="winner-percent">
            15.23%
          </div>
        </div>
        <div class="game-info">
          <div class="stats">
            <div class="nickname">
              BroTwiceInDa
            </div>
            <div class="skins">
              BroTwiceInDa
            </div>
            <div class="id">#151563541</div>
            <div class="time">
              23:33
            </div>
          </div>
          <div class="skins">
            <JackpotBetSkin v-for="skin in skins" :key="skin.id" :skin="skin" />
            <MoreSkinsBlock :more="skins.length - getSkins.length" v-if="skins.length > 4"></MoreSkinsBlock>
          </div>
        </div>
      </router-link>
    </div>

  </div>
</template>
<script>
import HeaderTop from "@/components/main/HeaderTop.vue";
import HistoriesTopPanel from "@/components/games/HistoriesTopPanel.vue";
import JackpotBetSkin from "@/components/jackpot/JackpotBetSkin.vue";
import MoreSkinsBlock from "@/components/games/MoreSkinsBlock.vue";
export default {
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
  },
  components: {
    MoreSkinsBlock,
    HeaderTop,
    JackpotBetSkin,
    HistoriesTopPanel
  }
}
</script>
<style scoped lang="scss">
.jackpot-histories {
  padding: 15px 12px;
  .games {
    margin-top: 24px;
    .game {
      display: flex;
      transition: 0.2s;
      border-radius: 16px;
      background: rgba(69, 84, 137, 0.1);
      overflow: hidden;
      &:hover {
        opacity: 0.8;
      }
      .winner {
        padding-top: 24px;
        padding-bottom: 16px;
        width: 128px;
        background: rgba(69, 84, 137, 0.1);

        min-width: 128px;
        .winner-avatar {
          width: 64px;
          height: 64px;
          margin: 0 auto;
          border-radius: 100%;
          overflow: hidden;
          margin-bottom: 8px;
          img {
            overflow: hidden;
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }
        .winner-prize {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #EAC159;
          margin-bottom: 2px;
          width: 100%;
          text-align: center;
        }
        .winner-percent {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          width: 100%;
          text-align: center;
        }
      }
      .game-info {
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        .stats {
          display: flex;
          align-items: center;
          .nickname {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            margin-right: 16px;
          }
          .skins {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #97A7DB;
          }
          .id {
            margin-left: auto;
            margin-right: 16px;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #97A7DB;
          }
          .time {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            color: #576CB0;
          }
        }
        .skins {
          display: flex;
          .bet-skin + .bet-skin {
            margin-left: 16px;
          }
        }
      }
    }
    .game + .game {
      margin-top: 12px;
    }
  }
}
</style>