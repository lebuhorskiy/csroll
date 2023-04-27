<template>
  <div class="support-view">
    <HeaderTop />
    <SupportHeader />
    <div class="support-nav">
      <div class="support-nav_head">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.40992 13.3334H4.66659C4.31296 13.3334 3.97382 13.1929 3.72378 12.9428C3.47373 12.6928 3.33325 12.3536 3.33325 12V4.00002C3.33325 3.6464 3.47373 3.30726 3.72378 3.05721C3.97382 2.80716 4.31296 2.66669 4.66659 2.66669H9.99992C10.3535 2.66669 10.6927 2.80716 10.9427 3.05721C11.1928 3.30726 11.3333 3.6464 11.3333 4.00002V9.33335M9.33325 12.6667L10.6666 14L13.3333 11.3334M5.99992 5.33335H8.66659M5.99992 8.00002H7.33325" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Ответы на часто задаваемые вопросы
      </div>
    </div>
    <div class="support-content">
      <div class="support-panel">
        <div class="support-panel_tabs">
          <div class="support-panel_tab" :class="{'active': tab === 'popular'}" @click="tab = 'popular'">Частые вопросы</div>
          <div class="support-panel_tab" :class="{'active': tab === 'tickets'}" @click="tab = 'tickets'">Мои обращения</div>
        </div>

        <div class="support-tab-content">
          <SupportMyTicketsBlock v-if="tab === 'tickets'" />
          <SupportPopularQuastions v-if="tab === 'popular'" />
        </div>

        <SupportLinks />
      </div>
      <div class="support-questions">
        <div class="support-question_items">
          <div class="support-question_item" :class="{'active': opens.includes(faq.id)}" v-for="faq in faqs" :key="faq.id">
            <div class="support-question_item-main" @click="toggleOpen(faq.id)">
              {{ faq.title }}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#576CB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="support-question_item-body" v-if="opens.includes(faq.id)">
              <p v-html="faq.text"></p>

              <button @click="setTicketModal(true)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 13.3187H3.554C3.11 13.3187 2.79 12.8934 2.91333 12.4674L3.41933 10.7194L3.41666 10.7207V10.7207C1.73266 7.89136 2.97266 4.13336 6.24733 2.95936C8.24066 2.24469 10.5367 2.82736 11.9467 4.40603C14.262 6.99869 13.558 10.8914 10.726 12.5747C9.886 13.074 8.94266 13.324 7.99933 13.324" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Мне нужна помощь специалиста
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import HeaderTop from "@/components/main/HeaderTop.vue";
import SupportHeader from "@/components/support/SupportHeader.vue";
import SupportMyTicketsBlock from "@/components/support/SupportMyTicketsBlock.vue";
import SupportLinks from "@/components/support/SupportLinks.vue";
import SupportPopularQuastions from "@/components/support/SupportPopularQuastions.vue";
import {mapMutations} from "vuex";
export default {
  data () {
    return {
      opens: [],
      faqs: [
        {
          id: 0,
          title: 'Меня постоянно выкидывает из аккаунта',
          text: 'Возможные причины:\n' +
              '                <br><br>\n' +
              '                У Вас постоянно меняется IP-адрес<br>\n' +
              '                Вы включили VPN<br>\n' +
              '                У Вас включен спуфинг (постоянная смена) User-Agent\'a браузера<br>\n' +
              '                Вы авторизовались с другого устройства<br>\n' +
              '                <br>\n' +
              '                Варианты решения:<br>\n' +
              '                <br>\n' +
              '                Выключить сторонние расширения в браузере<br>\n' +
              '                Выключить Opera VPN (если пользуетесь браузером Opera)<br>\n' +
              '                <br>\n' +
              '                Авторизация с двух устройств одновременно — запрещена. Мы ценим Вашу безопасность.'
        },
        {
          id: 1,
          title: 'Второй вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 2,
          title: 'Третий вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 3,
          title: 'Четвертый вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 4,
          title: 'Пятый вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        },
        {
          id: 5,
          title: 'Шестой вопрос',
          text: 'Бонусы юзер получает на название сайта в никнейме аккаунта Steam или ввод промокода в поле\n' +
              'выше. Коды выдаются напрямую админами в чате или социальной сети. Тут можно еще что-то\n' +
              'написать, по сути 3 строки - вполне норм. Так что можно не злоупотреблять словами'
        }
      ],
      tab: 'tickets'
    }
  },
  methods: {
    ...mapMutations({
      setTicketModal: 'config/setTicketModal'
    }),
    toggleOpen (id) {
      if (this.opens.includes(id)) {
        const index = this.opens.findIndex(item => item === id)
        if (index > -1) {
          this.opens.splice(index, 1)
        }
      } else {
        this.opens.push(id)
      }
    }
  },
  components: {
    SupportPopularQuastions,
    HeaderTop,
    SupportHeader,
    SupportLinks,
    SupportMyTicketsBlock
  }
}
</script>
<style scoped lang="scss">
.support-view {
  height: 100vh;
  display: flex;
  @media (min-width: 1200px) {
    min-height: 900px;
  }
  flex-direction: column;
  overflow: hidden;
  padding: 15px 12px;
  @media (max-width: 1024px) {
    height: auto;
  }
  .support-nav {
    display: flex;
    margin-top: 35px;
    margin-bottom: 24px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1024px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
    }
    .support-nav_head {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #576CB0;
      svg {
        margin-right: 8px;
      }
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
    .support-nav_links {
      display: flex;
      align-items: center;
      padding-right: 10px;
      a {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #576CB0;
        transition: 0.2s;
        &:hover {
          color: #fff;
        }
      }
      a + a {
        margin-left: 32px;
      }
    }

  }
  .support-content {
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    @media (max-width: 1024px) {
      flex-wrap: wrap;
    }
    .support-panel {
      width: 472px;
      min-width: 472px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin-right: 12px;
      padding: 24px;
      background: rgba(69, 84, 137, 0.1);
      border-radius: 16px;
      @media (max-width: 1024px) {
        width: 100%;
        min-width: 100%;
        margin-bottom: 16px;
        margin-right: 0;
        padding: 16px;
      }
      .support-panel_tabs {
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        .support-panel_tab {
          background: rgba(69, 84, 137, 0.2);
          flex: 1;
          padding: 18px 0;
          font-weight: 600;
          transition: 0.2s;
          cursor: pointer;
          font-size: 16px;
          line-height: 24px;
          text-align: center;
          color: #576CB0;
          &.active,  {
            background: rgba(69, 84, 137, 0.1);
            color: #fff;
          }
          &:hover:not(.active) {
            opacity: 0.8;
          }
          @media (max-width: 600px) {
            padding: 18px 0;
            font-size: 13px;
          }
        }
        .support-panel_tab + .support-panel_tab {
          border-left: 1px solid rgba(69, 84, 137, 0.4)
        }
      }

      .support-tab-content {
        overflow: hidden;
        flex-grow: 1;
        flex-shrink: 100;
        margin: 16px 0;
        display: flex;
        flex-direction: column;
      }
    }
    .support-questions {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex-grow: 1;
      .support-question_items {
        overflow-y: auto;
        padding-right: 10px;
        @media (max-width: 1024px) {
          padding-right: 0;
        }
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
        .support-question_item {
          border-radius: 16px;
          overflow: hidden;
          background: rgba(69, 84, 137, 0.1);
          .support-question_item-main {
            display: flex;
            cursor: pointer;
            justify-content: space-between;
            align-items: center;
            padding: 19px 24px;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            background: rgba(69, 84, 137, 0.1);
            color: #576CB0;
            border-radius: 16px;
            transition: 0.2s;
            svg {
              transition: 0.2s;
            }
          }
          &:not(.active) {
            .support-question_item-main {
              &:hover {
                opacity: 0.8;
              }
            }
          }
          .support-question_item-body {
            padding: 20px 24px;
            p {
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              margin: 0;
              padding: 0;
            }
            button {
              padding: 17px 32px;
              font-weight: 600;
              font-size: 14px;
              line-height: 100%;
              cursor: pointer;
              display: flex;
              align-items: center;
              svg {
                margin-right: 8px;
              }
              background: #4E70E9;
              border-radius: 8px;
              margin-top: 16px;
              transition: 0.2s;
              &:hover {
                opacity: 0.8;
              }
            }
          }
          &.active {
            .support-question_item-main {
              background: rgba(69, 84, 137, 0.2);
              color: #fff;
              svg {
                transform: rotate(180deg);
              }
            }
          }
        }
        .support-question_item + .support-question_item {
          margin-top: 12px;
        }
      }
    }

  }
}
</style>