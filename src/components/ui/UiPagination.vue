<template>
  <div class="pagination">
    <div
      class="pagination-page"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ 'pagination-page-current': currentPage === pageNumber }"
      @click="clickHandler(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-pagination',
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
    clickHandler(pageNumber) {
      this.$emit('clickHandler', pageNumber);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-page {
  border: 2px solid gray;
  padding: 10px;
  margin: 0 4px;
  cursor: pointer;
}
.pagination-page-current {
  border: 2px solid teal;
  color: teal;
}
</style>
