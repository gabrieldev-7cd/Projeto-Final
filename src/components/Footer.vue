<template>
  <div class="footer">
    <img src="../assets/images/logo.png" alt="Logo Empresa" />
    <div class="conteudo">
      <h2>dindin</h2>
      <p>educação Financeira</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  max-width: 100%;
  height: 207px;
  background: #419488;
}
.footer img {
  display: flex;
  max-width: 98.7px;
  height: 101.43px;
  margin: 53px 0px 0px 10%;
}

.conteudo h2 {
  left: 16.81%;
  right: 69.44%;
  margin-top: 28.5%;
  bottom: 43.48%;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 66px;
  line-height: 76px;

  color: #ffffff;
}
.conteudo p {
  left: 17.29%;
  right: 71.04%;
  top: 62.32%;
  bottom: 27.05%;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 22px;

  color: #ffffff;
}
</style>
