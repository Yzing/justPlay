import Vue from 'vue'
import Router from 'vue-router'

const _import = name => () => import( `@/views/${name}/index.vue` )

Vue.use(Router)

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import( 'Home' )
    }
  ]
} )
