import './Dia.css'

function Dia({data}) {
    return (
      <button className="dia">
        {
          (data > 0 && data < 32 ? data : '-')
        }
      </button>
    )
  }

  export default Dia;