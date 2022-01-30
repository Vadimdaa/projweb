<template>
  <div class="comments">
    <h2>Коментарии:</h2>
    <div class="comment" v-for="(comment, idx) in comments" :key="idx">
      <h3 class="comment__name">{{ comment.user_name }}</h3>
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: { comments: Array },

  mounted() {},
}
</script>

<style>
.comments {
  width: 80%;
  margin: 0 auto;
}
.comment {
  margin: 10px 0;
  background: #ee846d;
  padding: 15px 20px;
  color: white;
  border-radius: 10px;
  width: fit-content;
}
.comment__name {
  background: white;
  color: black;
  width: fit-content;
  padding: 7px 12px;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
