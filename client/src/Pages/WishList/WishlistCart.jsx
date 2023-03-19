import { Button, CloseButton } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../../Components/Navbar/Navbar'
import MoveToBagModel from './MoveToBagModel'
import "./WishList.css"

const WishlistCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart.products)
  console.log('cart:', cart)

  return (
    <>
      <Navbar />
     <div className="MyWishlist">
     <h3>My Wishlist</h3>
     <p>{cart.length} Item</p>
     </div>
      <div className="wishlistContainer">
        {
          cart.length > 0 && cart.map((el) => {
            const { image, name, price, off_price } = el.data

            return (
              <div className="wishItem" key={el._id}>
                <div className="imageContainer">
                 <CloseButton size='lg' className='closeBtn' />

                  <img src={image} alt="" />
                </div>
                <div className="details">
                  <p>{name}</p>
                  <p className='price'>
                    Rs.{price} <p className='offPrice'>{off_price}</p>
                  </p>

                </div>
                <div className="moveBag">
                 <MoveToBagModel data={el.data}/>
                </div>


              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default WishlistCart