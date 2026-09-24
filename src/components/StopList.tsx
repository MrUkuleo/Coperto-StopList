import "../styles/Menu.css"

export default function StopList()
{
    
    return (    
    <>
        <h2>СТОП-ЛИСТ</h2>
        <div className="menu">
            <input placeholder="Поиск..."></input>
            <button>Q</button>
            <h3>СПИСОК ПУСТ</h3>
            <div className="cards-container">
            </div>
        </div>
    </>
    )
}