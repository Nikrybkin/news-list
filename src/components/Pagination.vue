<template>
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
</template>

<script>
  export default {
    props: {
      totalPages: {
        type: Number,
        required: true,
      },
      currentPage: {
        type: Number,
        required: true,
      },
    },
    methods: {
      changePage(selectedPage) {
        this.$emit("update:currentPage", selectedPage);
      },
    },
  };
</script>

<style scoped>
  .pagination {
    margin-top: 50px;
    text-align: center;
  }

  .page {
    width: 29px;
    height: 29px;
    margin: 0 5px;
    background: none;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .page:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .current-page {
    color: #0029ff;
  }
</style>
