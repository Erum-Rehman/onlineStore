import React, {useContext} from "react";
import Slider from './Slider';
import CartContextProvider, {CartContext} from './CartContext'
import ProductsContextProvider, {ProductsContext} from "./ProductsContext";
const Products = () => {
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext)
    
    return (
        <>
        <Slider />
            <div className="Feature">
                 <h1>
                    Featured Products</h1>
                </div>
            <div className="container">
            <div className="products">
               
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        
                        <div className="product-image">
                            <img src={product.image} alt="not found"/>
                        </div>
                        <div className="product-details">
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="product-price">
                                ${product.price}.00
                            </div>
                            </div>
                            
                            <div className="add-cart" onClick={() => dispatch({type:
                            'ADD_TO_CART', id: product.id, product})}>
                                Add to Cart</div>
                            {product.status === "hot" ? <div className="hot">hot</div>: ''}
                            {product.status === "new" ? <div className="new">new</div>: ''}
                        </div>  
                    
                ))}
            </div>
            </div>
        </>
    )
}

export default Products;