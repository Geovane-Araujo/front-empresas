<template>
  <div class="content">
    <loading class="loading" :active="showLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <div class="login">
      <div class="formulario">
        <div class="p-fluid">
          <div class="p-field">
              <label for="fieldId">Usuário</label>
              <InputText v-model="form.login" id="fieldId" type="text" />
          </div>
          <div class="p-field">
            <label for="fieldId">Senha</label>
            <Password :feedback="false" v-model="form.senha" />
          </div>
          <div class="p-field">
            <Button @click="login()" label="Acessar"/>
          </div>
          <div class="p-field">
            <Button class="p-button-secondary" @click="login()" label="Cadastre-se"/>
          </div>
        </div>
      </div>
    </div>
      <vue-particles :particlesNumber="150" class="particles" color="#dedede"></vue-particles>
  </div>
  <Toast position="top-right"/>
</template>

<script src="./login.js">
</script>

<style lang="scss" scoped>
.particles{
  height: 100%;
  width: 100%;
}
.content{
  height: 100vh;
  width: 100vw;
  display: flex;
}
.login{
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #212022, $alpha: 0.6)
}
.formulario{
  width: 85%;
  color: aliceblue;
}
.dd{
  color: aliceblue;
}

@media screen and (max-width: 600px) {
  .login{
    width: 70%;
  }
}
</style>
