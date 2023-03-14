'use client'
import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'

const Context = createContext()

export default function StateContext({ children }) {
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [cartItems, setCartItems] = useState([])

  let exists

  const onAdd = (prod, qty) => {
    const checkProduct = cartItems.find((item) => item._id === prod._id)

    setTotalPrice((prevPrice) => prevPrice + prod.price * qty)
    setTotalQuantities((prevQuantities) => prevQuantities + qty)

    if (checkProduct) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === prod._id) {
          return {
            ...cartProduct,
            qty: cartProduct.qty + qty,
          }
        } else {
          return cartProduct
        }
      })
      setCartItems(updatedCartItems)
    } else {
      prod.qty = qty
      setCartItems([...cartItems, { ...prod }])
    }
    setQuantity(1)
    toast.success(`${quantity} ${prod.name} added to your cart`)
  }

  // remove
  const deleteProduct = (prod) => {
    exists = cartItems.find((i) => i._id === prod._id)

    const newCartItems = cartItems.filter((item) => item._id !== prod._id)
    setTotalPrice((prevPrice) => prevPrice - exists.price * exists.qty)
    setTotalQuantities((prevQty) => prevQty - exists.qty)
    setCartItems(newCartItems)
  }

  // increase - decrease quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev - 1 < 1) return 1

      return prev - 1
    })
  }

  return (
    <Context.Provider
      value={{
        quantity,
        setQuantity,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        totalQuantities,
        totalPrice,
        cartItems,
        deleteProduct,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
