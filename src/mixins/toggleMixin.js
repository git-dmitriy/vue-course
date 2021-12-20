export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },
  },
  mounted() {
    console.log('mixin mounted');
  },
};
