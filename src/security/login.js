import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Password from 'primevue/password'
import axios from 'axios'
import http from '../router/http'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Toast from 'primevue/toast'

export default {
  data () {
    return {
      showLoading: false,
      form: {
        login: '',
        nome: '',
        senha: '',
        token: ''
      }
    }
  },
  components: {
    Button,
    Loading,
    InputText,
    InputMask,
    Password,
    Toast
  },
  methods: {
    async login () {
      this.showLoading = true
      await axios.post(http.url + 'login', this.form).then(res => {
        if (res.data.ret === 'success') {
          sessionStorage.setItem('token', res.data.obj.token)
          sessionStorage.setItem('user', res.data.obj.nome)
          this.$router.push('Empresas')
        } else {
          console.log(res.data.motivo)
          this.$toast.add({ severity: 'error', summary: 'Empresas Plus', detail: res.data.motivo, life: 3000 })
        }
        this.showLoading = false
      }).catch(err => {
        this.showLoading = false
        this.$toast.add({ severity: 'error', summary: 'Empresas Plus', detail: err, life: 3000 })
      })
    }
  }
}
