<template>
  <div class="app">
    <header-search
      :searchQuery="searchQuery"
      @input="searchQuery = $event.target.value"
    />
    <div class="filter">
      <button class="button__filter margin" @click="postsDisplayFalse">
        <icon-image-false :postsDisplay="postsDisplay"></icon-image-false>
      </button>
      <button class="button__filter" @click="postsDisplayTrue">
        <icon-image-true :postsDisplay="postsDisplay"></icon-image-true>
      </button>
    </div>
    <post-list :posts="itemsVisible" :postsDisplay="postsDisplay" />
    <div class="pagination">
      <button
        class="page"
        v-for="selectedPage in totalPages"
        :key="selectedPage"
        :class="{ 'current-page': currentPage === selectedPage }"
        @click="changePage(selectedPage)"
      >
        {{ selectedPage }}
      </button>
    </div>
  </div>
</template>

<script>
  import HeaderSearch from "./components/HeaderSearch.vue";
  import PostList from "./components/PostList.vue";
  import IconImageFalse from "./components/icons/IconImageFalse.vue";
  import IconImageTrue from "./components/icons/IconImageTrue.vue";
  import axios from "axios";
  export default {
    components: { HeaderSearch, PostList, IconImageFalse, IconImageTrue },
    data() {
      return {
        posts: [],
        searchQuery: "",
        postsDisplay: false,
        page: 1,
        limit: {
          grid: 4,
          list: 3,
        },
        currentPage: 1,
        totalPages: 0,
      };
    },
    methods: {
      postsDisplayTrue() {
        this.postsDisplay = true;
      },
      postsDisplayFalse() {
        this.postsDisplay = false;
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
      async fetchPostsImage() {
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
      checkPostsDisplay() {
        if (this.postsDisplay) {
          this.totalPages = Math.ceil(
            this.searchPosts.length / this.limit.list
          );
        } else {
          this.totalPages = Math.ceil(
            this.searchPosts.length / this.limit.grid
          );
        }
      },
      searchPosts() {
        this.currentPage = 1;
        return this.posts.filter((post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
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
      // this.searchQuery;
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

  /* Filter */

  .filter {
    display: flex;
    justify-content: flex-end;
  }

  .button__filter {
    border: none;
    background: none;
  }

  .button__filter.margin {
    margin-right: 10px;
  }

  .pagination {
    text-align: center;
    margin-top: 50px;
  }

  .page {
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 3px;
    border: none;
    background: none;
    transition: all 0.2s linear;
  }

  .page:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .current-page {
    color: #0029ff;
  }

  .current-page:hover {
    background: rgba(0, 41, 255, 0.1);
  }
</style>
