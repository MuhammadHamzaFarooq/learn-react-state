import React ,{useState} from 'react';  // useState ak hook hay jo hamay react ki anader variable bana may madad karta hay hook basically . usesState ak variable/function hay jo variable banay kam ata hay
import './App.css';  // ya hum nay app.css import ki hay 
// import React from 'react'  // bhi hamay koi bhi component banana ho ga to hum ya line zaror write karyn gay
import {Message} from './Message';
function App(){
    let [count, setCount] = useState(0); // useState hook hay jo kay is ka variable array ki tarhan bana parta hay ku is may or ya default value bhi layta hay useState may ya koi bhi hosakte hay means is ki koi bhi data type ho sakti hay  count ,setCount ya hum nay destructure keya hay ya count may koi bhi value aye gi or yani jo hum dena chahan laken hum is value ko set count kay variable say nahi karsktay us kay lay humay setCount ka istaymal karna ho ga is say hi asa possible hay
    let [isMorning ,setMorning] = useState(true);
    return(
         <div className= {`box ${isMorning ? 'dayLight':'dark'}`}>
             <h1>Hava A Good : {isMorning? 'Morning':'Night'}</h1>
          <Message  counter= {count}/>
           <br/>

           <button onClick = {()=>setCount(++count)}>Update Conter</button>

           <br/>
           <button onClick= {()=>setMorning(!isMorning)} >Update Day</button>
         </div>
     );
}
export default App;


