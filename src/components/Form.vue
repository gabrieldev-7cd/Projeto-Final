<template>
  <div class="container">
    <Navbar />
    <div class="formulario">
      <h3>Novo Curso</h3>

      <form id="novoCurso" action="">
        <input type="text" placeholder="Titulo" />
        <input type="file" @change="imageChange" accept="image/*"/>
        <input type="text"  placeholder="Professor" />
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
import axios from 'axios';

export default {
  name: "Formulário",

  components: {
    Navbar,
    Footer,
  },
  data () {
    return{
      info: null,
      ref: 0,
      image: null
    }
  },

  methods:{
    imageChange(event) {
      this.image = event.target.files[0];
    },
    get(){
     axios
      .get("https://localhost:5001/api/Curso")
      .then((response) => (this.info = response.data))
      .catch();
    },

    create() {
      let formData = new FormData();
      formData.append("cursoId", 0);
      formData.append("titulo", "Titulo de teste badaras");
      formData.append("professor", "Prof Badaras");
      formData.append("imageFile", this.image);

      axios
        .post("https://localhost:5001/api/Curso", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("Deu Bom!");
        })
        .catch(function () {
          console.log("Deu Ruim!");
        });
    },
    update() {
      console.log("Call update!");

      let formData = new FormData();
      formData.append("cursoId", this.ref);
      formData.append("titulo", "Titulo modificado!");
      formData.append("professor", "Prof Modificado!");
      formData.append("imageFile", this.image);

      axios
        .post("https://localhost:5001/api/Curso/Edita/" + this.ref, formData, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function () {
          console.log("Deu Bom!");
        })
        .catch(function (error) {
          console.log(error);
          console.log("Deu Ruim!");
        });
    },

     destroy() {
      console.log("Destroy things");
      axios
      .delete("https://localhost:5001/api/Curso/" + this.ref)
      .then((response) => {
        console.log("Status >>" + response.status);
        console.log("Data >>" + response.data);
        console.log("Header >>" + response.header);
      });
    }
  }
};
</script>

<style scoped>
@import '../Style/FormStyle.css';
</style>
