<template>
  <div class="container">
    <Navbar />
    <h1>Cursos</h1>
    <p>Educação é tudo de bom</p>

    <div class="aulas">
      <Conteudo
        image="cursoIniciante.svg"
        title="Investimento para iniciantes"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt."
        button=" começar agora"
      />

      <hr />

      <Conteudo
        image="poupandoERendendo.svg"
        title="Poupando e Rendendo"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt."
        button=" começar agora"
      />

      <hr />

      <Conteudo
        image="independenciaFinanceira.svg"
        title="Independência Financeira"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt."
        button=" começar agora"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Conteudo from "../components/Conteudo.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Conteudo,
  },
};
</script>

<style scoped>
.aulas {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 134px;
}
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
hr {
  height: 5px;
  margin: 68px 82px 0px 82px;
  max-width: 1240px;
  background: #c4c4c4;
}
</style>
