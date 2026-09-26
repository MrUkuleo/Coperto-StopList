import "../styles/Menu.css"
import Search from "./Search"

export default function StopList()
{
    return (    
    <section className='panel'>
        <h2>СТОП-ЛИСТ</h2>
        <div className="menu">
            <Search/>
            <h3>СПИСОК ПУСТ</h3>
            <div className="cards-container">
            </div>
        </div>
    </section>
    )
}