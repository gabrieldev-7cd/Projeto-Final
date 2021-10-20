<template>
  <div class="container">
    <a href="/">
      <img src="../assets/images/logo.png" alt="Logo Empresa" />
    </a>
    <h1><a href="/">dindin</a></h1>
    <ul class="menu">
      <li id="cursos"><a href="#/">Cursos</a></li>
      <li id="administrativo">
        <a href="#/dashboard">Painel administrativo</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  height: 117px;

  background: #2e948a;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
}
.container img {
  margin-top: 20px;

  margin-left: 69px;
}

.container h1 {
  margin-top: 33px;
  margin-left: 11px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 64px;

  color: #ffffff;
}
.menu {
  display: flex;
  margin: 0px 0px 0px auto;
  list-style-type: none;
}
#cursos {
  margin: 47px 42px 0px 0px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  text-transform: uppercase;

  color: #fdfdfd;
}
#administrativo {
  margin: 47px 40px 0px 0px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  text-transform: uppercase;

  color: #fdfdfd;
}
</style>
