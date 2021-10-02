<template>
  <div class="table">
    <div>
      <div class="btns" style="margin-bottom: 10px;">
        <Button v-show="add" class="p-button-outlined p-button-info" style="margin-right: 5px;" label="Adicionar" @click="onGetById(-100)"/>
        <Button v-show="edit" class="p-button-outlined p-button-warning" style="margin-right: 5px;" label="Editar" @click="onGetById(onEditing())"/>
        <Button v-show="del" class="p-button-outlined p-button-danger" style="margin-right: 5px;" label="Excluir" @click="onDeleted"/>
      </div>
      <DataTable :loading="loading" @row-select="onSelected" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll" v-model:selection="selecionado" selectionMode="multiple" scrollHeight="68vh" :scrollable="true" class="p-datatable-sm" :value="obj">
        <Column  :headerStyle="'width: 20vw'" :bodyStyle="'width: 20vw'" v-for="col of columns" :field="col" :header="col" :key="col"></Column>
      </DataTable>
      <div class="p-field lolipop">
          <Button @click="onRefresh" type="button" icon="pi pi-refresh" style="margin-right: 10px"/>
          <InputText @keyup.stop="onSearch(search)" type="text" v-model="search" style="width: 180px"/>
          <Button @click="onPage(pagina - 1)" type="button" icon="pi pi-angle-left" style="margin-left: 10px"/>
          <InputText v-bind:disabled="true" @keyup.stop="onSearch(search)" type="text" v-model="pagina" style="margin-left: 5px; width: 30px"/>
          <Button @click="onPage(pagina + 1)" type="button" icon="pi pi-angle-right" style="margin-left: 5px;margin-right: 10px;"/>
          {{ selecionado.length }}:  Selecionados
      </div>
    </div>
    <div v-show="false" class="pagging">
      <Paginator :rows="20" @page="onPage($event)" :totalRecords="total">
      <template #right="slotProps">
        Mostrando: {{slotProps.state.page + 1}}
        para: {{slotProps.state.first}}
        de: {{slotProps.state.rows}}
      </template>
      <template #left>
        <Button @click="onRefresh" type="button" icon="pi pi-refresh" style="margin-right: 10px"/>
        <InputText @keyup.stop="onSearch(search)" type="text" v-model="search" style="width: 180px"/>
      </template>
    </Paginator>
    </div>
    <Dialog header="Confirmation" :visible="showDeleted" :style="{width: '350px'}" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span>Deseja realmente excluir este registro?</span>
        </div>
        <template #footer>
            <Button label="Sim" icon="pi pi-check" @click="onConfirmationDeleted" class="p-button-text"/>
            <Button label="Não" icon="pi pi-times" @click="showDeleted = false" class="p-button-text" autofocus />
        </template>
    </Dialog>
  </div>
</template>

<script src="./DataTable.js">
</script>

<style lang="scss" scoped>
.table{
  height: 100%;
}
.lolipop{
  background-color: #252525;
}
.altura{
  font-size: 10px;
}
</style>
