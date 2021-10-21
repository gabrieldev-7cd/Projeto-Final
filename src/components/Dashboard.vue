<template>
  <div class="container">
    <Navbar />
    <div class="table">
      <h1>Painel Administrativo</h1>
      <p>Educação financeira é tudo de bom</p>

      <table>
        <tr>
          <td id="titulo">
            <p>Curso</p>
            <p>Ações</p>
          </td>
        </tr>
        <tr>
          <td id="aulas">
            <p>Investimento Para Iniciantes</p>
            <button id="editar"><a href="/form">editar</a></button>
            <button id="excluir"><a href="#">excluir</a></button>
          </td>
        </tr>
        <tr>
          <td id="aulas">
            <p>Poupando e Rendendo</p>
            <button id="editar"><a href="/form">editar</a></button>
            <button id="excluir"><a href="#">excluir</a></button>
          </td>
        </tr>
        <tr>
          <td id="aulas">
            <p>Independência Financeira</p>
            <button id="editar"><a href="/form">editar</a></button>
            <button id="excluir"><a href="#">excluir</a></button>
          </td>
        </tr>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Painel Administrativo",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.container {
  flex-wrap: wrap;
}
.container h1 {
  margin: 81px 0px 0px 82px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 69px;

  text-transform: capitalize;

  color: #ff4081;
}
.container p {
  margin: 0px 0px 0px 82px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;

  color: #555555;
}
table {
  margin: 107px 0px 167px 82px;
  max-width: 812px;
  border: #000000;
}
#titulo {
  justify-content: space-between;
  background: #ebebeb;
}
#titulo p {
  margin: 8px 190px 8px 24px;
  display: flex;
  max-width: 230px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  text-transform: capitalize;

  color: #000000;
}

#aulas {
  max-width: 812px;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #989898;
  box-sizing: border-box;
}
#aulas p {
  flex-wrap: wrap;
  margin: 12px 0px 7px 24px;
  width: 510px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  text-transform: capitalize;

  color: #000000;
}
#editar {
  margin: 11px 12px 7px auto;
  width: 87px;
  height: 22px;

  background: #f8c23a;
  color: #ffffff;
}
#excluir {
  margin: 11px 70px 7px 0px;
  width: 87px;
  height: 22px;

  color: #ffffff;
  background: #f8513a;
}
tr {
  flex-wrap: wrap;
  max-width: 812px;
  border: 1px solid #989898;
  box-sizing: border-box;
}
td {
  display: flex;
  flex-wrap: wrap;
}
</style>
