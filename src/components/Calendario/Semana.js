import Dia from "./Dia";

function Semana({diaInicial}) {
    return (
      <div>
        <Dia data={diaInicial + 0} />
        <Dia data={diaInicial + 1} />
        <Dia data={diaInicial + 2} />
        <Dia data={diaInicial + 3} />
        <Dia data={diaInicial + 4} />
        <Dia data={diaInicial + 5} />
        <Dia data={diaInicial + 6} />
      </div>
    )
  }

  export default Semana;