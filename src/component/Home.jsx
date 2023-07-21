import React from 'react'
import Category from './Category'
import MotivationalBooks from './MotivationalBooks'
import BestSeller from './BestSeller'
import InternationalBooks from './InternationalBooks'

const Home = () => {
  return (
    <div>
        <Category/>
        <MotivationalBooks/>
        <BestSeller/>
        <InternationalBooks/>
    </div>
  )
}

export default Home