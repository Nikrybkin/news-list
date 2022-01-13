<template>
  <div v-if="!postsDisplay" class="post">
    <div class="post__content">
      <div class="post__title">{{ post.title }}</div>
      <div class="post__body">{{ post.body }}</div>
      <a @click="$router.push(`/posts/${post.id}`)" class="post__link" href="#"
        >Подробнее</a
      >
    </div>
  </div>
  <div v-else class="post width">
    <div class="post__image">
      <img class="img" src="http://dummyimage.com/200x100/c0c0c0" />
    </div>
    <div class="post__content width">
      <div class="post__title">
        <a @click="$router.push(`/posts/${post.id}`)" href="">{{
          post.title
        }}</a>
      </div>
      <div class="post__body width">{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
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
  .post {
    width: 49%;
    height: 218px;
    margin-top: 20px;
    padding: 30px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }

  .post.width {
    width: 1060px;
    height: auto;
    display: flex;
    align-items: center;
  }

  .post__content.width {
    margin-left: 20px;
  }

  .post__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 42px;
    font-family: inherit;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #0029ff;
    margin-bottom: 20px;
  }

  .post__title a {
    color: #0029ff;
  }

  .post__body {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 25px 0;
  }

  .post__body.width {
    margin: 0;
  }

  .post__link {
    color: #0029ff;
  }

  @media (max-width: 800px) {
    .post {
      width: 100%;
    }

    .post.width {
      display: block;
      text-align: center;
    }

    .post__image {
      margin-bottom: 20px;
    }

    .img {
      width: 100%;
      height: 100px;
    }

    .post__content.width {
      margin-left: 0;
    }
  }
</style>
