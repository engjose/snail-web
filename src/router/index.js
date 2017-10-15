import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    }
  ]
})
