<template>
  <ul v-if="articles" class="articles__list">
    <li
      v-for="article in articles"
      :key="article.id"
      class="articles__item article"
    >
      <article>
        <div>
          <h2>{{ article.name }}</h2>
          <p>{{ article.shortDesc }}</p>
          <router-link :to="'/articles/' + article.id">
            Подробнее...</router-link
          >
        </div>
        <img
          :src="'images/' + article.preview_image"
          :alt="article.name + 'card image'"
        />
      </article>
      <hr />
    </li>
  </ul>
  <div v-else>Loading data</div>
</template>
<script>
import { apiCall } from '../../services/api'

export default {
  name: 'ArticlePage',
  layout: 'default',
  data() {
    return { articles: null }
  },
  async mounted() {
    await apiCall('get', 'articles').then((response) => {
      this.articles = response
    })
  },
}
</script>

<style>
.articles__item {
  margin: 5px 0;
  padding: 8px;
  border-radius: 8px;
  break-inside: avoid;
}
.articles__list {
  max-width: 80vw;
  margin: 0 auto;
  list-style-type: none;
}

.article article {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.article img {
  width: 300px;
}
</style>
