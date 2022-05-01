import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { title, price, category, id, image } = product
        return (
            <div className="card" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card__body">
                        <img src={image} class="card__image" alt={title} />
                        <h2 className="card__title">{title}</h2>
                        <div className="meta price">$ {price}</div>
                        <p className="card__description">{category}</p>
                    </div>
                </Link>
            </div>
        )
    })


    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent