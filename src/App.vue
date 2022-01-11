<template>
  <div class="app">
    <header-search
      :searchQuery="searchQuery"
      @input="searchQuery = $event.target.value"
    />
    <post-filter
      v-model:show="postsDisplay"
      @click="changePostsDisplay"
    ></post-filter>
    <post-list :posts="searchPosts" :postsDisplay="postsDisplay" />
  </div>
</template>

<script>
  import HeaderSearch from "./components/HeaderSearch.vue";
  import PostList from "./components/PostList.vue";
  import axios from "axios";
  import PostFilter from "./components/PostFilter.vue";
  export default {
    components: { HeaderSearch, PostList, PostFilter },
    data() {
      return {
        posts: [],
        searchQuery: "",
        postsDisplay: false,
        page: 1,
        limit: 4,
      };
    },
    methods: {
      postsDisplayTrue() {
        this.postsDisplay = true;
      },
      postsDisplayFalse() {
        this.postsDisplay = false;
      },
      changePostsDisplay() {
        if (!this.postsDisplay) {
          this.postsDisplayTrue();
        } else {
          this.postsDisplayFalse();
        }
      },
      async fetchPosts() {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.posts = response.data;
        } catch (e) {
          alert("Error");
        }
      },
    },
    computed: {
      searchPosts() {
        return this.posts.filter((post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    mounted() {
      this.fetchPosts();
      this.searchQuery;
    },
  };
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #000;
    background: #fbfbfb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    max-width: 1060px;
    margin: 0 auto;
  }
</style>
