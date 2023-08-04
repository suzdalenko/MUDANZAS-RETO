import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index';

const routes = [{
    path: '/',
    component: Index,
    meta: { title: 'Mudanzas Reto', description: 'Mudanzas y transportes particulares y empresas, recogida de muebles, vaciado de pisos y garajes, servicio limpieza'}
  },{
    path: '/cuidades',
    component: () => import ('../views/Cuidades'),
    meta: { title: '✔️ Mudanzas Reto Cantabria ', description: 'Mudanzas Reto Santander, Mudanzas y transportes particulares y empresas, recogida de muebles'}
  },{
    path: '/:work/:city',
    component: () => import ('../views/WorkPage'),
  },{
    path: '/:workDetail',
    component: () => import ('../views/MenuWorkDetail'), 
  },{ 
    path: '/preguntas/:id',
    component: () => import ('../views/Preguntas'),  
  },{ 
    path: '/404',
    component: () => import ('../views/404'),  
  },{
    path: '/:catchAll(.*)', redirect: '/404' 
  }];

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes});

router.beforeEach((to) => {
  if(to.meta.title) { 
     document.title = to.meta.title;
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', to.meta.description)
  } 
  if (to.params.work && to.params.city){
     let pageTitle = to.params.work.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ') + ' ';
     pageTitle += to.params.city.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
     document.title = pageTitle;
     document.getElementsByTagName('meta').namedItem('description').setAttribute('content', pageTitle)
  }
});

export default router;
