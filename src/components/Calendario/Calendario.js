import Mes from "./Mes";
import './Calendario.css';

function Calendario() {
    return (
      <div className="calendario">
        <p>Nosso Calendario</p>
        <Mes mes="Janeiro" ano="2022" />
      </div>
    )
  }

export default Calendario;