import React from "react";

const year = new Date().getFullYear();

function PieDePagina() {
  return (
    <footer>
      <p>&copy; Keeper {year}</p>
    </footer>
  );
}

export default PieDePagina;
