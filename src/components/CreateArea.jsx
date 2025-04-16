import React, { useState } from "react";

function CrearArea(props) {
  const [nota, setNota] = useState({
    title: "",
    content: "",
  });

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setNota((prevNota) => ({
      ...prevNota,
      [name]: value,
    }));
  }

  function enviarNota(evento) {
    evento.preventDefault();
    if (nota.title.trim() || nota.content.trim()) {
      props.onAdd(nota);
      setNota({ title: "", content: "" });
    }
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={manejarCambio}
          value={nota.title}
          placeholder="Escribe el titulo de la nota"
        />
        <textarea
          name="content"
          onChange={manejarCambio}
          value={nota.content}
          placeholder="Escribe el contenido de la nota"
          rows="3"
        />
        <button onClick={enviarNota}>+</button>
      </form>
    </div>
  );
}

export default CrearArea;
