<template>
  <div>
    <HeaderComponent />
    <div class="app__wrapper">
      <Nuxt />
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>
<style>
.app__wrapper {
  min-height: 100vh;
  margin-top: 80px;
}
</style>
