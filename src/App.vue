<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {
    const hotels = [
      {
        id: 1,
        name: "Adlon",
        address: "Unter den Linden 77",
        star: "4",
        country: "Germany",
        selected: false,
      },
      {
        id: 2,
        name: "Fairmont",
        address: "Neuer Jungfernstieg 9-14",
        star: "5",
        country: "Germany",
        selected: false,
      },
      {
        id: 3,
        name: "Amirandes",
        address: "Agiou Nikolaou 12",
        star: "4",
        country: "Greece",
        selected: false,
      },
      {
        id: 4,
        name: "Katikies",
        address: "Nik. Nomikou 10",
        star: "3",
        country: "Greece",
        selected: false,
      },
      {
        id: 5,
        name: "Waldorf Astoria",
        address: "Herengracht 542-556",
        star: "3",
        country: "Netherlands",
        selected: false,
      },
    ];

    this.$store.dispatch("hotels/dispatchHotels", { hotels });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
}
</style>
