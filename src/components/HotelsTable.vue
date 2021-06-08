<template>
  <div class="tableContainer">
    <div class="tableContainerHeader">
      <div class="tableTitle">{{ title }}</div>
      <div v-if="tableFilter">
        <input
          type="text"
          class="filterInput"
          v-model="tableFilter.value"
          :placeholder="tableFilter.placeholder"
        />
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th v-for="(tableHeader, index) in tableHeaders" :key="index">
            {{ tableHeader.name }}
          </th>
        </tr>
        <tr
          v-for="row in tableData"
          :key="row.id"
          @click="row.selected = !row.selected"
          :class="row.selected ? 'haveSelectedRow' : ''"
        >
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.address }}</td>
          <td>{{ row.star }}</td>
          <td><slot :row="row"></slot></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelsTable",
  props: {
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
    tableFilter: {
      type: Object,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tableContainer {
  margin: 0 5px;

  @media screen and (min-width: 992px) {
    width: 600px;
  }
}

tr:hover td {
  cursor: pointer;
  background: $secondary;
  border: solid black 1px;
  border-style: solid none;
}

.filterInput {
  background-image: url("../assets/search.png");
  background-size: 20px;
  box-sizing: border-box;
  background-position: 7px 7px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 10px 30px;
  border: 1px solid rgb(139, 136, 136);
  width: 200px;
  margin-bottom: 5px;
  border-radius: 2px;
}

.haveSelectedRow {
  background: $secondary;
  border-top: solid black 1px;
}
</style>
