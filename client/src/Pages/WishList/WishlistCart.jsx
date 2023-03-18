import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../../Components/Navbar/Navbar'
import "./WishList.css"

const WishlistCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart)
  console.log('cart:', cart)

  return (
    <div>
      <Navbar />
      Whishlist
    </div>
  )
}

export default WishlistCart