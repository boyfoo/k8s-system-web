import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },


  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/workloads',
    component: Layout,
    redirect: '/workloads/deployments',
    name: 'workloads',
    meta: { title: '工作负载', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'deployments',
        name: 'Deployments',
        component: () => import('@/views/workloads/deplist'),
        meta: { title: 'deployments列表', icon: 'table' }
      },
      {
        path: 'pods',
        name: 'Pods',
        component: () => import('@/views/workloads/podslist'),
        meta: { title: 'Pods列表', icon: 'tree' }
      },
      {
        path: 'podlogs',
        name: 'Podlogs',
        component: () => import('@/views/workloads/podlogs'),
        meta: { title: '查看logs', icon: 'tree' }
      },
      {
        path: 'podshell',
        name: 'Podshell',
        component: () => import('@/views/workloads/podshell'),
        meta: { title: 'podshell(临时)', icon: 'tree' },
        hidden:true
      },
      {
        path: 'serivces',
        name: 'Serivces',
        component: () => import('@/views/workloads/svclist'),
        meta: { title: 'Service列表', icon: 'tree' }
      }
    ]
  },

  {
    path: '/nodes',
    component: Layout,
    redirect: '/nodes/nodeshell',
    name: 'nodes',
    meta: { title: '节点管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'nodeshell',
        name: 'Nodeshell',
        component: () => import('@/views/nodes/nodeshell'),
        meta: { title: 'nodeshell(临时)', icon: 'table' },
        hidden:true
      },
      {
        path: 'nodelist',
        name: 'Nodelist',
        component: () => import('@/views/nodes/nodelist'),
        meta: { title: '节点列表', icon: 'tree' }
      },
      {
        path: 'nodedetail',
        name: 'Nodedetail',
        component: () => import('@/views/nodes/nodedetail'),
        meta: { title: '节点编辑', icon: 'tree' },
        hidden: true
      },
    ]
  },
  {
    path: '/ingress',
    component: Layout,
    redirect: '/ingress/ingress-list',
    name: 'ingress',
    meta: { title: 'Ingress管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'ingress-list',
        name: 'Ingress-list',
        component: () => import('@/views/ingress/ingress-list'),
        meta: { title: 'Ingress列表', icon: 'table' }
      },
      {
        path: 'createingress',
        name: 'Createingress',
        component: () => import('@/views/ingress/ingress-create'),
        meta: { title: '创建ingress', icon: 'tree' }
      },

    ]
  },

  {
    path: '/resources',
    component: Layout,
    redirect: '/resources/secrets',
    name: 'resources',
    meta: { title: '资源管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'secrets',
        name: 'Secrets',
        component: () => import('@/views/resources/secretlist'),
        meta: { title: '密文列表', icon: 'table' }
      },
      {
        path: 'createsecret',
        name: 'Createsecret',
        component: () => import('@/views/resources/secret-create'),
        meta: { title: '创建密文', icon: 'table' }
      },
      {
        path: 'secretsget',
        name: 'Secretsget',
        component: () => import('@/views/resources/secret-get'),
        meta: { title: '查看密文', icon: 'table' },
        hidden:true
      },
      {
        path: 'configmaps',
        name: 'Configmaps',
        component: () => import('@/views/resources/configmaplist'),
        meta: { title: '配置列表', icon: 'tree' }
      },
      {
        path: 'createconfigmaps',
        name: 'CreateConfigmaps',
        component: () => import('@/views/resources/configmap-create'),
        meta: { title: '创建配置', icon: 'tree' }
      },
      {
        path: 'testres',
        name: 'testres',
        component: () => import('@/views/resources/test'),
        meta: { title: '测试', icon: 'tree' }
      },



    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },



  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
