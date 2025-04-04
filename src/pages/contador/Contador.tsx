import { useState } from "react";

function Contador() {
  // let num = 0; -> não funciona

  const[num, setNumero] = useState(0);

  function somar() {
    setNumero(num + 1);
   
  }

  return (
    <div>
      <h2>Componente Contador</h2>
      <p>O numero atual é: {num}</p>
      <button onClick={somar}>Aumentar +1 </button>
    </div>
  )
}

export default Contador