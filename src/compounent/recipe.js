import React from 'react'

function Recipe({title, image, calo, ingra}) {
    return (
        <div className="Reci" >
            <img src={image} alt={title}/>
           <h1>{title}</h1>
           <h3>{calo}</h3>
           <ul>
               {ingra.map(ingo =>(
                   <li>{ingo.text}</li>
               ))}
           </ul>
            
        </div>

    )
}
 export default Recipe;