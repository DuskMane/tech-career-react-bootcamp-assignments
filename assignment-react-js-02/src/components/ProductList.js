import React, {useState} from 'react'
import Cart from './Cart';

function ProductList() {
    const products = ['Eggs', 'Bread', 'Cheese', 'Olive Oil', 'Pasta', 'Cookies'];
    const [addToCart, setAddToCart] = useState('');
    const [itemNum, setItemNum] = useState(0);

    const handleClick = (productName) => {
        setAddToCart(productName);
        setItemNum(itemNum+1);
    }


  return (
    <div>
        <h1>PRODUCTS</h1>
        {products.map((product, key) => (
        <div key={key}>
            <div>{product}  
            <button onClick={() => handleClick(product)}>Add Item</button>
            </div>
        </div>
        ))}
        <hr />
        <h1>CART</h1>
        <Cart products={addToCart} itemNum={itemNum}/>
    </div>
  )
}

export default ProductList