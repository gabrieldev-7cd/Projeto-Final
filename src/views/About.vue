<template>
  <div class="container">
    <Navbar />

    <div class="aulaGravada">
      <div class="conteudo">
        <h1>
          Investimento<br />
          para iniciantes
        </h1>

        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. "
        </p>
      </div>
      <div>
        <img src="../assets/images/cursoIniciante.svg" alt="Imagem" />
      </div>
    </div>
    <div class="containerAulas">
      <Aulas
        image="imagemVideo.svg"
        title="Aula 1"
        text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
        aut fugit, sed quia consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. "
      />
      <hr />
      <Aulas
        image="imagemVideo.svg"
        title="Aula 1"
        text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
        aut fugit, sed quia consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. "
      />
      <hr />
      <Aulas
        image="imagemVideo.svg"
        title="Aula 1"
        text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
        aut fugit, sed quia consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit aspernatur
        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. "
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Aulas from "../components/Aulas.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",

  components: {
    Navbar,
    Aulas,
    Footer,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  flex-wrap: wrap;
}
.containerAulas {
  background: #f7f7f7;
}
.aulaGravada {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.aulaGravada h1 {
  margin: 94px 0px 0px 202px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 63px;

  color: #ff4081;
}

.aulaGravada p {
  margin: 22px 0px 0px 202px;
  max-width: 461px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}
.aulaGravada img {
  margin: 81px 0px 81px 10%;
}
hr {
  margin: 0px 5% 0px 5%;
  display: flex;
  max-width: 1244px;
  height: 3px;
  background: #c4c4c4;
}
</style>
