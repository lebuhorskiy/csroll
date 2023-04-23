<template>
  <div class="question" :class="{'active': isOpen}">
    <div class="question-main" @click="isOpen = !isOpen">
      <span>{{ faq.title }}</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d="M6 9L12 15L18 9" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    </div>
    <transition name="slide-fade">
      <div class="question-answer" v-if="isOpen">
        {{ faq.text }}
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    faq: {
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
.question {
  border-radius: 16px;
  overflow: hidden;
  .question-main {
    display: flex;
    border-radius: 16px;
    align-items: center;
    background: rgba(69, 84, 137, 0.1);
    cursor: pointer;
    svg {
      transition: 0.2s;
      path {
        transition: 0.2s;
      }
    }
    &:hover {
      opacity: 0.8;
    }
    transition: 0.2s;
    justify-content: space-between;
    padding: 12px 24px;
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #576CB0;
    }
  }
  .question-answer {
    padding: 16px 24px;
    background: rgba(69, 84, 137, 0.1);
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
  &.active {
    .question-main {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      background: rgba(69, 84, 137, 0.2);
      svg {
        transform: rotate(180deg);
        path {
          stroke: rgba(78, 112, 233, 1)
        }
      }
    }
  }
}
</style>