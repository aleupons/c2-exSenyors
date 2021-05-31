import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");
let senyoresMarcados = 0;

for (const { nombre, profesion, estado, twitter, foto, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");

  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const datosElemento = senyorElemento.querySelectorAll(".datos .valor-dato");
  const datos = [profesion, estado, twitter];
  let i = 0;
  for (const datoElemento of datosElemento) {
    datoElemento.textContent = datos[i];
    i++;
  }
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;

  const inicialElemento = senyorElemento.querySelector(".inicial");
  inicialElemento.textContent = getInicial(nombre);

  if (marcado) {
    senyoresMarcados++;
    const icono = senyorElemento.querySelector(".icono");
    icono.classList.remove("icono");
    icono.classList.add("icono-marcado");
    const avatar = senyorElemento.querySelector(".avatar");
    avatar.classList.remove("avatar");
    avatar.classList.add("avatar-marcado");
  }

  principal.append(senyorElemento);
}

const contador = document.querySelector(".senyoresMarcados");
contador.textContent = senyoresMarcados;

function getInicial(nombre) {
  return nombre.split(" ")[0].length < 3
    ? nombre.split(" ")[1].charAt(0)
    : nombre.split(" ")[0].charAt(0);
}
