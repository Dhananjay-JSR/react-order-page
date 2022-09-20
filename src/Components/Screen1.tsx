import React from 'react'
import Frame from './Shared/ScreenFrame'
import Navbar from './Shared/Navbar'
import OrderSummaryHero from './Shared/OrderSummaryHero'
import OrderListComponent from './Shared/OrderListComponent'
import Footer from './Footer'

function Screen1() {
  return (
    <Frame>
        <Navbar date={'9:41'}/>
        <OrderSummaryHero />
        <div className='h-[43%] overflow-y-hidden'>
        <OrderListComponent CookType='prepared' FoodName={"Chicken Biriyani"} Quantity={2} Price={170}  />
         <OrderListComponent CookType='unavailable' FoodName={"Mutton Biriyani"} Price={210}/>
        <OrderListComponent CookType='prepared' FoodName={"Chicken Biriyani"} Quantity={2} Price={170}/>
        <OrderListComponent CookType='prepared' FoodName={"Mutton Biriyani"} Quantity={1} Price={210}/> 
        </div>
        <Footer/>
    </Frame>
  )
}

export default Screen1