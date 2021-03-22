import React, { useState, useEffect} from "react";

export const Teste3 = () => {

  const [contador, setContador] = useState(0);
  
  useEffect(() => {
    console.log("useEffect rodou");

    return () => console.log("desmontando...")
  }, [contador]);


  return (
    <div>
      <p>Você clicou {contador} vezes!</p>
      <button onClick={() => setContador(contador + 1)}>Me clica!</button>
    </div>
  );

  return <div></div>;
};
