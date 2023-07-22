import React from 'react'
import Category from './Category'
import MotivationalBooks from './MotivationalBooks'
import BestSeller from './BestSeller'
import InternationalBooks from './InternationalBooks'

const Home = ({cart,setCart}) => {
  return (
    <div>
        <Category/>
        <MotivationalBooks cart={cart} setCart={setCart}/>
        <BestSeller/>
        <InternationalBooks/>
    </div>
  )
}

export default Home