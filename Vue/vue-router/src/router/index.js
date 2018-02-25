import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
// import UserHome from '@/components/UserHome'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/user/:id',
    component: User,
    name: 'user',
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      // { path: '', component: UserHome },

      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      { path: 'profile', component: UserProfile },

      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      { path: 'posts', component: UserPosts }
    ]
  }]
})
