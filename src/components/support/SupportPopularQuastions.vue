<template>
  <div class="support-popular-questions">
    <div class="items">
      <div v-for="item in items" :key="item.id" @click="selectItem = item.id" :class="{'active': selectItem === item.id}" class="item">
        <div class="item-content">
          <div class="icon">
            <img :src="item.img" alt="">
          </div>
          <div class="title">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectItem: null,
      items: [
        {
          id: 0,
          name: 'Аккаунт',
          img: require('@/assets/images/q1.png')
        },
        {
          id: 1,
          name: 'Сайт',
          img: require('@/assets/images/q2.png')
        },
        {
          id: 2,
          name: 'Депозит',
          img: require('@/assets/images/q3.png')
        },
        {
          id: 3,
          name: 'Вывод',
          img: require('@/assets/images/q4.png')
        },
        {
          id: 4,
          name: 'Краш',
          img: require('@/assets/images/q5.png')
        },
        {
          id: 5,
          name: 'Джекпот',
          img: require('@/assets/images/q6.png')
        },
        {
          id: 6,
          name: 'Рулетка',
          img: require('@/assets/images/q7.png')
        },
        {
          id: 7,
          name: 'Бонусы',
          img: require('@/assets/images/q8.png')
        },
        {
          id: 8,
          name: 'Сотрудничество',
          img: require('@/assets/images/q9.png')
        },
        {
          id: 9,
          name: 'Рулетка',
          img: require('@/assets/images/q7.png')
        },
        {
          id: 10,
          name: 'Бонусы',
          img: require('@/assets/images/q8.png')
        },
        {
          id: 11,
          name: 'Сотрудничество',
          img: require('@/assets/images/q9.png')
        },
        {
          id: 12,
          name: 'Рулетка',
          img: require('@/assets/images/q7.png')
        },
        {
          id: 13,
          name: 'Бонусы',
          img: require('@/assets/images/q8.png')
        },
        {
          id: 14,
          name: 'Сотрудничество',
          img: require('@/assets/images/q9.png')
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.support-popular-questions {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .items {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 14px;
    grid-row-gap: 16px;
    padding-right: 10px;
    flex-grow: 1;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
      background: rgba(69, 84, 137, 0.1);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(69, 84, 137, 0.5);
      &:hover {
        scrollbar-width: thin;
      }
    }
    .item {
      background: linear-gradient(137.59deg, rgba(69, 84, 137, 0.2) 0%, rgba(69, 84, 137, 0) 67.18%);
      border: 1px solid rgba(69, 84, 137, 0.1);
      height: 132px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .item-content {
        .icon {
          width: 100%;
          height: 57px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-height: 100%;
            max-width: 100%;
          }
        }
        .title {
          margin-top: 17px;
          width: 100%;
          text-align: center;
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
        }
      }
      &:hover {
        opacity: 0.8;
      }
      transition: 0.2s;
      &.active {
        background: linear-gradient(137.59deg, rgba(69, 84, 137, 0.5) 0%, rgba(69, 84, 137, 0) 67.18%);
        border: 1px solid #4E70E9;
      }
    }
  }
}
</style>