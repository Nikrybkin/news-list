<template>
  <div>
    <div class="filter">
      <button
        class="button__filter margin"
        @click="setPostsImagesShowStatus(false)"
      >
        <icon-image-false :value="value"></icon-image-false>
      </button>
      <button class="button__filter" @click="setPostsImagesShowStatus(true)">
        <icon-image-true :value="value"></icon-image-true>
      </button>
    </div>
  </div>
</template>

<script>
  import IconImageFalse from "./icons/IconImageFalse.vue";
  import IconImageTrue from "./icons/IconImageTrue.vue";
  export default {
    components: { IconImageTrue, IconImageFalse },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      setPostsImagesShowStatus(value) {
        this.$emit("update:value", value);
      },
    },
  };
</script>

<style scoped>
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
</style>
