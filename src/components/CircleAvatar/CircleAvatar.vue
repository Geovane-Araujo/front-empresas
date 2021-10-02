<template>
  <div>
    <img class="avatar" :src="url_local_image + imagem" alt="">
    <div class="div-btn">
      <input class="inp" id='selecao-arquivo' @change="arquivo" accept="image/*" type='file'>
      <label class="btn" for='selecao-arquivo'>+</label>
    </div>
  </div>
</template>

<script src="./CircleAvatar.js">
</script>

<style lang="scss" scoped>
.avatar{
  border-radius: 50%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  max-height: 90px;
  max-width: 90px;
}
.div-btn{
  position: relative;
  bottom:30px;
  left:70px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn{
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #F06292;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.inp{
  display: none;
}
</style>