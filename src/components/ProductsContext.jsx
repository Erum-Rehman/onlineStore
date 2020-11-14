import React, {createContext, useState} from "react";

import mjac2 from '../Images/mjac2.jpg'
import wjac2 from '../Images/wjac2.jpg'
import mjac1 from '../Images/mjac1.jpg'
import watch4 from '../Images/watch4.jpg'
import watch1 from '../Images/watch1.jpg'
import watch3 from '../Images/watch3.jpg'
import mshoe7 from '../Images/mshoe7.jpg'
import wshoe3 from '../Images/wshoe3.jpg'
import wshoe8 from '../Images/wshoe8.jpg'

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    {id: 1, name: 'Jacket', price: 25, image:wjac2, status: "new"},
    {id: 1, name: 'Men Jacket', price: 30, image:mjac2, status: "hot"},
    {id: 2, name: 'Jacket', price: 35, image:mjac1, status: "hot"},
    {id: 1, name: 'Watch', price: 15, image:watch4, status: "new"},
    {id: 3, name: 'Watch', price: 25, image:watch1, status: "new"},
    {id: 4, name: 'Watch', price: 35, image:watch3, status: "new"},
    {id: 5, name: 'Shoes', price: 20, image:mshoe7, status: "new"},
    {id: 7, name: 'Sandals', price: 40, image:wshoe3, status: "hot"},
    {id: 8, name: 'Shoes', price: 20, image:wshoe8, status: "new"}
  ]);
    return (
        <ProductsContext.Provider value={{products:[...products]}}>
          {props.children}
        </ProductsContext.Provider>
      )
}

export default ProductsContextProvider;