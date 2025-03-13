Pablo Pérez Martínez  
Universidad Europea del Atlántico  
Programación Web II

## Práctica 1 
Simulación de inventario reactivo con vue

## Cómo ejecutar el proyecto: 
```sh
# Clonar el repositorio
git clone url
# Acceder a carpeta del proyecto
cd ski-shop
# Instalar dependencias
npm install
# Ejecutar el servidor
npm run dev
# Abrir en navegador -> localhost:5173
```


## Preguntas:
1. Vue no detecta cambios dentro de objetos reactivos de la forma que esperarías. ¿Cómo podrías observar un cambio en una propiedad anidada?  
Vue permite apreciar cambios en objetos reactivos usando watch() pero si una propiedad está anidada dentro de otro objeto, debe utilizarse la opción: { deep: true }, lo que permite que Vue escuche los cambios efectuados en los objetos internos.

3. watch() permite escuchar cambios en propiedades específicas dentro de reactive(), explica cómo funciona.  
Watch() observa reactivamente los cambios que se producen en valores dentro de reactive(). Si cambia una propiedad, la función callback se ejecuta, y recibe el nuevo valor y el antiguo.

4. ¿Cómo harías que un watch() detecte cambios en stock dentro de un array de productos?  
Para detectar cambios en el stock dentro de un array de productos, utilizo watch() y { deep: true }, para un mapeo del stock de cada producto y que Vue reaccione a los cambios internos, garantizando la detección de cambios en el stock de un producto dentro del array y que se actualice la disponibilidad.

