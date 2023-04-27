<template>
  <div class="ui-lvl">
    <div class="element__text">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style>
.ui-lvl {
  perspective: 100px;
  width: 79px;
  height: 29px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
/*Если наоборот то (40deg) и border-radius: 10px 10px 0 0;  */
.ui-lvl:before {

  border: 2px solid #EAC159;
  backdrop-filter: blur(5px);
  transform: rotateX(40deg);
  transform-origin: 50% 50%;
  border-radius: 8px 8px 8px 8px;
  height: 100%;
  width: 100%;
  position: absolute;
  content: '';
}

.element__text {
  position: relative;
  z-index: 1;
  font-weight: 600;
  margin-top: 3px;
  color: #fff;
  font-size: 14px;
  line-height: 21px;
}
</style>