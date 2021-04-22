import React from 'react';


function Dinner(Props){
    return(
        <div>
        <h1>Today We Are Serving Chicken Biryani</h1>
        <h1>Today We Are Serving Chicken {Props.dishName}</h1>
        <h1>Today are Serving Sweet {Props.sweetDish}</h1>
        </div>
    )
}


export default Dinner;