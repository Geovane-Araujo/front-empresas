import SideBarItem from './SideBarItem/SideBarItem.vue'
export default {
  name: 'sidebar-menu',
  props: {
    menuitens: {
      type: Object
    },
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  setup () {
    return {
    }
  },
  components: {
    SideBarItem
  }
}
