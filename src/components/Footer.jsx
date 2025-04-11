import React from "react";

const date = new Date().getFullYear();
function footer() {
  return (
    <footer>
      <p>&copy; Keeper {date}</p>
    </footer>
  );
}

export default footer;
