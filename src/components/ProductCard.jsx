import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const url = 'https://fakestoreapi.com/products/';

const ProductCard = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const cargarLista =  async () => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error al cargar los productos');
            }
            const data = await res.json();
            setProducts(data); 
        } catch (error) {
            setError(error.message); 
        } finally {
            setLoading(false); 
        }
    } 

    useEffect(() => {
        cargarLista()
    },[])

    if (loading) {
        return <div>Cargando productos...</div>; 
    }

    if (error) {
        return <div>Error: {error}</div>; 
    }

    return (
        <>

        <Carousel>
           {
               products.map( (producto) => 
                  <Paper key={producto.id}>
                      <h2>{producto.title}</h2>
                      <img src={producto.image} alt={product.title} />
                      <p>{product.description}</p>
                      <p>Precio: ${product.price}</p>
                      <Button className="CheckButton">
                          Check it out!
                      </Button>
                  </Paper>
               )
           }
       </Carousel>

        </>
    )
}

export default ProductCard;