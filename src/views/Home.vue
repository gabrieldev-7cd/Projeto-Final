<template>
  <div class="container">
    <Navbar />
    <h1>Cursos</h1>
    <p>Educação é tudo de bom</p>

    <div class="aulas">
        <ul>
          <li v-for="i in data" :key="i">
          <Conteudo
            :image= i.capa
            :title= i.titulo
            :text= i.descricao
            button=" começar agora"
          />
          <hr/>
          </li>
        </ul>
       

    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Conteudo from "../components/Conteudo.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Conteudo,
  },

  data () {
      return{
        data: null,
        ref: 0,
        image: null
      }
    },

    mounted(){
     axios.get("https://localhost:5001/api/Curso")
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      })
    .catch( () => {console.log("Falha ao carregar")});
  }

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
