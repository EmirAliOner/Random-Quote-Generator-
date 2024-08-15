import {useState,useEffect} from 'react';
import './App.css ';
function App() {
    const [quotes,setQuotes]=useState("");
    const getQuote=()=> {
        fetch("https://type.fit/api/quotes")
        .then((res)=>res.json())
        .then((data)=>{

        let randomNum=Math.floor(Math.random()*data.length)
        setQuotes(data[randomNum])


    });

}

useEffect(()=>{
    getQuote();

},[])

        return (
        <div

            className='App'>
                <div className='quote'>
                   <p>{quotes.text}</p> 
                   <p>{quotes.author}</p>
                   <div className='btnContainer'>
                    <button onClick > Get Quote</button>
                   </div>
                </div>
                {quotes.text}
                <button onclick={getQuote} className="btn">Get Quote</button>
        </div>
    );
}

export default App;

