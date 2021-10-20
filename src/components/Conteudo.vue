<template>
  <div class="cursos">
    <img :src="require(`../assets/images/${image}`)" alt="Imagem" />
    <div class="conteudo">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <button>
        <a href="#/about">{{ button }}</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conteudo",

  props: {
    image: String,
    title: String,
    text: String,
    button: String,
  },
};
</script>

<style scoped>
.cursos {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.cursos img {
  margin: 95px 0px 68px 112px;
}
.conteudo {
  flex-direction: column;
}
.conteudo h2 {
  margin-left: 53px;
  margin-top: 116px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;

  color: #ff4081;
}
.conteudo p {
  margin-top: 37px;
  margin-left: 53px;
  max-width: 724px;
  height: 105px;

  color: #000000;
}
button {
  margin: 53px 0px 0px 53px;
  width: 233px;
  height: 51px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  background: #419488;
  color: white;
  border-radius: 62px;
}
</style>
