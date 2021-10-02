import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import http from '../../../router/http'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Calendar from 'primevue/calendar'
import MonacoEditor from 'monaco-editor-vue3'
import { VAceEditor } from 'vue3-ace-editor'
export default {
  data () {
    return {
      isLoading: false,
      showModal: false,
      showFilter: false,
      dynamic: {
        route: 'mnu_empresas',
        pagging: 1,
        filters: '',
        orders: ' cnaeprincipal asc'
      },
      code: 'Olá',
      imagem: '',
      urlimage: http.urlimages,
      urlupload: http.urlUpload,
      form: {
        cnae: '',
        cidade: ''
      },
      tunai: []
    }
  },
  components: {
    Dialog,
    InputText,
    Button,
    Loading,
    Calendar,
    MonacoEditor,
    VAceEditor
  },
  mounted () {
    this.onGetDynamic()
  },
  methods: {
    onGetById (id) {
      this.isLoading = true
      axios.get(http.url + 'usuario?id=' + id).then(res => {
        if (res.data.ret === 'success') {
          this.form = res.data.obj
        } else {
          this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: res.data.motivo, life: 3000 })
        }
        this.showModal = true
        this.isLoading = false
      }).catch(err => {
        this.isLoading = false
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
      })
    },
    onSave (form) {
      axios.post(http.url + 'usuario', form).then(res => {
        if (res.data.ret === 'success') {
          this.$toast.add({ severity: 'success', summary: 'Estufa+', detail: 'Salvo com sucesso!!!', life: 3000 })
        } else {
          this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: res.data.motivo, life: 3000 })
        }
        this.showModal = false
        this.onGetDynamic()
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
      })
    },
    onValidate () {
      if (this.form.descricao === '') {
        this.$toast.add({ severity: 'warn', summary: 'Estufa+', detail: 'Descricao não pode ficar em branco', life: 3000 })
      } else {
        this.onSave(this.form)
      }
    },
    onGetDynamic () {
      this.$refs.datagrid.getAll(this.dynamic)
    },
    onDataSearch () {
      var dynamic = {
        route: 'exp_municipios',
        pagging: 1,
        filters: '',
        orders: ' id asc'
      }
      this.$refs.datasearch.getAll(dynamic, 0, 0)
    },
    onDestroy (obj, route) {
      if (parseInt(route) === 0) {
        this.form.cidade = obj.nome
      }
    },
    onDetalhes(){
      this.isLoading = true;
      var cnpj = this.tunai[0].cnpjbasico.replace('/','').replace('-','') 
      axios.get(http.url +'cnpj/' +cnpj).then(res =>{
        this.showModal = true
        this.code = JSON.stringify(res.data,null,4)
        console.log(this.code)
        this.isLoading = false;
      }).catch(err =>{
        console.log(err)
        this.isLoading = false;
      })
    },
    onUpdate(e){
      this.tunai = e
    },
    onFiltrar(){
      var filtro = '  '
      if(this.form.cnae != ''){
        filtro += ' AND cnaeprincipal ilike \'' + this.form.cnae + '\' '
      }
      if(this.form.cidade != ''){
        filtro += ' AND cidade ilike \'' + this.form.cidade + '\' '
      }
      this.dynamic.filters = filtro
      this.onGetDynamic()
      this.showFilter = false
    }
  }
}
