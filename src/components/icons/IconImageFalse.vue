<template>
  <span :postsDisplay="postsDisplay" v-if="postsDisplay">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height="8" fill="#c4c4c4" />
      <rect y="10" width="8" height="8" fill="#c4c4c4" />
      <rect x="10" width="8" height="8" fill="#c4c4c4" />
      <rect x="10" y="10" width="8" height="8" fill="#c4c4c4" />
    </svg>
  </span>
  <span :postsDisplay="postsDisplay" v-else>
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height="8" fill="#0029FF" />
      <rect y="10" width="8" height="8" fill="#0029FF" />
      <rect x="10" width="8" height="8" fill="#0029FF" />
      <rect x="10" y="10" width="8" height="8" fill="#0029FF" />
    </svg>
  </span>
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
