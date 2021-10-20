<template>
  <div class="container">
    <Navbar />
    <div class="formulario">
      <h3>Novo Curso</h3>

      <form id="novoCurso" action="">
        <input type="text" placeholder="Titulo" />
        <input type="accept" placeholder="Upload capa" />
        <input type="text" placeholder="Professor" />
        <textarea type="textarea" id="texto" placeholder="Descrição" />
      </form>

      <h4>Aula 1</h4>

      <form id="primeiraAula" action="">
        <input type="text" placeholder="Titulo da aula" />
        <input type="text" placeholder="Link da aula" />
        <textarea placeholder="Descrição da aula" />
      </form>

      <h4>Aula 2</h4>

      <form id="primeiraAula" action="">
        <input type="text" placeholder="Titulo da aula" required="required" />
        <input type="text" placeholder="Link da aula" />
        <textarea placeholder="Descrição da aula" />
      </form>

      <button><a>Salvar</a></button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Formulário",

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
.formulario {
  display: flex;
  flex-direction: column;
}

.formulario h3 {
  margin: 97px 0px 69px 82px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 33px;
  text-transform: capitalize;

  color: #ff4081;
}
#novoCurso input {
  margin: 0px auto 14px 83px;
  width: 50%;
  height: 40px;
  padding: 5px;

  background: #ffffff;
  border: 1px solid #aeaeae;
  box-sizing: border-box;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #404040;
}
textarea::placeholder,
input::placeholder {
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #404040;
}
input {
  display: flex;
}

.formulario h4 {
  margin: 0px 0px 16px 83px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #419488;
}
textarea {
  margin: 0px 0px 21px 82px;
  width: 50%;
  height: 150px;

  background: #ffffff;
  border: 1px solid #aeaeae;
  box-sizing: border-box;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #404040;
}
#primeiraAula input {
  margin: 0px 0px 30px 83px;
  width: 50%;
  height: 40px;
  padding: 5px;

  background: #ffffff;
  border: 1px solid #aeaeae;
  box-sizing: border-box;
}
button {
  margin: 43px 0px 163px 83px;
  max-width: 233px;
  height: 51px;

  background: #2e948a;
  border-radius: 62px;
}
a {
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #ffffff;
}
</style>
