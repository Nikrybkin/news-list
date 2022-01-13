<template>
  <div class="page">
    <h1 class="page__title">Пост с ID: {{ $route.params.id }}</h1>
    <div class="post__item">
      <div class="post__content">
        <span>Тут должно быть: заголовок, описание поста и картинка</span>
      </div>
    </div>
  </div>
</template>

<script>
  import PostList from "../PostList.vue";
  export default {
    components: { PostList },
  };
</script>

<style scoped>
  .page {
    padding-top: 20px;
  }

  .page__title {
    margin-bottom: 20px;
  }

  .post__item {
    padding: 30px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }
  .post__content {
    font-size: 18px;
    font-weight: 700;
  }
</style>
