<template>
  <div>
    <div v-if="show" class="filter">
      <button @click="changePostsDisplay">plus</button>
      <button>minus</button>
    </div>
    <div v-else class="filter">
      <button>plus</button>
      <button @click="changePostsDisplay">minus</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      showPosts() {
        this.$emit("update:show", false);
      },
    },
  };
</script>

<style></style>
