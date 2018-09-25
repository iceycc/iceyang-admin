// 菜单 侧边栏
export default [
  { path: '/index', title: '仪表盘', icon: 'home' },
  {
    title: '文章',
    icon: 'folder-o',
    children: [
      { path: '/post/post-list', title: '所有文章' },
      { path: '/post/post-add', title: '写文章' },
      { path: '/post/post-add-md', title: '写文章-md' },
      { path: '/post/post-categories', title: '分类目录' }
    ]
  },
  {
    title: '评论',
    icon: 'folder-o',
    path: '/comment'
  },
  {
    title: '用户',
    icon: 'folder-o',
    path: '/users'

  },
  {
    title: '设置',
    icon: 'folder-o',
    path: '/setting'

  }
]
