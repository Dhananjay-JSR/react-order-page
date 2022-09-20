import React from 'react'
import Frame from './Shared/ScreenFrame'
import Navbar from './Shared/Navbar'
import OrderSummaryHero from './Shared/OrderSummaryHero'

function Screen1() {
  return (
    <Frame>
        <Navbar date={'9:41'}/>
        <OrderSummaryHero />
        
    </Frame>
  )
}

export default Screen1