<template>
  <div class="ui-dropdown">
    <div class="select" :class="{'active': isShowVariants}" @click="isShowVariants = !isShowVariants">
      {{ value }}
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <transition name="fade">
      <div class="variants" v-if="isShowVariants">
        <div class="variants-body">
          <div class="variant" @click="selectVariant('RUB')">
            RUB
          </div>
          <div class="variant" @click="selectVariant('USD')">
            USD
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['value'],
  data () {
    return {
      isShowVariants: false
    }
  },
  methods: {
    selectVariant (value) {
      this.$emit('update', value)
      // $emit to parent
      this.isShowVariants = false
    }
  }
}
</script>
<style scoped lang="scss">
.ui-dropdown {
  position: relative;
  .select {
    width: 100%;
    border-radius: 8px;
    background: rgba(69, 84, 137, 0.3);
    overflow: hidden;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;
    line-height: 21px;
    color: #576CB0;
    transition: 0.2s;
    margin-right: 8px;
    white-space: nowrap;
    padding-right: 15px;

    svg {
      transition: 0.2s;
    }
    &.active {
      svg {
        transform: rotate(180deg)
      }
    }
  }
  &:hover {
    .select {
      opacity: 0.8;
    }
  }
  .variants {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding-top: 4px;
    .variants-body {
      border-radius: 8px;
      .variant {
        width: 100%;
        padding: 9px 12px;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
        transition: 0.2s;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #576CB0;
      }
      background: #2d385d;
    }
  }
}
</style>