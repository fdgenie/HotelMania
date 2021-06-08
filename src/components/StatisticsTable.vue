<template>
  <div class="tableContainer">
    <div class="tableContainerHeader">
      <div class="tableTitle">{{ title }}</div>
    </div>
    <div>
      <table>
        <tr>
          <th v-for="(tableHeader, index) in tableHeaders" :key="index">
            {{ tableHeader.name }}
          </th>
        </tr>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>
            {{ row[0] }}
          </td>
          <td>
            {{ row[1] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsTable",
  props: {
    tableHeaders: {
      type: Array,
      required: true,
    },
    tableData: {
      type: [Boolean, Array],
      required: true,
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
  margin: 0 5px 20px;

  @media screen and (min-width: 992px) {
    width: 300px;
  }
}
</style>
