import React, { useState } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [meal, setMeal] = useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("");

    const handleInput = (e) => {
        setSearch(e.target.value); 
    };

    const myFunc = async () => {
        if (search === "") {
            setMsg("Please Enter Something!");
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await get.json();
            console.log(data.meals);
            setMeal(data.meals);
            setMsg("");
        }
    };

    console.log(meal);

    return (
        <>
            <div className='container'>
                <div className='headings'>
                    <h1>WELCOME</h1>
                    <p>Recipe App</p>
                </div>

                <div className='searchBar'>
                    <input type='text' placeholder='Give Recipe' onChange={handleInput} />
                    <button onClick={myFunc}>Search</button>
                </div>
                <h4 className='err'>{msg}</h4>
                <div>
                    <Mealcards detail={meal}/>
                </div>
            </div>
        </>
    );
};

export default Mainpage;