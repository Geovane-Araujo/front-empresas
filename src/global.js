import { createApp } from 'vue'
import sidebar from './components/SideBar/SideBar.vue'

const app = createApp({})
app.component('sidebar-menu', sidebar)

export default app
