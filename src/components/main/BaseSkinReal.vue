<template>
  <div class="skin" @click="isSelect = !isSelect" :class="[typeToColor(skin.rarity), {'selected': isSelect}, {'selectable': selectable}]">

    <div class="border" v-if="selectable"></div>

    <div class="skin-top">
      <div class="slug" v-if="skin.isStattrak">ST</div>
      <div class="slug" v-else></div>
      <div class="price">{{ convertRate(parseFloat(skin.priceUsd).toFixed(2)) }} {{ $root.currency.symbol }}</div>
    </div>
    <div class="image">
      <img :src="`https://csroll.nosorog.team/cdn/items/${skin.id}/medium.webp`" alt="">
    </div>
    <div class="quality">
      <div class="rarity">{{ skin.quality }}</div>
      {{ getSkinName(skin.name) }}
    </div>
    <div class="name">{{ getSkinQuality(skin.name) }}</div>

    <div class="shadow"></div>
  </div>
</template>
<script>
import getSkinName from "../../helpers/getSkinName";
import getSkinQuality from "../../helpers/getSkinQuality";
import typeToColor from "@/helpers/typeToColor";
import {mapGetters} from "vuex";

export default {
  data () {
    return {
      isSelect: false,
    }
  },
  computed: {
    ...mapGetters({
      convertRate: 'config/convertRate'
    })
  },
  methods: {typeToColor, getSkinQuality, getSkinName},
  props: {
    selectable: {
      type: Boolean,
      default: false,
    },
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
  &.selectable {
    cursor: pointer;
  }
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
      position: absolute;
      top: -20px;
      left: 0;
      font-weight: 600;
      font-size: 10px;
      height: 15px;
      line-height: 15px;
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

  .border {
    position: absolute;
    top: 0;
    transition: 0.2s;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid transparent;
  }
  &.selected {
    &.blue {
      .border {
        border-color: rgba(49, 102, 237, 0.5);
      }
    }
    &.purple {
      .border {
        border-color: rgba(121, 49, 237, 0.5);
      }
    }
    &.gray {
      .border {
        border-color: rgba(255, 255, 255, 0.25);
      }
    }
    &.pink {
      .border {
        border-color: rgba(237, 49, 173, 0.5);
      }
    }
    &.red {
      .border {
        border-color: rgba(237, 49, 49, 0.5);
      }
    }
  }
}
</style>