export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Home.vue'),
    redirect: { name: 'Empresas' },
    children: [
      {
        path: '/empresas',
        name: 'Empresas',
        component: () => import('./pages/Empresas/Empresas.vue')
      }
    ]
  },
]