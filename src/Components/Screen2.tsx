import React from 'react'
import Navbar from './Shared/Navbar'
import OrderListComponent from './Shared/OrderListComponent'
import OrderSummaryHero from './Shared/OrderSummaryHero'
import Frame from './Shared/ScreenFrame'

function Screen2() {
  return (
    <Frame>
         <Navbar date={'9:41'}/>
         <OrderSummaryHero completed/>
         <OrderListComponent completed CookType='prepared' FoodName={"Order 1"} ID={1234567890} Price={500}/>
         <OrderListComponent  completed CookType='served'FoodName={"Order 2"} ID={1234567890} Price={220}/>
         <OrderListComponent completed  CookType='pending'FoodName={"Order 3"} ID={1234567890} Price={220}/>
    </Frame>
  )
}

export default Screen2