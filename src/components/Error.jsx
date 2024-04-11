import React from 'react'
import { NOT_FOUND_IMG } from '../utils/constants'

const Error = () => {
  return (
    <div>
      <img src={NOT_FOUND_IMG} alt="" />
    </div>
  )
}

export default Error