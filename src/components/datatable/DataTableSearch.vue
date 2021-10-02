<template>
  <div>
    <loading class="loading" :active="isLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <Dialog header="Busca Itens"  v-model:visible="showDataSearch" :style="{width: '50vw'}" :modal="true">
      <div class="p-fluid row">
        <div class="p-field col-sm-12">
          <label>Descricao</label>
          <InputText @keyup.stop="onSearch(search)" v-model="search" type="text" />
        </div>
        <div class="p-field col-sm-12">
          <DataTable @row-select="onSelected" :loading="loading" :selection="selecionado" selectionMode="single" scrollHeight="40vh" :scrollable="true" class="p-datatable-sm" :value="obj">
            <Column  v-for="col of columns" :field="col" :header="col" :key="col"></Column>
          </DataTable>
          <div class="pagginator">
            <Paginator :rows="20" @page="onPage($event)" :totalRecords="total">
              <template #right="slotProps">
                Pagina: {{slotProps.state.page + 1}}
                Registros: {{slotProps.state.first}}
                Registros por Pagina: {{slotProps.state.rows}}
              </template>
            </Paginator>
          </div>
        </div>
      </div>
      <template #footer>
        <Button label="Cancelar" class="p-button-outlined" @click="showDataSearch=false"/>
      </template>
    </Dialog>
  </div>
</template>

<script>
import http from '../../router/http'
import axios from 'axios'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Paginator from 'primevue/paginator'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'datasearch-ticket',
  data () {
    return {
      isLoading: false,
      showDataSearch: false,
      obj: [],
      itens: [],
      selecionado: [],
      total: 0,
      search: '',
      selectedFilter: '',
      iddelete: 0,
      route: '',
      objectRoute: '',
      columns: []
    }
  },
  props: {
    title: {
      type: String
    },
    onDestroy: Function
  },
  components: {
    DataTable,
    Paginator,
    Column,
    Button,
    Dialog,
    InputText,
    Loading
  },
  methods: {
    async getAll (objectRoute, route, tp) {
      this.isLoading = true
      sessionStorage.setItem('objDataSearchRoute', JSON.stringify(objectRoute))
      sessionStorage.setItem('route', route)
      await axios.post(http.url + 'dynamic', objectRoute, { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') } }).then(res => {
        if (res.data.ret === 'success') {
          this.columns = Object.keys(res.data.obj[0])
          console.log(this.columns)
          this.obj = res.data.obj
          this.route = sessionStorage.getItem('route')
        } else {
          this.$toast.add({ severity: 'error', summary: 'Empresas', detail: res.data.motivo, life: 3000 })
        }
        if (tp === 0) {
          this.showDataSearch = true
        }
        this.isLoading = false
      }).catch(err => {
        this.isLoading = false
        this.$toast.add({ severity: 'error', summary: 'Empresas', detail: err, life: 3000 })
      })
    },
    onPage (event) {
      this.objectRoute = JSON.parse(sessionStorage.getItem('objDataSearchRoute'))
      this.objectRoute.pagging = event.page + 1
      this.getAll(this.objectRoute, this.route, 1)
    },
    onSearch (key) {
      this.objectRoute = JSON.parse(sessionStorage.getItem('objDataSearchRoute'))
      var fi = ' AND '
       console.log(this.columns)
      this.columns.forEach(a => {
        fi += '  CAST(' + a + ' as varchar) ilike \'%' + key + '%\' OR'
      })
      fi = fi.substring(0,fi.length - 2)
      this.objectRoute.filters = fi
      this.getAll(this.objectRoute, this.route, 1)
    },
    onSelected (item) {
      this.onDestroy(item.data, this.route, 1)
      this.showDataSearch = false
    }
  }
}
</script>

<style lang="scss" scoped>
.pagginator{
  height: 35px;
}
</style>
