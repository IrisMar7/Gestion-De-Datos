
let productos = {
    producto1: { id: 1, nombre: "Teclado", precio: 100 },
    producto2: { id: 2, nombre: "Mouse", precio: 50 },
    producto3: { id: 3, nombre: "Monitor", precio: 500 }
};

// Convertimos a un array primero, luego a un Set
let productosArray = Object.values(productos);
let productosSet = new Set(productosArray);

// Crear un Map con categorías
let categorias = new Map();
categorias.set("Periférico", "Teclado");
categorias.set("Accesorio", "Mouse");
categorias.set("Pantalla", "Monitor");

// Recorrer el objeto con for...in
console.log("Recorriendo objeto productos con for...in:");
for (let clave in productos) {
    console.log(clave, productos[clave]);
}

// Recorrer el Set con for...of
console.log("\nRecorriendo Set de productos con for...of:");
for (let prod of productosSet) {
    console.log(prod);
}

// Recorrer el Map con forEach
console.log("\nRecorriendo Map de categorías con forEach:");
categorias.forEach((valor, clave) => {
    console.log(`Categoría: ${clave}, Producto: ${valor}`);
});

// Validaciones y pruebas
console.log("\nValidaciones y pruebas:");

// a. Mostrar todos los productos del objeto
console.log("\nProductos (objeto):", productos);

// b. Mostrar productos únicos del Set
console.log("\nProductos únicos (Set):");
productosSet.forEach(producto => console.log(producto));

// c. Mostrar categorías y nombres del Map
console.log("\nCategorías y nombres del Map:");
categorias.forEach((valor, clave) => console.log(`Categoría: ${clave}, Producto: ${valor}`));
