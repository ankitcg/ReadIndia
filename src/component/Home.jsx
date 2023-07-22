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
<<<<<<< HEAD
        <BestSeller cart={cart} setCart={setCart}/>
        <InternationalBooks cart={cart} setCart={setCart} />
=======
        <BestSeller/>
        <InternationalBooks/>
>>>>>>> 14543f3d92e06f35239e1f2097bb65f089b00245
    </div>
  )
}

export default Home