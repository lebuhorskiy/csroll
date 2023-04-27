import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JackpotView from "@/views/JackpotView.vue";
import WheelView from "@/views/WheelView.vue";
import CrashHistories from "@/views/crash/CrashHistories.vue";
import CrashHistory from "@/views/crash/CrashHistory.vue";
import JackpotHistories from "@/views/jackpot/JackpotHistories.vue";
import JackpotHistory from "@/views/jackpot/JackpotHistory.vue";
import WheelHistories from "@/views/wheel/WheelHistories.vue";
import WheelHistory from "@/views/wheel/WheelHistory.vue";
import ReferralView from "@/views/ReferralView.vue";
import TopReferrals from "@/views/TopReferrals.vue";
import TopPlayers from "@/views/TopPlayers.vue";
import ProfileView from "@/views/ProfileView.vue";
import SupportView from "@/views/support/SupportView.vue";
import SupportTickets from "@/views/support/SupportTickets.vue";
import SupportTicket from "@/views/support/SupportTicket.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import TermsAndConditions from "@/views/TermsAndConditions.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jackpot',
    name: 'jackpot',
    component: JackpotView
  },
  {
    path: '/wheel',
    name: 'wheel',
    component: WheelView
  },

  {
    path: '/crash/histories',
    name: 'crash.histories',
    component: CrashHistories
  },
  {
    path: '/crash/histories/:id',
    name: 'crash.histories.details',
    component: CrashHistory
  },

  {
    path: '/jackpot/histories',
    name: 'jackpot.histories',
    component: JackpotHistories
  },
  {
    path: '/jackpot/histories/:id',
    name: 'jackpot.histories.details',
    component: JackpotHistory
  },

  {
    path: '/wheel/histories',
    name: 'wheel.histories',
    component: WheelHistories
  },

  {
    path: '/wheel/histories/:id',
    name: 'wheel.histories.details',
    component: WheelHistory
  },

  {
    path: '/referral',
    name: 'referral',
    component: ReferralView
  },
  {
    path: '/top-referrals',
    name: 'top-referrals',
    component: TopReferrals
  },
  {
    path: '/top-players',
    name: 'top-players',
    component: TopPlayers
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/support',
    name: 'support',
    component: SupportView
  },
  {
    path: '/support/tickets',
    name: 'support.tickets',
    component: SupportTickets
  },
  {
    path: '/support/tickets/:1',
    name: 'support.tickets.details',
    component: SupportTicket
  },

  {
    path: '/support/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/support/terms-and-conditions',
    name: 'terms-and-conditions',
    component: TermsAndConditions
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
