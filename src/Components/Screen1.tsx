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
        <OrderListComponent type1='prepared' />
        <OrderListComponent type1='unavailable' />
        <OrderListComponent type1='prepared'/>
        <OrderListComponent type1='prepared'/>
        </div>
        <Footer/>
    </Frame>
  )
}

export default Screen1