import axios from 'axios'
export default {
  name: 'cicle-avatar',
  props: {
    imagem: {
      type: String
    },
    url_local_image: {
      type: String
    },
    url_local_upload: {
      type: String
    }
  },
  data () {
    return {
      img: ''
    }
  },
  mounted() {
    if(this.imagem === '' || this.imagem === undefined) {
      this.$emit('update', 'lolipop.png')
    }
  },
  setup () {
    return {
      arquivo: function(e){
        var formData = new FormData()
        formData.append('file', e.target.files[0])
        axios.post(this.url_local_upload, formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
          this.$emit('update', res.data)
        }).catch(err => {
          this.$toast.add({ severity: 'error', summary: 'Ticket', detail: err, life: 3000 })
        })
      }
    }
  }
}
