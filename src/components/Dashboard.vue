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
          <td  id="aulas" v-for="i in data" :key="i" >
            <p>{{i.titulo}}</p>
            <button id="editar" @click="atualizar(i.cursoId)"><a href="/form/">editar</a></button>
            <button id="excluir" @click="destroy(i.cursoId)" ><a href="#">excluir</a></button>
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
import axios from 'axios';
export default {
  name: "Painel Administrativo",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return{
      data: null
    }
  },
  methods:{
    atualizar(id){
      this.$router.push('/form/'+id);
    },
    destroy(id) {
    console.log("Destroy things");
    axios
      .delete("https://localhost:5001/api/Curso/" + id)
      .then((response) => {
        console.log("Status >>" + response.status);
        console.log("Data >>" + response.data);
        console.log("Header >>" + response.header);
      });
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
@import '../Style/DashBoardStyle.css';
</style>
