<template>
  <div v-if="items">
    <v-carousel :show-arrows="true" hide-delimiters class="carousel">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="returnSource(item.preview_image)"
      >
        <div class="carousel__text">
          <h2>{{ item.shortDesc }}...</h2>
          <router-link :to="'articles/' + item.id" class="read-more"
            >читать далее</router-link
          >
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      items: null,
    }
  },
  computed: {
    ...mapGetters({
      articles: 'articles/getArticles',
    }),
  },
  async mounted() {
    const data = await this.articles
    this.items = data.filter((el) => el.slider)
  },
  methods: {
    returnSource(src) {
      return `/images/${src}`
    },
  },
}
</script>

<style>
.v-responsive__content {
  width: 600px !important;
}
.carousel__text {
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}
.carousel__text h2 {
  background: rgba(255, 255, 255, 0.6);
  padding: 5px 10px;
  display: inline;
  width: 100%;
}
.v-window__next {
  right: 0;
}
.carousel__text {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.read-more {
  display: block;
  width: fit-content;
  background: #ee846d;
  padding: 5px 10px;
  text-align: center;
  color: white !important;
  margin-bottom: 20px;
  font-size: 22px;
  text-decoration: none;
  border-radius: 10px;
  opacity: 1;
  transition: opacity 0.3s;
}

.read-more:hover {
  opacity: 0.7;
}
</style>
