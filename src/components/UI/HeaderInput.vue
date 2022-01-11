<template>
  <input :value="modelValue" @input="updateInput" class="header__input" />
</template>

<script>
  export default {
    name: "header-input",
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
</script>

<style scoped>
  .header__input {
    width: 320px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }
</style>
