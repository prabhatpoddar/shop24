import { Button, CloseButton, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import MoveToBagModel from './MoveToBagModel'
import "./WishList.css"

const WishlistCart = () => {
  const cart = useSelector(store => store.cart.products)
  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="noDataCart">
        <Heading size='xl'>YOUR WISHLIST IS EMPTY</Heading>
        <Text>Add items that you like to your wishlist. Review</Text>
        <Text>them anytime and easily move them to the bag.</Text>
        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />

          <Link to="/">
            <Button variant='outline' colorScheme="linkedin">CONTINUE SHOPPING</Button>
          </Link>
        </div>
      </>
    )
  }
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
                  <MoveToBagModel data={el.data} />
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