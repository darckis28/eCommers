import { Datos } from "./base.js";

const crearNewProducto = (img, nombre, costo) => {
  const producto = document.createElement("li");
  producto.classList.add("producto__item");
  const contenido = `
    <li class="producto__item">
       <img src="${img}" class="producto__img" alt="${nombre}">
       <h3 class="producto__nombre">${nombre}</h3>
       <span class="producto__precio">$${costo}.00</span>
       <a href="#" class="producto__link">Ver producto</a>                
    </li>
  `;
  producto.innerHTML = contenido;
  return producto;
};
const posters = document.querySelector("[data-catPoster]");
const tasas = document.querySelector("[data-catTasas]");
const diversos = document.querySelector("[data-catDiver]");

Datos.createPoducts()
  .then((data) => {
    data.forEach(({ categoria, nombre, precio, img }) => {
      categoria === "poster" && posters.children.length < 6
        ? posters.appendChild(crearNewProducto(img, nombre, precio))
        : "";
      categoria === "tasas" && tasas.children.length < 6
        ? tasas.appendChild(crearNewProducto(img, nombre, precio))
        : "";
      categoria === "diversos" && diversos.children.length <6
        ? diversos.appendChild(crearNewProducto(img, nombre, precio))
        : "";
    });
  })
  .catch((err) => {
    const errorDeProductos = document.querySelector("[data-container-categoria]");
    errorDeProductos.innerHTML=`
    <p class="error">☢☢ Ocurrio algo vuelva luego ☢☢</p>
    `
  });
