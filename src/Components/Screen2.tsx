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
         <OrderListComponent completed type='prepared'/>
         <OrderListComponent  completed type='served'/>
         <OrderListComponent completed  type='pending'/>
    </Frame>
  )
}

export default Screen2