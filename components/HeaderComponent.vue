<template>
  <v-app-bar app class="header" color="#EE846D">
    <v-app-bar-title>
      <router-link to="/" class="header__logo">MATROS</router-link>
    </v-app-bar-title>
    <nav class="header__nav nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/" class="header__logo">Главная</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/articles" class="header__logo">Статьи</router-link>
        </li>
      </ul>
    </nav>
    <form v-if="!tabletView" class="search__form" @submit="searchSubmit">
      <v-text-field v-model="searchData"></v-text-field>

      <v-btn depressed type="submit" class="search__submit"> Искать </v-btn>
    </form>
  </v-app-bar>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      searchData: null,
      tabletView: false,
    }
  },
  created() {
    this.handleView()
  },
  methods: {
    searchSubmit(e) {
      e.preventDefault()
    },
    handleView() {
      this.tabletView = this.innerWidth <= 992
    },
  },
}
</script>

<style>
.nav__list {
  display: flex;
  list-style: none;
}

.nav__item a {
  padding: 5px 7px;
  margin: 0 5px;
  border-radius: 8px;
}
.header__logo {
  color: white !important;
  text-decoration: none;
}

.search__form {
  margin-left: auto;
  display: flex;
  transform: translateY(10px);
}

.nav .router-link-exact-active {
  background: rgba(255, 255, 255, 0.179);
}
</style>
