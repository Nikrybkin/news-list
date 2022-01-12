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
</style>
