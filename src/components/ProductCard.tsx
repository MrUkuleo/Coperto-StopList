import { useState } from 'react'
import AddForm from './AddForm';

type Product = {
    name: string,
    categorie: string,
    price: number,
    amount: number
}

export default function ProductCard({ product }: { product: Product })
{
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="card">
            <h3>{product.name}</h3>
            <h4>{product.categorie}</h4>
            <p>{product.price} ₽</p>
            <p>Осталось: {product.amount} шт.</p>
            <button onClick={() => setIsModalOpen(true)}>Добавить в стоп-лист</button>    
            {isModalOpen && <AddForm dishName={product.name} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}