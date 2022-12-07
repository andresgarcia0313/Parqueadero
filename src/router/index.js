import {
  createRouter,// importa la función createRouter que sirve para crear un router que quiere decir que es un objeto que contiene las rutas de la aplicación
  createWebHistory // importa la función createWebHistory que sirve para crear un historial de navegación basado en el navegador
} from 'vue-router'// importa la función createRouter y createWebHistory de vue-router
import HomeView from '../views/HomeView.vue'// importa el componente HomeView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),// crea un historial de navegación basado en el navegador
  routes: [
    {
      path: '/',// ruta raíz
      name: 'home',// nombre de la ruta
      component: HomeView// componente asociado a la ruta
    },
    {
      path: '/about',
      name: 'about',
      // división de código a nivel de ruta
      // esto genera un fragmento separado (About.[hash].js) para esta ruta
      // que se carga de forma diferida cuando se visita la ruta.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router// exporta el router
