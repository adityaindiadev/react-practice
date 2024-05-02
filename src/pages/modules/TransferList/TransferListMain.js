import React, { useState } from 'react'
import './styles.scss'

function TransferListMain() {

  const [firstList, setFirstList] = useState([1,2,3,4])
  const [secondList, setSecondList] = useState([])

  return (
    <div className='transferListMain'
    >
      <div className="listAndButtonsContainer">

      </div>
      <div className="listAndButtonsContainer buttonContainer">

      </div>
      <div className="listAndButtonsContainer">

      </div>

    </div>
  )
}

export default TransferListMain