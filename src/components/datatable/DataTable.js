import http from '../../router/http'
import axios from 'axios'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'

export default {
  name: 'table-ticket',
  data () {
    return {
      loading: false,
      showDeleted: false,
      obj: [],
      itens: [],
      pagina: 1,
      search: '',
      selectedFilter: '',
      iddelete: 0,
      combobox: [
        {
          name: '',
          code: ''
        }
      ],
      columns: ['ID','Descricao'],
      selecionado: []
    }
  },
  props: {
    add: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    },
    del: {
      type: Boolean,
      default: false
    },
    detalhe: {
      type: Boolean,
      default: false
    },
    campanha: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    objectRoute: {
      type: Object
    },
    classname: {
      type: String
    },
    onGetById: Function
  },
  components: {
    DataTable,
    Paginator,
    Column,
    Button,
    Dialog,
    InputText
  },
  methods: {
    onSelect (items) {
      this.itens = items
    },
    async getAll (objectRoute) {
      this.loading = true
      sessionStorage.setItem('objRouteTable', JSON.stringify(objectRoute))
      await axios.post(http.url + 'dynamic', objectRoute, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') } }).then(res => {
        if (res.data.ret === 'success') {
          this.columns = Object.keys(res.data.obj[0])
          this.obj = res.data.obj
        } else {
          this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: res.data.motivo, life: 3000 })
        }
        this.loading = false
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
        this.loading = false
      })
    },
    onPage (pagina) {
     var objR = JSON.parse(sessionStorage.getItem('objRouteTable'))
      if (pagina == 0) {
        this.pagina = 1
      }
      else{
        this.pagina = pagina
      }
      objR.pagging = this.pagina
      this.getAll(objR)
    },
    onSearch (key) {
      var objectRoute = JSON.parse(sessionStorage.getItem('objRouteTable'))
      var fi = ' AND '
      this.columns.forEach(a => {
        fi += '  CAST(' + a + ' as varchar) ilike \'%' + key + '%\' OR'
      })
      fi = fi.substring(0,fi.length - 2)
      objectRoute.filters = fi
      console.log(objectRoute)
      this.getAll(objectRoute)
    },
    onEditing () {
      if (this.selecionado.length < 1) {
        this.$toast.add({ severity: 'info', summary: 'Tickets ', detail: 'Nenhum Registro Selecionado', life: 3000 })
      } else {
        return this.selecionado[0].id
      }
    },
    onRefresh () {
      this.getAll(JSON.parse(sessionStorage.getItem('objRouteTable')))
    },
    onDeleted () {
      this.iddelete = this.selecionado[0].id
      this.showDeleted = true
    },
    onSelected () {
      this.$emit('update', this.selecionado)
    },
    onConfirmationDeleted () {
      this.showDeleted = false
      axios.delete(http.url + 'explorerdeleted?id=' + parseInt(this.iddelete) + '&campo=' + this.classname).then(res => {
        if (res.data.ret === 'success') {
          this.$toast.add({ severity: 'success', summary: 'Tickets ', detail: 'Excluido com sucesso!!!', life: 3000 })
          this.getAll(JSON.parse(sessionStorage.getItem('objRouteTable')))
        }
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Estufa+', detail: err, life: 3000 })
      })
    }
  }
}
