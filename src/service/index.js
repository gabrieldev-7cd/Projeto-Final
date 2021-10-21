import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      info: null,
      image: null,
      ref: 0,
    };
  },
  methods: {
    destroy() {
      console.log("Destroy things");
      axios
        .delete("https://localhost:5001/api/Curso/" + this.ref)
        .then((response) => {
          console.log("Status >>" + response.status);
          console.log("Data >>" + response.data);
          console.log("Header >>" + response.header);
        });
    },
    imageChange(event) {
      this.image = event.target.files[0]; //handler de imagem
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
  },
  mounted() {
    //Carrega dados via get no load da página!
    axios
      .get("https://localhost:5001/api/Curso")
      .then((response) => (this.info = response.data))
      .catch();
  },
};
