<template>
  <div class="ui-checkbox">
    <input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" :id="id">
    <label :for="id">
      <span class="base">
        <span class="indicator"></span>
      </span>
      <span class="name" v-if="name">{{ name }}</span>
    </label>
  </div>
</template>
<script>
export default {
  props: ['value', 'name'],
  data () {
    return {
      id: (Math.random() + 1).toString(36).substring(7)
    }
  },

}
</script>
<style scoped lang="scss">
.ui-checkbox {
  input {
    display: none;
  }
  label {
    display: flex;
    cursor: pointer;
    align-items: center;
    .name {
      margin-left: 12px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
    .base {
      cursor: pointer;
      width: 42px;
      height: 25px;
      border: 1px solid #455489;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 4px;
      transition: 0.2s;
      .indicator {
        width: 17px;
        height: 17px;
        border-radius: 100%;
        background: #455489;
        transition: 0.2s;
      }
    }
  }
  input:checked + label {
    border-color: #4E70E9;
    .indicator {
      background: #4E70E9;
      transform: translateX(15px)
    }
  }
}
</style>