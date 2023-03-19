import css from './filter.module.css'
import { Stack, Radio, RadioGroup } from '@chakra-ui/react'
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
            <Radio value="des" colorScheme="red" > Ascending</ Radio>
            <Radio value="asc" colorScheme="red"  >Descending</ Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className={css.brand_filter} >
        <span>BRAND</span>
        <RadioGroup>
          <Stack direction='column'>
            <Radio value={one} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(one)}      >  {one}   </ Radio>
            <Radio value={two} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(two)}      >  {two}        </ Radio>
            <Radio value={three} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(three)} >{three}        </ Radio>
            <Radio value={four} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(four)}    >{four}        </ Radio>
            <Radio value={five} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(five)}    >{five}            </ Radio>
            <Radio value={six} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(six)}     >  {six}       </ Radio>
            <Radio value={seven} colorScheme="red" className={css.filterHover} onChange={() => handleCheckBox(seven)} >{seven}       </ Radio>
          </Stack>
        </RadioGroup>
      </div>
    </div>
  )
}

export default React.memo(Filter)