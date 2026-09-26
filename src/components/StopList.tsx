import "../styles/Menu.css"
import Search from "./Search"
import StopListCard from "./StopListCard"

export default function StopList()
{
    return (    
    <section className='panel'>
        <h2>СТОП-ЛИСТ</h2>
        <div className="menu">
            <Search/>
            <h3 id="stoplist-items-count">СПИСОК ПУСТ</h3>
            <hr/>
            <div className="stoplist-cards-container">
                <StopListCard product={{ name: "Пример блюда", time: "12:00", reason: "Необходимо заменить ингредиенты", comment: "Тестовый комментарий" }} />
                <StopListCard product={{ name: "Пример блюда", time: "12:00", reason: "Необходимо заменить ингредиенты", comment: "Тестовый комментарий" }} />
                <StopListCard product={{ name: "Пример блюда", time: "12:00", reason: "Необходимо заменить ингредиенты", comment: "Тестовый комментарий" }} />
            </div>
        </div>
    </section>
    )
}