export default {
  mounted(el, binding) {
    console.log('mounted el:', el);
    console.log('mounted binding:', binding);

    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        binding.value();
        console.log('crossed');
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(el);
  },

  name: 'intersection',
};
