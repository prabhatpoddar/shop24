import css from './filter.module.css'
import { Checkbox, Stack, Radio, RadioGroup } from '@chakra-ui/react'
import { useLocation, useSearchParams } from 'react-router-dom'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../redux/productRedux'

const Filter = ({ one, two, three, four, five, six, seven }) => {
  const dispatch=useDispatch()
  const location=useLocation()
  console.log( location)


  const [searchParams, setSearchParams] = useSearchParams()


  const initialCategory = searchParams.getAll("brand")
  const initialSort = searchParams.getAll("sort")
  const [category, setCategory] = useState(initialCategory || [])
  const [sort, setSort] = useState(initialSort[0] || '')



  const handleCheckBox = (value) => {


    const newCategory = [...category]

    if (newCategory.includes(value)) {

      newCategory.splice(newCategory.indexOf(value))
    } else {

      newCategory.push(value)
    }
    setCategory(newCategory)
    dispatch(fetchData(`product?brand=${value}`))

  }
  useEffect(() => {

    let params = {}

    params.category = category
    sort && (params.sort = sort)

    setSearchParams(params)


  }, [category, setSearchParams, sort])

  const handleSort = (e) => {

 if(location.pathname==="/mens"){
  dispatch(fetchData(`product?category=sweaters&sort=${e.target.value}`))
 }
 else if(location.pathname==="/womens"){
  dispatch(fetchData(`product?category=sarees&sort=${e.target.value}`))
 }
 else if(location.pathname==="/kids"){
  dispatch(fetchData(`product?category=kids&sort=${e.target.value}`))
 }
 else if(location.pathname==="/home&leaving"){
  dispatch(fetchData(`product?category=matress&sort=${e.target.value}`))
 }
 else if(location.pathname==="/beauty"){
  dispatch(fetchData(`product?category=oil&sort=${e.target.value}`))
 }


  }

  return (
    <div className={css.filter_section} >
      <div className={css.price_filter}>
        <span>Sort By Price</span>
        <RadioGroup >
          <Stack spacing={2} direction='column' onChange={handleSort} >
            <Radio value="asc" defaultChecked={sort === "asc"} colorScheme="red" borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >Low to High</ Radio>
            <Radio value="des" defaultChecked={sort === "des"} colorScheme="red" borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)"> High to Low</ Radio>


          </Stack>
        </RadioGroup>
      </div>
      <div className={css.brand_filter} >
        <span>BRAND</span>
        <Checkbox value={one} checked={category.includes(one)} onChange={()=>handleCheckBox(one)} colorScheme="red" color="#55555" borderColor="rgb(187, 186, 186);" >{one}</Checkbox >
        <Checkbox value={two} checked={category.includes(two)} colorScheme="red" onChange={()=>handleCheckBox(two)} color="#55555" borderColor="rgb(187, 186, 186);" >{two} </Checkbox >
        <Checkbox value={three} checked={category.includes(three)} onChange={()=>handleCheckBox(three)} color="#55555" colorScheme="red" borderColor="rgb(187, 186, 186);" >{three}</Checkbox >
        <Checkbox value={four} colorScheme="red" checked={category.includes(four)} onChange={()=>handleCheckBox(four)} color="#55555" borderColor="rgb(187, 186, 186);" > {four}</Checkbox >
        <Checkbox value={five} colorScheme="red" checked={category.includes(five)} onChange={()=>handleCheckBox(five)} color="#55555" borderColor="rgb(187, 186, 186);" >{five}</Checkbox >
        <Checkbox value={six} colorScheme="red" checked={category.includes(six)} onChange={()=>handleCheckBox(six)} color="#55555" borderColor="rgb(187, 186, 186);" > {six}</Checkbox >

        <Checkbox value={seven} colorScheme="red" checked={category.includes(seven)} onChange={()=>handleCheckBox(seven)} color="#55555" borderColor="rgb(187, 186, 186);" > {seven}</Checkbox >

      </div>


    </div>
  )
}

export default React.memo(Filter)