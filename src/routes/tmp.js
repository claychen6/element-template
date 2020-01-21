const form = () => import( /* webpackChunkName: "tmp-form" */ '../views/template/form.vue')
const table = () => import( /* webpackChunkName: "tmp-table" */ '../views/template/table.vue')
const dialog = () => import( /* webpackChunkName: "tmp-dialog" */ '../views/template/dialog.vue')

export default [
  // 模板
  {
    name: 'tmp-form',
    path: '/tmp/form',
    component: form
  },
  {
    name: 'tmp-table',
    path: '/tmp/table',
    component: table
  },
  {
    name: 'tmp-dialog',
    path: '/tmp/dialog',
    component: dialog
  }
]
