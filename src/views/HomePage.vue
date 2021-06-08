<template>
  <div>
    <div v-if="!loading">
      <HotelsTable
        :tableData="filteredHotels"
        :tableHeaders="hotelHeaders"
        :tableFilter="tableFilter"
        title="Hotels"
      >
        <template slot-scope="{ row }">
          <button class="btns" @click="removeHotel(row)">X</button>
        </template>
      </HotelsTable>
    </div>
    <div class="loading" v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HotelsTable from "@/components/HotelsTable";

export default {
  name: "HomePage",
  components: {
    HotelsTable,
  },
  data() {
    return {
      hotelHeaders: [
        {
          name: "ID",
        },
        {
          name: "Name",
        },
        {
          name: "Address",
        },
        {
          name: "Star Rating",
        },
        {
          name: "",
        },
      ],
      tableFilter: {
        value: "",
        placeholder: "Search by stars...",
      },
    };
  },
  computed: {
    ...mapGetters({
      hotels: "hotels/getHotels",
      loading: "hotels/getLoading",
    }),
    filteredHotels() {
      if (this.tableFilter.value === "") return this.hotels;

      return this.hotels.filter((h) => h.star === this.tableFilter.value);
    },
  },
  methods: {
    removeHotel(row) {
      this.$store.dispatch("hotels/dispatchRemoveHotel", { hotel: row });
    },
  },
};
</script>

<style lang="scss" scoped>
.btns {
  color: #f08770;
}

.btns:hover {
  color: #b66857;
}
</style>
