import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import tbl from './components/datatable/DataTable.vue'
import search from './components/datatable/DataTableSearch.vue'
import circleavater from './components/CircleAvatar/CircleAvatar.vue'
import VueParticles from 'vue-particles'

import 'primevue/resources/themes/luna-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/scss/app.scss'
import './assets/scss/icons.scss'

const app = createApp(App)

app.use(PrimeVue, 
  {
    ripple: true,
    locale: {
      monthNames: ["Janeiro","Fevereiro","March","April","May","June","July","August","September","October","November","December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    }
  }  
)
app.use(ToastService)
app.use(VueParticles)
app.component('table-ticket', tbl)
app.component('circle-avatar', circleavater)
app.component('datasearch-ticket', search)
app.use(store)
app.use(router)
app.mount('#app')
