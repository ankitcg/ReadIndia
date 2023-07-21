import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='flex text-lg font-medium cursor-pointer justify-center my-5 border-b-2'>
        <Link to='/motivationalbooks'><h1 className='mx-10'>Motivational Books</h1></Link> 
        <h1 className='mx-10'>Best Sellers Books</h1>
        <h1 className='mx-10'>International Best Sellers Books</h1>
        <h1 className='mx-10'>Award Winners Books</h1>
    </div>
  )
}

export default Category