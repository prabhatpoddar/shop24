import { Button, CloseButton, Heading, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { removeProductCart } from '../../redux/CartRedux'
import MoveToBagModel from './MoveToBagModel'
import "./WishList.css"

const WishlistCart = () => {
  const toast2 = useToast({
    position: 'top',
  })
  const dispatch = useDispatch()
  const cart = useSelector(store => store.cart.products)
  console.log('cart:', cart)
  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="noDataCart">
          <Heading size='lg'>YOUR WISHLIST IS EMPTY</Heading>
          <Text>Add items that you like to your wishlist. Review</Text>
          <Text>them anytime and easily move them to the bag.</Text>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png" alt="" />

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
          cart.length > 0 && cart.map((el, i) => {
            const { image, name, price, off_price ,_id} = el.data

            return (
              <div className="wishItem" key={_id}>
                <div className="imageContainer">
                  <CloseButton size='lg' className='closeBtn' onClick={() => {
                    dispatch(removeProductCart(_id))
                    toast2({
                      title: `Cart Deleted`,
                      status: "info",
                      isClosable: true,
                    })
                  }} />

                  <img src={image} alt="" />
                </div>
                <div className="details">
                  <p>{name}</p>
                  <div className='price'>
                    Rs.{price} <p className='offPrice'>{off_price}</p>
                  </div>

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