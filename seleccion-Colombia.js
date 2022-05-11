// Objeto de la selección, constructor
const seleccionColombia = (nombre, edad, posicion, experiencia, paradas) => {
  return {
    nombre,
    edad,
    posicion,
    experiencia,
    superpoder() {
      console.log(`Hago ${paradas} que encantan al público.`);
    },
    identificacion() {
      console.log(`Yo soy ${nombre} y juego de ${posicion}.`);
    },
  };
};

const pibe = seleccionColombia(
  "'Pibe' Valderrama",
  34,
  "mediocampista",
  17,
  "pases espectaculares"
);

pibe.identificacion();
pibe.superpoder();

const mondragon = seleccionColombia(
  "Farid Mondragón",
  26,
  "arquero",
  8,
  "narraciones horribles pero atajadas asombrosas"
);

mondragon.identificacion();
mondragon.superpoder();
