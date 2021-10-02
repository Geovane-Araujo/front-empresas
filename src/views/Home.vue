<template>
  <div class="home">
    <SideBar title="Info Empresas" :menuitens="menuitens"/>
    <Toast position="top-right"/>
  </div>
</template>

<script>
import SideBar from '../components/SideBar/SideBar.vue'
import Toast from 'primevue/toast'
export default {
  name: 'Home',
  data () {
    return {

      menuitens: [
        {
          label: 'Empresas',
          icon: 'ad ad-sell',
          route: 'Empresas',
        },
        {
          label: 'Campanhas',
          icon: 'ad ad-person',
          route: '',
          sub: [
            {
              label: 'Emails',
              icon: '',
              subroute: ''
            },
            {
              label: 'Smss',
              icon: '',
              subroute: ''
            }
          ]
        },
        {
          label: 'Modelos',
          icon: 'ad ad-sell',
          route: '',
          sub: [
            {
              label: 'Emails',
              icon: '',
              subroute: ''
            },
            {
              label: 'Smss',
              icon: '',
              subroute: ''
            }
          ]
        },
      ]
    }
  },
  components: {
    SideBar,
    Toast
  }
}
</script>
<style lang="scss">
</style>
