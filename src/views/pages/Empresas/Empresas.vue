<template>
  <div class="fasecrecimento">
    <loading class="loading" :active="isLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <div style="margin-bottom: 20px">
      <p class="title-page">Empresas</p>
    </div>
    <div class="btns" style="margin-bottom: 10px;">
      <Button class="p-button-outlined p-button-success" style="margin-right: 5px;" label="Detalhes" @click="onDetalhes"/>
      <Button class="p-button-outlined p-button-success" style="margin-right: 5px;" label="Campanha" @click="onDeleted"/>
      <Button class="p-button-outlined p-button-info" style="margin-right: 5px;" label="Filtros" @click="showFilter=true"/>
    </div>
    <div class="grid">
      <table-ticket v-on:update="onUpdate($event)" :onGetById="onGetById" ref="datagrid"/>
    </div>
    <div>
      <Dialog :style="{width: '50vw'}" header="Cadastros De Usuarios" v-model:visible="showModal" :modal="true">
         <div style="height: 500px">
           <v-ace-editor
            v-model:value="code"
            lang="json"
            theme="chrome"
            style="height: 500px" />
         </div>
        <template #footer>
          <Button label="Calcelar" @click="showModal=false" autofocus/>
      </template>
      </Dialog>
    </div>
    <div>
      <Dialog :style="{width: '30vw'}" header="Filtros" v-model:visible="showFilter" :modal="true">
          <div class="row">
            <div class="col-sm-12 row">
              <div class="col-sm-7">
                <div class="p-fluid p-field">
                  <label >Cnae</label>
                  <InputText v-model="form.cnae" type="text"/>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-fluid p-field">
                <label >Cidade</label>
                  <div class="p-inputgroup">
                    <InputText  v-model="form.cidade" type="text" />
                    <Button @click="onDataSearch" icon="pi pi-search"/>
                </div>
              </div>
            </div>
          </div>
        <template #footer>
          <Button label="Filtrar" @click="onFiltrar"/>
          <Button label="Calcelar" @click="showFilter=false" autofocus/>
      </template>
      </Dialog>
    </div>
    <div class="datasearch">
      <datasearch-ticket :onDestroy="onDestroy" ref="datasearch"/>
    </div>
  </div>
</template>

<script src="./Empresas.js">
</script>

<style lang="scss" scoped>
.left{
  width: 20%;
}
.rigth{
  width: 80%;
}
.editor {
  width: 600px;
  height: 800px;
}
.ed{
  overflow: hidden;
  overflow-y: hidden;
}
</style>