import css from './filter.module.css'
import { Checkbox, Stack, Radio, RadioGroup } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Filter = ({ one, two, three, four, five, six, seven }) => {

  const [searchParams, setSearchParams] = useSearchParams()


  const initialcategory = searchParams.getAll("category")
  const initialsort = searchParams.getAll("sort")
  const [category, setCategory] = useState(initialcategory || [])
  const [sort, setSort] = useState(initialsort[0] || '')



  const handleCheckBox = (e) => {

    const newCategory = [...category]

    if (newCategory.includes(e.target.value)) {

      newCategory.splice(newCategory.indexOf(e.target.value))
    } else {

      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }
  useEffect(() => {

    let params = {}

    params.category = category
    sort && (params.sort = sort)

    setSearchParams(params)


  }, [category, setSearchParams, sort])

  const Handlesort = (e) => {

    setSort(e.target.value)

  }

  return (
    <div className={css.filter_section} >
      <div className={css.price_filter}>
        <span>Sort By Price</span>
        <RadioGroup >
          <Stack spacing={2} direction='column' onChange={Handlesort} >
            <Radio value="asc" defaultChecked={sort === "asc"} colorScheme="red" borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)" >Low to High</ Radio>
            <Radio value="desc" defaultChecked={sort === "desc"} colorScheme="red" borderColor="rgb(187, 186, 186)" color="rgb(187, 186, 186)"> High to Low</ Radio>


          </Stack>
        </RadioGroup>
      </div>
      <div className={css.brand_filter} >
        <span>BRAND</span>
        <Checkbox value={one} checked={category.includes("Roadster")} onChange={handleCheckBox} colorScheme="red" color="#55555" borderColor="rgb(187, 186, 186);" >{one}</Checkbox >
        <Checkbox value={two} checked={category.includes("H&M")} colorScheme="red" onChange={handleCheckBox} color="#55555" borderColor="rgb(187, 186, 186);" >{two} </Checkbox >
        <Checkbox value={three} checked={category.includes("HRX by Hrithik Roshan")} onChange={handleCheckBox} color="#55555" colorScheme="red" borderColor="rgb(187, 186, 186);" >{three}</Checkbox >
        <Checkbox value={four} colorScheme="red" checked={category.includes("HERE&NOW")} onChange={handleCheckBox} color="#55555" borderColor="rgb(187, 186, 186);" > {four}</Checkbox >
        <Checkbox value={five} colorScheme="red" checked={category.includes("Huetrap")} onChange={handleCheckBox} color="#55555" borderColor="rgb(187, 186, 186);" >{five}</Checkbox >
        <Checkbox value={six} colorScheme="red" checked={category.includes("WROGN")} onChange={handleCheckBox} color="#55555" borderColor="rgb(187, 186, 186);" > {six}</Checkbox >

        <Checkbox value={seven} colorScheme="red" checked={category.includes("Urbano Fashion")} onChange={handleCheckBox} color="#55555" borderColor="rgb(187, 186, 186);" > {seven}</Checkbox >

      </div>




    </div>
  )
}

export default React.memo(Filter)