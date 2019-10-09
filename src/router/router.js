import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Resultados from '../views/Resultados.vue'
import inicioSesion from '../views/InicioSesion.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resultados',
      name: 'resultados',
      component: Resultados
    },
    {
      path: '/inicioSesion',
      name: 'inicioSesion',
      component: inicioSesion
    }
  ]
})
