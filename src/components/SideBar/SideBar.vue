<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div><p class="sidebar-header-title">{{ title }}</p></div>
      <div class="side-bar-avisos"></div>
    </div>
    <div class="sidebar-body">
      <div class="sidebar-menu">
        <SideBarItem :menuitens="item" :title="item.label" v-for="item in menuitens" :key="item.label"/>
      </div>
      <div class="sidebar-left">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script src="./SideBar.js">
</script>

<style lang="scss" scoped src="./SideBar.scss">
</style>