import React, { useEffect, useState } from 'react'



export default function Pagination() {
  const pagePerData = 8
  const [allData, setAllData] = useState([])
  const [jumpInput, setJumpInput] = useState('')
  const [filterData, setFilterData] = useState([])
  const [dropDownData, setdropDownData] = useState(null)
  const [selectedPage, setSelectedPage] = useState(1)

  function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url).then((res) => res.json().then((resJSON) => {
      console.log({ resJSON });
      setAllData(resJSON)
      // initiateFilter(resJSON)
      setdropDownData(Math.ceil(resJSON.length / pagePerData))
      console.log(resJSON.length / pagePerData);
      
    })).catch((reason) => console.error({ reason })
    )
  }

  function initiateFilter() {
    console.log('initiateFilter');
    
    const tempFilterData = allData.slice((pagePerData*(selectedPage-1))).slice(0,pagePerData)
    console.log((pagePerData*(selectedPage-1)),{tempFilterData});
    
    setFilterData(tempFilterData)
  }

  useEffect(() => {
    getData()

  }, [])
// console.log("render");

  useEffect(() => {

    console.log('useEffect');
    
    
    (dropDownData) && initiateFilter()
  
    return () => {
      
    }
  }, [allData, selectedPage])
  

  const handleJump = (e) => {
    // console.log(e.target.value);
    console.log(parseInt(jumpInput));
    setSelectedPage(parseInt(jumpInput))

  }

  const handleDropDown = (e)=>{
    // console.log("ddd");
    
    console.log(e.currentTarget.value);
    setSelectedPage(e.currentTarget.value)
    
  }

  function initiateDropDown() {
    const elemArr = []
    for (let index = 1; index <= dropDownData; index++) {
      elemArr.push(<option 
        // selected={selectedPage == index} 
        key={String(index)} value={String(index)}>{index}</option>)
    }

    return elemArr
  }


  return (
    <div className='main-container'>
      <h1>Pagination Example</h1>
      <div className="page-data-container">
        {allData.length == 0 ? <p>Loading...</p> : filterData.map((val, index) => <p key={String(val.id)}>{JSON.stringify(val)}</p>)}
      </div>
      <div className="input-container">
        <div className="list-container">
        <button onClick={()=>{
          setSelectedPage((value)=> value-1)
        }} className="jump-btn">Previous</button>
          <select  value={String(selectedPage)} onChange={handleDropDown} name="pageSelect" id="pageSelect">
            {/* <option>Select</option> */}
            {initiateDropDown()}
          </select>
        <button  onClick={()=>{
          setSelectedPage((value)=> value+1)
        }} className="jump-btn">Next</button>

        </div>

        <input type="text" className="jump-input" onInput={(e) => setJumpInput(e.currentTarget.value)} />
        <button onClick={handleJump} className="jump-btn">Jump</button>
      </div>
    </div>
  )
}
