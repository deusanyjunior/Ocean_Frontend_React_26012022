import Semana from "./Semana";

function Mes({mes,ano}) {
    return (
      <div>
        <p>{mes}/{ano}</p>
        <div>
          <button className="dia">Dom</button>
          <button className="dia">Seg</button>
          <button className="dia">Ter</button>
          <button className="dia">Qua</button>
          <button className="dia">Qui</button>
          <button className="dia">Sex</button>
          <button className="dia">Sab</button>
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