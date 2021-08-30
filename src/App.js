import "./styles.css";
import {useState} from 'react'
function App() {
  //database
  const FoodGenre=["Indian","Chinese","Mexican"]
  const Indian=[
    {
      name:"Butter Chicken",
      rating:"4.8/5"
    },
    {
      name:"Sahi Panner",
      rating:"4.5/5"
    },
    {
     name:"Chicken Tandori",
     rating:"4.6/5"
    }
  ]
  const Chinese =[
    {
      name:"Manchurian",
      rating:"4.2/5"
    },
    {
      name:"Fried Rice",
      rating:"4.2/5"
    },
    {
      name:"Chowmein",
      rating:"4.2/5"
    }]

    const Mexican =[
      
      {
        name:"Nacho Chips",
        rating:"4.6/5"
      },
      {
        name:"Burrito Rice",
        rating:"4.5/5"
      },
      {
        name:"Mexican Rice",
        rating:"4.1/5"
      }
  ]
  var[food,setfood]=useState([]);
  var foodarray;
  var genreClickedCB=(foodName,index)=>{
    
 
     switch(foodName){
       case "Indian": foodarray=Indian;
       break;
       case "Chinese": foodarray=Chinese;
       break;
       case "Mexican": foodarray=Mexican;
       break;
       default: foodarray=null
     } 
     food=foodarray && foodarray.map((item)=>{
      return(
        <p className="result-output">{item.name}<br></br>{item.rating}</p> )
    })
    setfood(food)
}
  return (
    <div className="main-container" >
        <div className="main-container-child" >

              <div style={{textAlign:"center",paddingTop:"8%",paddingBottom:"4%"}}>
                  <h1 >  Recommended FoodGenre </h1>
              </div>

        <h2 ><b>Genre</b></h2>

              <div className='button-container'>

                        

                        {FoodGenre.map((item,idx)=>{
                                       return(
                                          <p 
                                            key={idx}style={{display:'inline',margin:"5px"}} ><button  onClick={()=>genreClickedCB(item,idx)}>{item}</button>
                                          </p>
                                            )
                                              })}
                                              
              </div>
              <div className="result-div" >
                {food} 
                
              </div>
        </div>
      </div>

);
  }

  export default App;
