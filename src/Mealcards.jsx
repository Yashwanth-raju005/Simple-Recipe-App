import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({detail}) => {
    console.log(detail)
  return (
    <div className='meals'>
        {!detail ? "" : detail.map((c)=>{
            return (
                <div className='card'>
                    <img  src={c.strMealThumb}/>
                    <p>{c.strMeal}</p>
                    <NavLink to={`/${c.idMeal}`}><button >Recipe</button></NavLink>
                     
                </div>
            )
        })
        
        
        }


    </div>
  )
}

export default Mealcards