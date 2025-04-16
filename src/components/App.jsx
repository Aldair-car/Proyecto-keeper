import React, { useState } from "react";
import Encabezado from "./Header";
import PieDePagina from "./Footer";
import Nota from "./Note";
import CrearArea from "./CreateArea";

function App() {
  const [notas, setNotas] = useState([]);

  function agregarNota(nuevaNota) {
    const fecha = new Date();
    const opcionesFecha = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const fechaFormateada = fecha.toLocaleDateString("es-ES", opcionesFecha);
    const hora = fecha.toLocaleTimeString("es-ES");
    const caracteres = nuevaNota.content.length;

    const notaCompleta = {
      ...nuevaNota,
      fecha: fechaFormateada,
      hora: hora,
      caracteres: caracteres,
    };

    setNotas((prevNotas) => [...prevNotas, notaCompleta]);
  }

  function eliminarNota(id) {
    setNotas((prevNotas) => prevNotas.filter((_, index) => index !== id));
  }

  function editarNota(id, nuevaNota) {
    setNotas((prevNotas) =>
      prevNotas.map((nota, index) => (index === id ? nuevaNota : nota))
    );
  }

  return (
    <div>
      <Encabezado />
      <CrearArea onAdd={agregarNota} />

      {/* Contenedor de notas en columnas */}
      <div className="notas-contenedor">
        {notas.map((nota, index) => (
          <Nota
            key={index}
            id={index}
            nota={nota}
            onEliminar={eliminarNota}
            onEditar={editarNota}
          />
        ))}
      </div>

      <PieDePagina />
    </div>
  );
}

export default App;
