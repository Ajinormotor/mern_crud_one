import Navbar from '@/common/Navbar'
import ProductCard from '@/common/ProductCard'
import { useProductStore } from '@/store/product'
import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomeIndex = () => {

const {fetchProducts, products} = useProductStore()

useEffect( () => {
  fetchProducts()
},[fetchProducts])

console.log('ALL Product', products)

  return (
<section className='w-full flex items-center justify-center p-3 md:p-10'>

  {
    products 
     &&    ( <div className="grid grid-cols-1 md:grid-cols-2
     lg:grid-cols-3 w-full justify-items-center gap-3">
 {
  products.map((p) => (
    <div  className=''>
<ProductCard  key={p.id}  p={p}  />
    </div>
  ))

 }

  </div>)
 }
 
 
 {products.length === 0 && (
  <div className="flex flex-col items-center justify-center text-white mt-10 w-full">
    <h1 className="text-2xl font-semibold mb-2">No products found 😔</h1>
    <Link
    to="/create"
      className="text-blue-400 underline hover:text-blue-600 transition-all"
    >
      Click here to create one
    </Link>
  </div>
)}


</section>
  )
}

export default HomeIndex