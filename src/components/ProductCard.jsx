import { useState, useEffect } from 'react'

const url = 'https://fakestoreapi.com/products/';

const ProductCard = ({id}) => {
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`${url}${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])

    return (
        <div>
            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            )}
        </div>
    )
}

export default ProductCard;