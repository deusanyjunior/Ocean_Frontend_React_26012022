import Semana from "./Semana";

function Mes({mes,ano}) {
    return (
      <div>
        <p>{mes}/{ano}</p>
        <div>
          <button>Dom</button>
          <button>Seg</button>
          <button>Ter</button>
          <button>Qua</button>
          <button>Qui</button>
          <button>Sex</button>
          <button>Sab</button>
        </div>
        <Semana diaInicial={-5} />
        <Semana diaInicial={2}/>
        <Semana diaInicial={9}/>
        <Semana diaInicial={16}/>
        <Semana diaInicial={23}/>
        <Semana diaInicial={30}/>
      </div>
    )
  }

export default Mes;