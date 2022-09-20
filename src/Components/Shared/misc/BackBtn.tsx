import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
// import {left} from '@fortawesome/free-regular-svg-icons'


function BackBtn() {
  return (
    <button title='Screen_Title' className='h-14 w-14 font-bold text-2xl rounded-lg text-center border-2'>
        <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  )
}

export default BackBtn