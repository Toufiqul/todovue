import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.the import function only executes when the route is visited. This is achieved by wrapping the import statement with the import() function and providing a comment /* webpackChunkName: "about" */. This comment tells the Webpack bundler to create a separate chunk file for the About.vue component, which will be loaded only when needed.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
    document.title=`${process.env.VUE_APP_TITLE} ${to.name}`
    next()
})

export default router
