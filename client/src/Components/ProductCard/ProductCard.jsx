import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import cards from './productCard.module.css'
import React from 'react'
const ProductCard = ({ image, rating, count, name, brand, price, off_price, direction }) => {

  return (
    <Link to={`/singlepage/${direction}`}>
      <div className={cards.product_main_container}  >

        <div className={cards.product_image_container} >
          <img src={image} alt="" className={cards.product_image} />

        </div>
        <div>
          <div className={cards.product_rating}> <p className={cards.first_p}><StarIcon color="yellow" />{rating}</p> &nbsp; | <p>{count}</p>  </div>

          <h3 className={cards.product_brand}>{brand}</h3>
          <p className={cards.product_name}>{name}</p>
          <div className={cards.price_container}> <p className={cards.on_price}>Price:{price}</p> <p className={cards.off_price}>{off_price}</p></div>

        </div>

      </div></Link>
  )
}
const checkEquality = (prev, current) => {
  console.log('prev,current:', prev, current)

}

export default React.memo(ProductCard, checkEquality)
