<template>
  <div class="rounds-history">
    <router-link to="/crash/histories/1" class="round blue">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round red">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round pink">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round biruz">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round yellow">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round blue">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round red">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round pink">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round biruz">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round yellow">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round blue">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round red">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round pink">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round biruz">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round yellow">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round blue">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round red">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round pink">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round biruz">2.2 x</router-link>
    <router-link to="/crash/histories/1" class="round yellow">2.2 x</router-link>
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
  @media (max-width: 1024px) {
    background: transparent;
    padding-left: 0;
  }
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
      @media (max-width: 1024px) {
        right: -1px;
        background: linear-gradient(180deg, rgb(30 37 62) 33.54%, rgba(217, 217, 217, 0) 109.79%)
      }
   }
  .round {
    padding: 5.5px 14px;
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
    line-height: 21px;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 8px;
    &.blue {
      border: 1px solid #4E70E9;
      &:hover {
        background: rgba(78, 112, 233, 0.3);
      }
    }
    &.red {
      border: 1px solid #FF705C;
      &:hover {
        background: rgba(255, 92, 48, 0.3);
      }
    }
    &.pink {
      border: 1px solid #A759F5;
      &:hover {
        background: rgba(164, 48, 255, 0.3);
      }
    }
    &.biruz {
      border: 1px solid #4ABA62;
      &:hover {
        background: rgba(74, 186, 98, 0.3);
      }
    }
    &.yellow {
      border: 1px solid #EAC159;
      &:hover {
        background: rgba(234, 193, 89, 0.3);
      }
    }
  }
  .round + .round {
    margin-left: 9px;
  }
}
</style>