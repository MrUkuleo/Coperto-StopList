import { useState } from 'react'
import AddForm from './AddForm';

export default function ProductCard()
{
    const [isModalOpen, setIsModalOpen] = useState(false)

    return(
    <>
        <div className="card">
            <h3>Название блюда</h3>
            <h4>Категория</h4>
            <p>Цена</p>
            <p>Осталось: Х шт.</p>
            <button onClick={() => setIsModalOpen(true)}>Добавить в стоп-лист</button>
            
            {isModalOpen && (
              <AddForm onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    </>
    );
}