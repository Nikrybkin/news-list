<template>
  <div class="post__list">
    <div class="post__inner">
      <post-item
        :postsDisplay="postsDisplay"
        class="post"
        :post="post"
        v-for="post in posts"
        :key="post.id"
      ></post-item>
    </div>
  </div>
</template>

<script>
  import PostItem from "./PostItem.vue";
  export default {
    components: {
      PostItem,
    },
    props: {
      posts: {
        type: Array,
        required: true,
      },
      postsDisplay: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style scoped>
  .post__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
