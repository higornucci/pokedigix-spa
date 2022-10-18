import { createRouter, createWebHistory } from 'vue-router';
import PokemonListaView from '../views/PokemonListaView.vue';
import TipoNovoView from '../views/TipoNovoView.vue';
import AtaqueNovoView from '../views/AtaqueNovoView.vue';
import AtaqueListaView from '../views/AtaqueListaView.vue';
import AtaqueEditView from '../views/AtaqueEditView.vue';
import TipoListaView from '../views/TipoListaView.vue';
import TipoEditView from '../views/TipoEditView.vue';
import PokemonNovoView from '../views/PokemonNovoView.vue';
const PageNotFound = () => import('@/views/PageNotFound.vue');
const TreinadorNovoView = () => import('@/views/TreinadorNovoView.vue');
const TreinadorListaView = () => import('@/views/TreinadorListaView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListaView
    },
    {
      path: '/:catchAll(.*)*',
      name: "not-found",
      component: PageNotFound,
    },
    {
      path: '/tipos/novo',
      name: 'tipos-novo',
      component: TipoNovoView
    },
    {
      path: '/tipos/lista',
      name: 'tipos-lista',
      component: TipoListaView
    },
    {
      path: '/tipos/edit/:id',
      name: 'tipos-edit',
      component: TipoEditView
    },
    {
      path: '/ataques/novo',
      name: 'ataques-novo',
      component: AtaqueNovoView
    },
    {
      path: '/ataques/edit/:id',
      name: 'ataques-edit',
      component: AtaqueEditView
    },
    {
      path: '/ataques/lista',
      name: 'ataques-lista',
      component: AtaqueListaView
    },
    {
      path: '/pokemons/lista',
      name: 'pokemons-lista',
      component: PokemonListaView
    },
    {
      path: '/pokemons/novo',
      name: 'pokemons-novo',
      component: PokemonNovoView
    },
    {
      path: '/treinadores/lista',
      name: 'treinadores-lista',
      component: TreinadorListaView
    },
    {
      path: '/treinadores/novo',
      name: 'treinadores-novo',
      component: TreinadorNovoView
    }
  ]
})

export default router
