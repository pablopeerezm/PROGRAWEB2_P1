<template>
  <div>
  <h1> SKI Shop </h1>
  <ul>
    <ProductoItem 
        v-for="(producto, index) in productos" 
        :key="index" 
        :producto="producto" 
        @modificarStock="modificarStock(index, $event)" 
      />
  </ul>
  </div>
</template>

<script>
import {reactive} from 'vue'
import ProductoItem from './components/ProductoItem.vue'
import {productos} from './store/productos'

export default {
  components: { ProductoItem },
  setup() {
    const modificarStock = (index, cantidad) => {
      productos[index].stock += cantidad;
    };
    return { productos, modificarStock };
  }
};

</script>

