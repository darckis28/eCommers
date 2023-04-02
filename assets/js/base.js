const createPoducts = () => {
  return fetch("http://localhost:3000/producto").then((data) => data.json());
};
const registrarProducto = (nombre, categoria, img, precio, descripcion) => {
  return fetch("http://localhost:3000/producto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      categoria,
      img,
      precio,
      descripcion,
      id: uuid.v4(),
    }),
  });
};

export const Datos = {
  createPoducts,
  registrarProducto,
};
