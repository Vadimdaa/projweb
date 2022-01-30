<template>
  <div class="article__wrapper">
    <article v-if="article" class="article-page">
      <router-link class="article-page__link" to="/articles"
        >Ко всем новостям</router-link
      >
      <h1 class="article-page__title">{{ article.name }}</h1>
      <div class="article-page__date"><b> Дата: </b>{{ article.date }}</div>
      <img
        :src="'/images/' + article.full_image"
        :alt="article.name + 'card image'"
      />
      <p class="article-page__text"><b> Description: </b> {{ article.desc }}</p>
    </article>
    <div v-if="!loaded" class="not_found">Статья не найдена</div>
    <Comments />
  </div>
</template>
<script>
import { apiCall } from '../../services/api'
import Comments from '@/components/CommentsComponent.vue'

export default {
  name: 'ArticlePage',
  components: {
    Comments,
  },
  layout: 'default',
  data() {
    return { article: null, loaded: false }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  async mounted() {
    await apiCall('get', 'articles').then((response) => {
      this.article = response.find((item) => String(item.id) === this.id)
      this.loaded = !!this.article
    })
  },
}
</script>

<style>
.article-page {
  width: 80%;
  margin: 0 auto;
}
.article-page__title {
  text-align: center;
}
.article-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
.article-page img {
  width: 100%;
}

.article-page__link {
  background: black;
  color: white;
  padding: 5px 7px;
  text-decoration: none;
  border-radius: 5px;
}
.article-page__text {
  margin: 20px 0;
}
.article__wrapper {
  margin-bottom: 50px;
}
</style>
