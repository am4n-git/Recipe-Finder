import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const API_KEY = 'ad48f5b5deef08261f2fb728d144bec4';
  const API_ID= 'b6aaa93d';
  const[count,setCount] = useState(0);
  useEffect(()=>{
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;
    fetch(url).then(response =>{
      return response.json()
    }).then (res=>{
      console.log('final response ', res);
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  
  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={()=>setCount(count+1)}>Count+</button>
    </div>
  );
}

export default App;
