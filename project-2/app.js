Vue.createApp({
  // data() {
  //   return {

  //   }
  // }

  data: () => ({
    title: "I'm Groot",
    html: "<h1>Generated HTML</h1>",
    person: {
      firstName: "Hula",
      secondName: "Hululu",
      age: 56,
    },
    items: [1, 2, 3, 4, 5, 6, 7],
  }),
  computed: {
    eventItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app");
