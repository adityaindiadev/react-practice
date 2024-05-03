import React, { useState } from 'react'
import './styles.scss'



export const CheckBox = ({ value, id, labelValue, handleChangeOnCheckBox, checked }) => {
  return (
    <div className="checkBox">
      <input className='checkbox' type="checkbox" id={id} name={labelValue} value={value} onChange={handleChangeOnCheckBox} checked={checked} />
      <label htmlFor={id}>{labelValue}</label>
    </div>
  )
}


function TransferListMain() {

  const [firstList, setFirstList] = useState([1, 2, 3, 4])
  const [firstListCheckedItems, setFirstListCheckedItems] = useState([]);
  const [secondList, setSecondList] = useState([])
  const [secondListCheckedItems, setSecondListCheckedItems] = useState([]);


  function onFirstBtnClick(event) {
    event.preventDefault()

    if (firstListCheckedItems.length === 0) {
      return
    }

    const copyFirstListCheckedItems = firstListCheckedItems

    setFirstList((previousValues) => {

      return previousValues.filter(value => !copyFirstListCheckedItems.includes(value))

    })

    setSecondList((value) => [...value, ...copyFirstListCheckedItems])

    setFirstListCheckedItems((v)=> [])

    // console.log(copyFirstListCheckedItems, firstList);

    // console.log(firstList.filter(value => !copyFirstListCheckedItems.includes(value)));

    // setSecondList(copyFirstListCheckedItems)




  }

  function onSecondBtnClick(event) {

    event.preventDefault()

    if (secondListCheckedItems.length === 0) {
      return
    }

    const copySecondListCheckedItems = secondListCheckedItems

    setSecondList((previousValues) => {

      return previousValues.filter(value => !copySecondListCheckedItems.includes(value))

    })

    setFirstList((value) => [...value, ...copySecondListCheckedItems])

    setSecondListCheckedItems(((v)=> []))

  }

  function handleChangeOnFirstCheckBox(event) {
    const { name, checked } = event.target;
    setFirstListCheckedItems((prevCheckedItems) => {
      console.log(prevCheckedItems);
      return checked ? [...prevCheckedItems, parseInt(name)] : prevCheckedItems.filter((item) => item !== parseInt(name))
    }
    );
  }

  function handleChangeOnSecondCheckBox(event) {
    const { name, checked } = event.target;
    setSecondListCheckedItems((prevCheckedItems) => {
      console.log(prevCheckedItems);
      return checked ? [...prevCheckedItems, parseInt(name)] : prevCheckedItems.filter((item) => item !== parseInt(name))
    }
    );
  }

  return (
    <div className='transferListMain'
    >
      <div className="listAndButtonsContainer">

        {firstList.map((listItem, index) => {

          return (
            <CheckBox
              id={index}
              labelValue={listItem}
              value={index}
              key={index}
              handleChangeOnCheckBox={handleChangeOnFirstCheckBox}
              checked={firstListCheckedItems.includes(listItem)}
            />
          )

        })}

      </div>
      <div className="listAndButtonsContainer buttonContainer">

        <button disabled={firstListCheckedItems.length == 0} className="btn" onClick={onFirstBtnClick} >
          {">"}
        </button>
        <button disabled={secondListCheckedItems.length == 0}  className="btn" onClick={onSecondBtnClick}>
          {"<"}
        </button>

      </div>

      <div className="listAndButtonsContainer">
        {secondList.map((listItem, index) => {

          return (
            <CheckBox
              id={index}
              labelValue={listItem}
              value={index}
              key={index}
              handleChangeOnCheckBox={handleChangeOnSecondCheckBox}
              checked={secondListCheckedItems.includes(listItem)}
            />
          )

        })}
      </div>

    </div>
  )
}

export default TransferListMain