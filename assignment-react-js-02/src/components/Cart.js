import React, {useState, useEffect} from 'react'

function Cart({products, itemNum}) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems([...cartItems, products])
    }, [itemNum]);

    const handleClick = (index) => {
        cartItems.splice(index, 1);
        setCartItems([...cartItems]);
    }

  return (
    <div>
        {cartItems.length < 1 ? (
            <div>There are no items in your cart!</div>
        ):(
            <div>{
                cartItems.map((item, key) => (
                    <div key={key}>
                        <div>{item} <button onClick={() => handleClick(key)}>Remove Item</button></div>
                    </div>
                ))
            }</div>
        )}
    </div>
  )
}

export default Cart