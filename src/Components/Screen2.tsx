import React from 'react'
import Navbar from './Shared/Navbar'
import OrderSummaryHero from './Shared/OrderSummaryHero'
import Frame from './Shared/ScreenFrame'

function Screen2() {
  return (
    <Frame>
         <Navbar date={'9:41'}/>
         <OrderSummaryHero completed/>
    </Frame>
  )
}

export default Screen2