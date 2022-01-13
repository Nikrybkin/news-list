<template>
  <div>
    <div class="app__inner">
      <header-search
        :searchQuery="searchQuery"
        @input="searchQuery = $event.target.value"
      />
      <hr />
      <post-filter
        v-model:value="postsDisplay"
        @click="setPostsImagesShowStatus(postsDisplay)"
      ></post-filter>
      <post-list :posts="itemsVisible" :postsDisplay="postsDisplay" />
      <pagination
        :totalPages="totalPages"
        v-model:currentPage="currentPage"
        @click="changePage(currentPage)"
      />
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import HeaderSearch from "../HeaderSearch.vue";
  import PostList from "../PostList.vue";
  import PostFilter from "../PostFilter.vue";
  import Pagination from "../Pagination.vue";
  export default {
    components: { HeaderSearch, PostList, PostFilter, Pagination },
    data() {
      return {
        posts: [],
        searchQuery: "",
        postsDisplay: false,
        page: 1,
        currentPage: 1,
        limit: {
          grid: 4,
          list: 3,
        },
      };
    },
    methods: {
      setPostsImagesShowStatus(value) {
        this.postsDisplay = value;
      },
      changePage(selectedPage) {
        this.currentPage = selectedPage;
      },
      async fetchPosts() {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          this.posts = response.data;
        } catch (e) {
          alert("Error");
        }
      },
    },
    computed: {
      searchPosts() {
        this.currentPage = 1;
        return this.posts.filter((post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      totalPages() {
        return !this.postsDisplay
          ? Math.ceil(this.searchPosts.length / this.limit.grid)
          : Math.ceil(this.searchPosts.length / this.limit.list);
      },
      itemsVisible() {
        if (this.postsDisplay) {
          return this.searchPosts.slice(
            (this.currentPage - 1) * this.limit.list,
            (this.currentPage - 1) * this.limit.list + this.limit.list
          );
        } else {
          return this.searchPosts.slice(
            (this.currentPage - 1) * this.limit.grid,
            (this.currentPage - 1) * this.limit.grid + this.limit.grid
          );
        }
      },
    },
    mounted() {
      this.fetchPosts();
    },
  };
</script>

<style>
  .app__inner {
    margin: 0 20px;
  }

  hr {
    background: #e5e5e5;
    border: 1px solid #e5e5e5;
  }
</style>
