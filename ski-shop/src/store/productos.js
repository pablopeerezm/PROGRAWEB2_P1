import { reactive, watch } from 'vue';

export const productos = reactive([
  { nombre: 'Esquís Rossignol GS 193cm', precio: 750, stock: 5, disponible: true },
  { nombre: 'Esquís Rossignol SL 165cm', precio: 750, stock: 2, disponible: true },
  { nombre: 'Esquís Head GS 193cm', precio: 850, stock: 3, disponible: true },
  { nombre: 'Esquís Head SL 165cm', precio: 850, stock: 3, disponible: true },
  { nombre: 'Esquís Volkl GS 193cm', precio: 1200, stock: 1, disponible: true },
  { nombre: 'Esquís Volkl SL 165cm', precio: 1200, stock: 1, disponible: true },
  { nombre: 'Esquís Fischer GS 193cm', precio: 950, stock: 0, disponible: false },
  { nombre: 'Esquís Fischer SL 165cm', precio: 950, stock: 2, disponible: true },
  { nombre: 'Esquís Atomic GS 193cm', precio: 1050, stock: 4, disponible: true },
  { nombre: 'Esquís Atomic SL 165cm', precio: 1050, stock: 2, disponible: true },
]);

watch(
  () => productos.map(p => p.stock),
  (newStock) => {
    newStock.forEach((stock, index) => {
      productos[index].disponible = stock > 0;
    });
  },
  { deep: true }
);