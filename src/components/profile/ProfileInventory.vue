<template>
  <div class="profile-inventory">
    <div class="items">
      <ProfileInventoryItem v-for="skin in skins" :key="skin.id" :skin="skin" />
    </div>
  </div>
</template>
<script>
import ProfileInventoryItem from "@/components/profile/ProfileInventoryItem.vue";
export default {
  data () {
    return {
      skins: [
        {
          status: 'process',
          id: 0,
          color: 'yellow'
        },
        {
          status: 'withdraw',
          id: 1,
          color: 'red'
        },
        {
          status: 'sell',
          id: 2,
          color: 'pink'
        },
        {
          status: 'sell',
          id: 3,
          color: 'purple'
        },
        {
          status: 'withdraw',
          id: 4,
          color: 'blue'
        },
        {
          status: 'process',
          id: 5,
          color: 'gray'
        },
        {
          status: 'process',
          id: 6,
          color: 'yellow'
        },
        {
          status: 'process',
          id: 7,
          color: 'red'
        },
        {
          status: 'process',
          id: 8,
          color: 'pink'
        },
        {
          status: 'process',
          id: 9,
          color: 'purple'
        },
        {
          status: 'process',
          id: 10,
          color: 'blue'
        },
        {
          status: 'process',
          id: 11,
          color: 'gray'
        },
        {
          status: 'process',
          id: 12,
          color: 'yellow'
        },
        {
          status: 'process',
          id: 13,
          color: 'red'
        },
        {
          status: 'process',
          id: 14,
          color: 'pink'
        },
        {
          status: 'process',
          id: 15,
          color: 'purple'
        },
        {
          status: 'process',
          id: 16,
          color: 'blue'
        },
        {
          status: 'process',
          id: 17,
          color: 'gray'
        }
      ]
    }
  },
  components: {
    ProfileInventoryItem
  }
}
</script>
<style scoped lang="scss">
  .profile-inventory {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
    .items {
      display: grid;
      overflow-y: auto;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 16px;
      padding-right: 10px;
      &::-webkit-scrollbar {
        width: 8px;
        background: rgba(69, 84, 137, 0.05);
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(69, 84, 137, 0.25);
        border-radius: 5px;
      }
    }
  }
</style>