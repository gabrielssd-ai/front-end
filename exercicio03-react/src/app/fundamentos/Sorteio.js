export default function Sorteio() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   

  
    return (
      <>
        <h2>Número Sorteado</h2>
        <p>{numeroAleatorio}</p>
      

      </>
    );
  }
  