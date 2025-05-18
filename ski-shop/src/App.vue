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
import ProductoItem from './components/ProductoItem.vue'
import {reactive, onMounted } from 'vue';

export default {
  components: { ProductoItem },
  setup() {
    const productos = reactive([]);

    const cargarProductos = async () => {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query:`
            {
              todosProductos {
                id
                nombre
                precio
                stock
                disponible
              }
            }
          `
        })
      });
      const { data, errors } = await res.json();
      console.log("Respuesta recibida", data, errors);

      if (data && data.todosProductos) {
        productos.splice(0, productos.length, ...data.todosProductos);
        
      } else {
        console.error("Error al obtener productos desde el backend:", errors)
      }
    };

    const modificarStock = async (index, cantidad) => {
      const id = productos[index].id;
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            mutation {
              modificarStock(id: ${id}, cantidad: ${cantidad}) {
                producto {
                  id
                  nombre
                  precio
                  stock
                  disponible
                }
              }
            }
          `
        })
      });
      const result = await res.json();
      if (result.data) {
        productos[index] = result.data.modificarStock.producto;
      }
    };

    onMounted(() => {
      cargarProductos();
    });
    return { productos, modificarStock };

  }
};
</script>

