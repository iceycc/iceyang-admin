// layout
import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      },
      {
        path: 'post/post-list',
        name: 'post-list',
        meta: { meta, title: '文章列表' },
        component: () => import('@/pages/post')
      },
      {
        path: 'post/post-add',
        name: 'post-add',
        meta: { meta, title: '写文章' },
        component: () => import('@/pages/post/post-add.vue')
      },
      {
        path: 'post/post-add-md',
        name: 'post-add-md',
        meta: { meta, title: '写文章-md' },
        component: () => import('@/pages/post/post-add-md.vue')
      },
      {
        path: 'post/post-categories',
        name: 'post-categories',
        meta: { meta, title: '写文章' },
        component: () => import('@/pages/post/post-categories.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/pages/comment'),
        meta: { meta, title: '评论' }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/pages/setting'),
        meta: { meta, title: '设置 ' }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/pages/users'),
        meta: { meta, title: '用户' }
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 页面重定向使用 必须保留
  {
    path: '/redirect/:path*',
    component: () => import('@/pages/redirect')
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
