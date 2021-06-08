<template>
  <div>
    <div class="container" v-if="!loading">
      <StatisticsTable
        :tableHeaders="perCityHeader"
        :tableData="countValues('country')"
        title="Hotels per city"
      />
      <StatisticsTable
        :tableHeaders="perStarsHeader"
        :tableData="countValues('star')"
        title="Hotels per star"
      />
    </div>
    <div class="loading" v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StatisticsTable from "@/components/StatisticsTable";

export default {
  name: "StatisticsPage",
  components: {
    StatisticsTable,
  },
  data() {
    return {
      perCityHeader: [
        {
          name: "City",
        },
        {
          name: "Amount",
        },
      ],
      perStarsHeader: [
        {
          name: "Star Rating",
        },
        {
          name: "Amount",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      hotels: "hotels/getHotels",
      loading: "hotels/getLoading",
    }),
  },
  methods: {
    //Count same values by given key
    countValues(key) {
      let count = {};
      this.hotels.forEach((i) => {
        count[i[key]] = (count[i[key]] || 0) + 1;
      });

      return Object.entries(count);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
}
</style>
