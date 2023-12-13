<template>
  <div class="container" v-if="facture">
    <table
      class="dataTable"
      v-for="(factureItem, index2) in facture"
      :key="index2"
    >
      <thead>
        <tr>
          <th style="text-align: center">Product Name</th>
          <th style="text-align: center">quantity</th>
          <th style="text-align: center">price_per_item</th>
          <th style="text-align: center">Total</th>
        </tr>
      </thead>
      <tr v-for="(tab, index) in factureItem" :key="index">
        <td class="table-info">{{ tab.name }}</td>
        <td class="table-info">{{ tab.colors[tab.selected].inStock }}</td>
        <td class="table-info">{{ tab.price + "$" }}</td>
        <td class="table-info">
          {{ tab.price * tab.colors[tab.selected].inStock + "$" }}
        </td>
      </tr>
      <tr>
        <th>checkout</th>
        <td>{{ calculateTotal(factureItem) }}$</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "factureComponent",
  props: {
    facture: {
      type: Object,
      required: true,
    },
  },
  methods: {
    calculateTotal(factureItem) {
      let t = 0;
      console.log("hhh");
      console.log(factureItem);
      for (let i = 0; i < factureItem.length; i++) {
        t +=
          factureItem[i].colors[factureItem[i].selected].inStock *
          factureItem[i].price;
      }
      console.log(t);
      return t;
    },
  },
};
</script>
<style>
.dataTable {
  display: block;
  width: 100%;
  margin: 1em 0;
}

.dataTable thead,
.dataTable tbody,
.dataTable thead tr,
.dataTable th {
  display: block;
}

.dataTable tbody {
  width: auto;
  position: relative;
  overflow-x: auto;
}

.dataTable td,
.dataTable th {
  padding: 0.625em;
  line-height: 1.5em;
  border-bottom: 1px dashed #ccc;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.dataTable th {
  text-align: left;
  background: rgba(0, 0, 0, 0.14);
  border-bottom: 1px dashed #aaa;
}
thead tr th {
  display: flex;
  justify-content: center;
}
.dataTable tbody tr {
  display: table-cell;
}

.dataTable tbody td {
  display: block;
}

.dataTable tr:nth-child(odd) {
  background: rgba(0, 0, 0, 0.07);
}

@media screen and (min-width: 50em) {
  .dataTable {
    display: table;
  }

  .dataTable thead {
    display: table-header-group;
    float: none;
  }

  .dataTable tbody {
    display: table-row-group;
  }

  .dataTable thead tr,
  .dataTable tbody tr {
    display: table-row;
  }

  .dataTable th,
  .dataTable tbody td {
    display: table-cell;
  }

  .dataTable td,
  .dataTable th {
    width: auto;
  }
}
</style>
