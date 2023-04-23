<template>
  <div class="more">+ {{ more }}</div>
</template>
<script>
export default {
  props: {
    more: {
      type: Number
    }
  }
}
</script>
<style scoped lang="scss">
.more {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 92px;
  margin-left: 16px;
  min-width: 92px;
  text-align: center;
  height: 77px;
  padding: 12px;
  padding-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(69, 84, 137, 0.1);
  justify-content: center;
  color: #576CB0;
}
</style>