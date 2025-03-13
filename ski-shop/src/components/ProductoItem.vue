<template>
  <li>
    {{ producto.nombre }} - Precio: {{ producto.precio }}€ - Stock: {{ producto.stock }} - 
    <span :style="{ color: producto.disponible ? 'green' : 'red' }">
      {{ producto.disponible ? 'Disponible' : 'Agotado' }}
    </span>
    <button @click="$emit('modificarStock', 1)">+</button>
    <button @click="$emit('modificarStock', -1)" :disabled="producto.stock === 0">-</button>
  </li>
</template>

<script>
export default {
  props: ['producto']
};
</script>