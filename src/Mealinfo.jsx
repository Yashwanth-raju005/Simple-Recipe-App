import React from 'react'
import { json, useParams } from 'react-router-dom'
import { useState } from 'react';



const Mealinfo = () => {
    const {mealid}=useParams();
    console.log(mealid)

    const [info,setInfo]=useState();

const getInfo=async ()=>{
    const get= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const datas=await get.json();
    console.log(datas.meals[0]);
    setInfo(datas.meals[0])
    
}
    if(info !=""){
        getInfo();
    }




  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
    {
        !info ? "Data Not Found":
    <div className='mealInfo'>
        <img src={info.strMealThumb} alt='cake'/>
        <div className='info'>
            <h1>Recipe Details</h1>
            <button>{info.strMeal}</button>
            <h3>Instruction's</h3>
            <p>{info.strInstructions}</p>
        </div>
    </div>
    }
    </div>
  )
}

export default Mealinfo