import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import cards from './productCard.module.css'
import React from 'react'
import { Button } from '@chakra-ui/react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../redux/CartRedux'
const ProductCard = (data) => {
  const { image, rating, count, name, brand, price, off_price, direction } = data
  const [showWish, setShowWish] = useState(false)
  const [addWish, setAddWish] = useState(false)

  const dispatch = useDispatch()
  const addToWishlist = () => {
    dispatch(addProductCart({ data }))
    setAddWish(true)
  }
  return (
    <div className={cards.product_main_container} onMouseEnter={() => {
      setShowWish(true)
    }} onMouseLeave={() => {
      setShowWish(false)
    }} >

      <div className={cards.product_image_container} >
        <Link to={`/singlepage/${direction}`}>

          <img src={image} alt="" className={cards.product_image} />
        </Link>
        <Link to={`/singlepage/${direction}`}>

          <div className={cards.product_rating}> <p className={cards.first_p}><StarIcon color="yellow" />{rating}</p> &nbsp; |   <p>{count}</p>  </div>
        </Link>
        {
          showWish && <div className={cards.wishDiv} onClick={addToWishlist}> <Button>
            {
              addWish ? <AiFillHeart fontSize="20px" className={cards.FillHeart} /> : <AiOutlineHeart fontSize="20px" />
            }
            <p>WISHLIST</p>

          </Button></div>
        }

      </div>
      <Link to={`/singlepage/${direction}`}>

        <div className={cards.product_Details} >

          <h3 className={cards.product_brand}>{brand}</h3>
          <p className={cards.product_name}>{name}</p>
          <div className={cards.price_container}> <p className={cards.on_price}>Price:{price}</p> <p className={cards.off_price}>{off_price}</p></div>

        </div>
      </Link>

    </div>
  )
}
const checkEquality = (prev, current) => {
  console.log('prev,current:', prev, current)

}

export default React.memo(ProductCard, checkEquality)
