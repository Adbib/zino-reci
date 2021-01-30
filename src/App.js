import './App.css';
import React, {useState, useEffect} from 'react';
import Recipe from './compounent/recipe';
//import Search from './compounent/search';




function App() {

  const  [Submitos, setSubmitos] = useState("chicken")
  const [Serch, setSerch] = useState("")
 const [Data, setData] = useState([])
  
const YOUR_APP_ID = "0886d37b";
const YOUR_APP_KEY = "906aac6328f05c16baab10d6c81c1a03"
  useEffect(() => {
    async function fetchData() {
      const respo = await fetch(`https://api.edamam.com/search?q=${Submitos}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
      const data = await respo.json();
      setData(data.hits);
      console.log("fetch again")
    }
    fetchData()
  }, [Submitos])

const getSearch = (e)=>{
  setSerch(e.target.value)
}
const getResult= e => {
   e.preventDefault();
   setSubmitos(Serch)
   console.log(Serch)
}
const enterKey = (e)=>{
  
  if (e.key === "Enter"){
    e.preventDefault();
    setSubmitos(e.target.value)
    console.log(e)
  }

  
}

  return (
    <div className="App">
      <h1>ZINO Recipes</h1>
      <div className="Search">
        <input style={{padding:"15px", border:"none", borderRadius:"5px", width:"50%" }} placeholder="Search..." onKeyPress={enterKey} value={Serch} onChange={getSearch} type="text"></input>
        <button style={{padding:"15px", border:"none", borderRadius:"5px" }} type="submit" onClick={getResult} >Search</button>

      </div>
      {Data.map(reci =>(
        <Recipe key={reci.recipe.label + reci.recipe.calories} ingra={reci.recipe.ingredients} title={reci.recipe.label} image={reci.recipe.image} calo={reci.recipe.calories}/>
      ))}
    </div>
  );
}

export default App;
