<template>
  <div class="rounds-history">
    <div class="round blue">2.2 x</div>
    <div class="round red">2.2 x</div>
    <div class="round pink">2.2 x</div>
    <div class="round biruz">2.2 x</div>
    <div class="round yellow">2.2 x</div>
    <div class="round blue">2.2 x</div>
    <div class="round red">2.2 x</div>
    <div class="round pink">2.2 x</div>
    <div class="round biruz">2.2 x</div>
    <div class="round yellow">2.2 x</div>
    <div class="round blue">2.2 x</div>
    <div class="round red">2.2 x</div>
    <div class="round pink">2.2 x</div>
    <div class="round biruz">2.2 x</div>
    <div class="round yellow">2.2 x</div>
    <div class="round blue">2.2 x</div>
    <div class="round red">2.2 x</div>
    <div class="round pink">2.2 x</div>
    <div class="round biruz">2.2 x</div>
    <div class="round yellow">2.2 x</div>
  </div>
</template>
<style scoped lang="scss">
.rounds-history {
  display: flex;
  border-radius: 16px;
  background: rgba(69, 84, 137, 0.1);
  max-width: 100%;
  overflow: hidden;
  position: relative;
  padding: 10.5px 16px;
   &::after {
     content: "";
     display: block;
     height: 100%;
     width: 55px;
     z-index: 2;
     transform: rotate(90deg);
     background: linear-gradient(180deg, rgba(32, 40, 69, 1) 33.54%, rgba(217, 217, 217, 0) 109.79%);
     position: absolute;
     right: 0;
     top: 0;

   }
  .round {
    padding: 5.5px 14px;
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
    line-height: 21px;
    border-radius: 8px;
    &.blue {
      border: 1px solid #4E70E9;
    }
    &.red {
      border: 1px solid #FF705C;
    }
    &.pink {
      border: 1px solid #A759F5;
    }
    &.biruz {
      border: 1px solid #4ED7E0;
    }
    &.yellow {
      border: 1px solid #EAC159;
    }
  }
  .round + .round {
    margin-left: 9px;
  }
}
</style>