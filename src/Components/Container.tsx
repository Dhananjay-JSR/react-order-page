import React from 'react'
interface PropType{
    children:React.ReactNode;
}

function Container({children}:PropType) {
  return (
    <div className='flex justify-center mt-20'>
{children}
    </div>
  )
}

export default Container