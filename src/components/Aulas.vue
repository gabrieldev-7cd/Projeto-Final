<template>
  <div class="videoAulas">
    <img :src="require(`../assets/images/${image}`)" alt="Imagem" />
    <div class="informacoesAula">
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aulas",

  props: {
    image: String,
    title: String,
    text: String,
  },
};
</script>

<style scoped>
.videoAulas {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.videoAulas img {
  margin: 75px 0px 0px 15%;
  width: 100%;
  max-width: 462px;
  max-height: 261px;
}
.informacoesAula h3 {
  margin: 75px 0px 26px 18%;
  max-width: 512px;
  height: 40px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;

  color: #ff4081;
}
.informacoesAula p {
  margin: 26px 0px 73px 18%;
  max-width: 501px;
  height: 195px;

  font-family: Ubuntu;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
}
</style>
