import { Datos } from "../js/base.js";

const formRegisterProduct = document.querySelector("[data-form-register]");
formRegisterProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombProd = document.querySelector("[data-nombre-prod]").value;
  const categProd = document.querySelector("[data-categoria-prod]").value;
  const imgProd = document.querySelector("[data-img-prod]").value;
  const precioProd = document.querySelector("[data-precio-prod]").value;
  const descripProd = document.querySelector("[data-descrip-prod]").value;
  Datos.registrarProducto(nombProd, categProd, imgProd, precioProd, descripProd)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
