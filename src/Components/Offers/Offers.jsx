import React from 'react'
import './Offers.css'
import exclusive_hero_image from '../Assets/exclusive_hero_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For Adults</h1>
            <p>ONLY ON FEW PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Offers