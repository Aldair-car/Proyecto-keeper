import React, { useState } from "react";

function Nota({ nota, id, onEliminar, onEditar }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [notaEditada, setNotaEditada] = useState({
    title: nota.title,
    content: nota.content,
  });

  function manejarCambio(event) {
    const { name, value } = event.target;
    setNotaEditada((prevNota) => ({
      ...prevNota,
      [name]: value,
    }));
  }

  function guardarCambios() {
    const fecha = new Date();
    const opcionesFecha = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const fechaFormateada = fecha.toLocaleDateString("es-ES", opcionesFecha);
    const hora = fecha.toLocaleTimeString("es-ES");

    const notaActualizada = {
      ...notaEditada,
      fecha: fechaFormateada,
      hora: hora,
      caracteres: notaEditada.content.length,
    };

    onEditar(id, notaActualizada);
    setModoEdicion(false);
  }

  return (
    <div className="note">
      {modoEdicion ? (
        <>
          <input
            type="text"
            name="title"
            value={notaEditada.title}
            onChange={manejarCambio}
          />
          <textarea
            name="content"
            value={notaEditada.content}
            onChange={manejarCambio}
          />
          <div className="botones-edicion">
            <button className="boton-accion" onClick={guardarCambios}>
              ✔
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>{nota.title}</h1>
          <p>{nota.content}</p>
          <p>
            <small>
              {nota.fecha} - {nota.hora}
            </small>
          </p>
          <p>
            <small>Caracteres: {nota.caracteres}</small>
          </p>
          <div className="botones-edicion">
            <button
              className="boton-accion"
              onClick={() => setModoEdicion(true)}
            >
              ✏️
            </button>
            <button className="boton-accion" onClick={() => onEliminar(id)}>
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Nota;
