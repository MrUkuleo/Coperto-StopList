import "../styles/Menu.css"

export default function StopList()
{
    return (    
    <section className='panel'>
        <h2>СТОП-ЛИСТ</h2>
        <div className="menu">
            <div className="search">
                <input placeholder="Поиск..."></input>
                <button>Q</button>
            </div>
            <h3>СПИСОК ПУСТ</h3>
            <div className="cards-container">
            </div>
        </div>
    </section>
    )
}