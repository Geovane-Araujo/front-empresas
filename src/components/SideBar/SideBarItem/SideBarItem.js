export default {
  name: 'sidebar-item',
  data () {
    return {
      show: false,
      iOld: ''
    }
  },
  setup () {
    return {
      router(a){
        if(a !== ''){
          this.$router.push(a)
        }
      },
      cli (item){
        const btn = document.getElementsByClassName(item)
        const hii = document.getElementsByClassName('subitem')
        document.getElementsByClassName('enfeite').forEach(item => item.style.backgroundColor = 'aliceblue')
        hii.forEach(item => {
          item.style.display = 'none'
        })
        if(btn.length > 0){
          btn[0].style.transition = 'all 2s'
          if(this.iOld === item){
            btn[0].style.display = 'none'
            this.iOld = ''
          } 
          else {
            btn[0].style.display = 'block'
            this.iOld = item
          }
        }
        document.getElementById(item).style.backgroundColor = ' #F48FB1'
      }
    }
  },
  props: {
    menuitens: {
      type: Object
    },
    title: {
      type: String
    }
  }
}
