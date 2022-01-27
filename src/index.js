import React from "react";
import ReactDOM from "react-dom";

function Dia({data}) {
  return (
    <button>
      {
        (data > 0 && data < 32 ? data : '-')
      }
    </button>
  )
}

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

function Calendario() {
  return (
    <div>
      <p>Nosso Calendario</p>
      <Mes mes="Janeiro" ano="2022" />
    </div>
  )
}

ReactDOM.render(
  <Calendario />
  ,
  document.getElementById('root')
)