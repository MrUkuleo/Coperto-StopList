import "../styles/Menu.css"
import ProductCard from './ProductCard'

function onCategorySelected()
{
    
}

export default function MenuList()
{
    return (
    <>
        <h2>МЕНЮ</h2>
        <div className="menu">
            <input placeholder="Поиск..."></input>
            <button>Q</button>

            <h4>Категории:</h4>
            <ul>
                <li>
                    <input type="checkbox" id="all" onSelect={onCategorySelected}></input>
                    <label>Все</label>
                </li>
                <li>
                    <input type="checkbox" id="kitchen" onSelect={onCategorySelected}></input>
                    <label>Кухня</label>
                </li>
                <li>
                    <input type="checkbox" id="bar" onSelect={onCategorySelected}></input>
                    <label>Бар</label>
                </li>
                <li>
                    <input type="checkbox" id="deserts" onSelect={onCategorySelected}></input>
                    <label>Десерты</label>
                </li>
            </ul>

            <div className="cards-container">
                <ProductCard/>
            </div>
        </div>
    </>
    )
}