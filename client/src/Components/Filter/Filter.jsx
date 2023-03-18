import css from './filter.module.css'
import {  Stack, Radio, RadioGroup } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/productRedux'

const Filter = ({ one, two, three, four, five, six, seven }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const handleCheckBox = (value) => {
    dispatch(fetchData(`product?brand=${value}`))
  }
  const handleSort = (e) => {
    if (location.pathname === "/mens") {
      dispatch(fetchData(`product?category=sweaters&sort=${e.target.value}`))
    }
    else if (location.pathname === "/womens") {
      dispatch(fetchData(`product?category=sarees&sort=${e.target.value}`))
    }
    else if (location.pathname === "/kids") {
      dispatch(fetchData(`product?category=kids&sort=${e.target.value}`))
    }
    else if (location.pathname === "/home&leaving") {
      dispatch(fetchData(`product?category=matress&sort=${e.target.value}`))
    }
    else if (location.pathname === "/beauty") {
      dispatch(fetchData(`product?category=oil&sort=${e.target.value}`))
    }
  }

  return (
    <div className={css.filter_section} >
      <div className={css.price_filter}>
        <span>Sort By Price</span>
        <RadioGroup >
          <Stack spacing={2} direction='column' onChange={handleSort} >
            <Radio value="asc" colorScheme="red" borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >Low to High</ Radio>
            <Radio value="des" colorScheme="red" borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)"> High to Low</ Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className={css.brand_filter} >
        <span>BRAND</span>
        <RadioGroup>
          <Stack direction='column'>
            <Radio value={one} colorScheme="red" name='brand' onChange={() => handleCheckBox(one)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >  {one}   </ Radio>
            <Radio value={two} colorScheme="red" name='brand' onChange={() => handleCheckBox(two)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >  {two}        </ Radio>
            <Radio value={three} colorScheme="red" name='brand' onChange={() => handleCheckBox(three)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >{three}        </ Radio>
            <Radio value={four} colorScheme="red" name='brand' onChange={() => handleCheckBox(four)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >{four}        </ Radio>
            <Radio value={five} colorScheme="red" name='brand' onChange={() => handleCheckBox(five)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >{five}            </ Radio>
            <Radio value={six} colorScheme="red" name='brand' onChange={() => handleCheckBox(six)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >  {six}       </ Radio>
            <Radio value={seven} colorScheme="red" name='brand' onChange={() => handleCheckBox(seven)} borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >{seven}       </ Radio>
          </Stack>
        </RadioGroup>
      </div>
    </div>
  )
}

export default React.memo(Filter)