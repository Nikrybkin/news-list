<template>
  <span v-if="!postsDisplay">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="8" fill="#C4C4C4" />
      <rect y="10" width="18" height="8" fill="#C4C4C4" /></svg
  ></span>
  <span v-else>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="8" fill="#0029ff" />
      <rect y="10" width="18" height="8" fill="#0029ff" /></svg
  ></span>
</template>

<script>
  export default {
    props: {
      postsDisplay: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
