import { crearNewProducto } from "./CrearProductos.js";
import { Datos } from "./base.js";
const posterCompl = document.querySelector("[data-catTasasComplet]")
Datos.createPoducts()
  .then((data) => {
    data.forEach(({ categoria, nombre, precio, img }) => {
      categoria === "poster" 
        ? posterCompl.appendChild(crearNewProducto(img, nombre, precio))
        : "";
    });
  })
  .catch((err) => {
    console.log(err);
  });