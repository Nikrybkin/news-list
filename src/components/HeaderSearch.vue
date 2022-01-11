<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__title">
        <h1>Список новостей</h1>
      </div>
      <div class="header__search">
        <header-input v-model="searchQuery" class="header__input" type="text" />
        <icon-search class="icon__search"></icon-search>
      </div>
    </div>
  </div>
</template>

<script>
  import IconSearch from "./icons/IconSearch.vue";
  export default {
    components: { IconSearch },
    data() {
      return {
        searchQuery: "",
      };
    },
  };
</script>

<style scoped>
  .header {
    margin: 36px 0;
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
  }

  .header__search {
    position: relative;
    display: flex;
    align-items: center;
  }

  .icon__search {
    position: absolute;
    right: 13px;
  }
</style>
