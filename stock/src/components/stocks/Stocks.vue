<template>
<div>
  <app-stock v-for="stock in stocks"></app-stock>
</div>
</template>

<script>
  import Stock from './Stock'
  export default {
    data() {
      return {
        stocks: [
          {id: 1, name: 'BMW', price: 110},
          {id: 2, name: 'W', price: 1102},
          {id: 3, name: 'B', price: 43},
          {id: 4, name: 'M', price: 99},
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>