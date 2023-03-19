import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../../Components/Navbar/Navbar'
import "./WishList.css"

const WishlistCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart.products)
  console.log('cart:', cart)

  return (
    <>
      <Navbar />
      <div className="wishlistContainer">
        {
          cart.length > 0 && cart.map((el) => {
            console.log('el:', el)
            return (
              <div className="wishItem" key={el._id}>
                <img src={el.data.image} alt="" />

              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default WishlistCart