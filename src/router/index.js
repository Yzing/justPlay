import Vue from 'vue'
import Router from 'vue-router'

const _import = name => () => import( `@/views/${name}/index.vue` )

Vue.use(Router)

export default new Router( {
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/home',
      name: 'Home',
      component: _import( 'Home' )
    },
    {
      path: '/hot',
      name: 'Hot',
      component: _import( 'Hot' )
    },
    {
      path: '/explore',
      name: 'Explore',
      component: _import( 'Explore' )
    },
    {
      path: '/mine',
      name: 'Mine',
      component: _import( 'Mine' )
    }
  ]
} )
