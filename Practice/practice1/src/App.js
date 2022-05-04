import React, { useState,useEffect } from 'react'
import DisplayData from './Components/DisplayData'
import './App.css'

function App(){
  const [Car,setCar] = useState({brand:"--",mileage:"--",year:"--",model:"--",imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAACzCAMAAACKPpgZAAAA81BMVEVzQbT///9zQbVzQLb///xzQbJxQrT///n///10QLNzQLhzQbF1Q7ZzP7h1QLZrMLJzQ65qLbRoMamvmM2bgMVwNrR4Ua1vRbBuOrR4PrhwO6+gh8mihcOFWriyoMx9TbuVdMCwk86NZbptO7qxoMZ9TcGBWL62oczk2uaQZr9oOajNuuBmNbHAttf18/SObL1cKbTRxOXd0u307vfCsdpbFrRuLbpcCaVnKKhvNbr69/9lKKnVxdvp6PHq4/TFudGWgL+JdcDCrd2FXcjU0OJtJ73n6eyNaMmYdsqAXriigsqZfs7j3OOyntPdze3Ksd5VAKzw+DPvAAAFSElEQVR4nO3YC3PaOhYHcEvyE2HLdqwiDIQQeh0SHPOwmybh0ZYlD1Lo3u//aVZk25mbZma3nZ3dXu7+fzNhYs0ZT3SiI+lgGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/w9sxvRn/Z8PlkE9o04Z1b973qtY/hzxcsz6+vMXUzdsym0WfE2MYduGZ1C2z4znBa/CdQ59+v1Yrfac25dD/5W/9n+I1pVqhpRJ+jU1zArrdSX3U/UC+Spe58CyXi4QKmtMqZdhTH6XqsNjp622bASd425Y8zybec24b/gnvb5+9E936jkL3PC+rRPOLvq0zqj3bcSyum9/U+0kfQ6r+zreol52Vg9sXXnUsnQc5b9qev8BKgbmqbxJzPO0xoPAoBfDnswvC2GFtjwmIvB0sbE6DT2q60wXXzxspZTqyP1sKTVsf0Q242KirGazzkLObNvy+RPpNoKAsSAIdAo9/nrD+tOzxNS5j/sJebCasYh4bVxWs7wq38VX/Xr8nvVjGeXSC6WYSUH13jsuqshgIs8l3deWFNcdd9N8H9e8OI5v/L5+SazUCenq982uY57GPqW5/avn+fNCMb13q+iEnKfB/HYwio6cYjir7ue3k/CmvRDZ8kO5SKT8WJaXJafeRc8shrk9ud2OlMe4+rS4vSSd6+lKZvPbskq75Ydy+Um/r+t3pnogai9/4w9ldnjbTigG6zNzc0IexuuiPXfDTrEeRStnd2RWV0dmlLmDj1M3ZcU0WRK9v7BOMTkX8yKZm5miRl5MP06dv10thuP1snN0LLvOMhmUUmcmPZ0nPbfVcNpXl0V8eJnhYjkYL5Z6zURO7yo0n8aLSuRV8T5aD8ZHRGQkGY9ItjHPo4RYzLBFWQleHN9dEL3fpBk5EY+kM1tMZtvpeSaaGfl4NzKz/ZpRIqP3w3fr6aw4u/n+DvTnZ4n14OoTWbsP1ySRodOKykrKqozkeh0dudddklyck86p20kf92vGEkUVN9y2nLlH0lYPugofSBYthuJk6ZItz8ijHtg86jVzUpalU0VPZETCwLMOLTWeGCzjqHLMh8g9vuuaic7MTGdGxN8y81npzHTcz+96rs6MLYvV7EKvmQZ5UnVfJ+4ucTY6M7kYjzdmu25+jh5JlpB0vP3w/vf7oUid5eAuVd6h3ZKtaLAVtXTpjK4uzbNtkeqzajerikivpfHOvc7MRI5IRwycrevoatJr7P7oqnLOtrehH/qzsnxbOpvx/SRarHcTc9Ml5fF9GWfuvDMpWpVzmYvKad28JZv+r57qT6LxapWy/uhLp6Z228kbX4XDVdQbxululT99keFkpLJp1k97u4TYzPDUm8lKpbvBJNPX3tB/Mx/0Jln+997FyXw7HakuOZ7OO0q1v5w3qm2lL0eyZRryadr91TP9WcxS0tPX3bhvBVLE/ZA3c+WnsdeQua1i3SCkdjMPahn7fVXow6husCi1PCmEz42ab/mRkHlgizRQQsRN2TVHUezXucy5Doql6ofTdRSomB1aNdme3hv37SPVtxPqcaYbJt1g1uqUUz1uUf48rsutdFr75ohbhqVjbP7cNux3Vt0M6Fabedyqce+N3oGpwWx9PaZGWAutvNAXQcaNQ2wQfoTf+NzaqH8bZlOadPkfTiFm+aeN9HXL/tfBvVSpH/i3h75iwR/qhnFP0dqhHdg/Qx/XBv+BCVJdNy+/meE0OMB2EgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+pX8AbRSLVf2vXE8AAAAASUVORK5CYII='})
  const [data,setData] = useState([])
  

  useEffect(()=>{
    fetch('https://gorest.co.in/public/v2/todos')
    .then(response=>response.json())
    .then(jsonData=>setData(jsonData))
},[])

 const deleteEachData=(id)=>{
  const filteredData=data.filter(each=>each.id!==id)
  setData(filteredData)
}
  
  const changing =()=>{
    setCar( {
      brand:"Suzuki",
      mileage: "45 km/h",
      year: 2021,
      model: "Suzuki 2012",
      carMadeBy:"Swift",
      imgUrl:"https://stat.overdrive.in/wp-content/odgallery/2022/04/61649_2022_Maruti_Suzuki_Ertiga_468x263.jpg",
    })
  }

  const searchInput = (event) =>{
    const searchInputElement= event.target.value
    console.log(searchInputElement)
    const filteredData=data.filter(each=>each.title.toLowerCase().includes(searchInputElement.toLowerCase()))
    setData(filteredData)
  }

  return (
    <div className='container'>
      <h1 className="heading">Task using useState() Hooks only</h1>
        <div className='imgContainer'>
        <h1 className="CarDetails">My Car Brand is : {Car.brand} <br/>Car MadeBy :{Car.carMadeBy}<br/>Mileage is : {Car.mileage}<br/>Car Model :{Car.model} <br/>Made in year : {Car.year}</h1>
        <img src={Car.imgUrl}  className="image" alt={Car.name}/>
        </div>
      <div className='buttonContainer'>
      <button onClick={()=>{
        setCar(prevState=>({brand:"audi",mileage:"30 Km/h",year:2018,model:"mustang",carMadeBy:"Audi",
      imgUrl:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A6/6426/1571906388003/front-left-side-47.jpg"}))
      }}>Add the Element into the Car</button>
      <button onClick={changing}>Change the Car Elements</button>
      </div>
      <div className='tableContainer'>
        <h1 className='heading' >The Task Using with useEffect() and useState() Hooks</h1>
        <input type="search" className='searchInput' placeholder='Search Here' onChange={searchInput}/>
        <table className='tableFormat'>
          <thead>
          <tr>
            <th>ID</th>
            <th>USER_ID</th>
            <th>TITLE</th>
            <th>DUE_ON</th>
            <th>STATUS</th>
          </tr>
          </thead>
            <tbody>
              
          {data.map(each=>(
            <DisplayData deleteEachData={deleteEachData} data={each} key={each.id}/>
          ))}
          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App