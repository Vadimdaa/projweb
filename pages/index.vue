<template>
  <div>
    <h1 class="heading">ПРИВЕТСТВУЮ НА НОВОСТНОМ САЙТЕ ВАДИМА МИРОНЕНКО</h1>
    <div class="carousel__wrapper">
      <h2 class="carousel__title">CРОЧНЫЕ НОВОСТИ:</h2>
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/CarouselComponents.vue'

export default {
  name: 'IndexPage',
  components: {
    Carousel,
  },
  layout: 'DefaultLayout',
}
</script>

<style scoped>
.carousel__wrapper {
  height: 100vh;
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.heading {
  margin-top: 100px;
  text-align: center;
  color: white;
  background: #ee846d;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 17px;
  border-radius: 10px;
}
</style>
