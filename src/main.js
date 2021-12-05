import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import http from 'axios'
import {
  Button,
  Select,
  slider,
  radio,
  container,
  aside,
  header,
  main,
  menu,
  MenuItem,
  menuItemGroup,
  submenu,
  dropdown,
  dropdownMenu,
  dropdownItem,
  row,
  col,
  card,
  table,
  tableColumn,
  breadcrumb,
  breadcrumbItem,
  tag

} from 'element-ui';

Vue.config.productionTip = false

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.use(Button)
Vue.use(Select)
Vue.use(slider)
Vue.use(radio)
Vue.use(container)
Vue.use(aside)
Vue.use(header)
Vue.use(main)
Vue.use(menu)
Vue.use(MenuItem)
Vue.use(menuItemGroup)
Vue.use(submenu)
Vue.use(dropdown)
Vue.use(dropdownMenu)
Vue.use(dropdownItem)
Vue.use(row)
Vue.use(col)
Vue.use(card)
Vue.use(table)
Vue.use(tableColumn)
Vue.use(breadcrumb)
Vue.use(breadcrumbItem)
Vue.use(tag)

Vue.prototype.$http = http


if(process.env.NODE_ENV === 'development') require('@/api/mock')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
