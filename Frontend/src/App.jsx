import { useEffect, useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import { addToDo, getAllToDo,updateToDo,deleteToDo } from './utils/HandleApi';

function App() {

  const [toDo,setToDo]=useState([]);
  const [text,setText]=useState("");
  const [isupdating,setIsupdating]=useState(false);
  const [toDoid,setToDoid]=useState("");


  useEffect(()=>{
    getAllToDo(setToDo);
  },[]);
const updateMode=(_id,text)=>{
  setIsupdating(true)
  setText(text)
  setToDoid(_id)

}
// updateMode();


  return (
    
      <div className='APP'>
        <div className="container">

          <h1>ToDo App</h1>


           <div className="Top">
           <input type="text" placeholder='Add ToDo' value={text} onChange={(e)=>setText(e.target.value)}/>
           <button className="add"onClick={isupdating?()=>updateToDo(toDoid,text,setToDo,setText,setIsupdating): ()=>addToDo(text,setText,setToDo)} >
            {isupdating?"update":"Add"}
            </button>
           </div>
           
          <div className="list">

          
            {toDo.map((item)=><ToDo 
            key={item._id}
             text={item.text}
             updateMode={()=>updateMode(item._id,item.text)}
             deleteToDo={()=>deleteToDo(item._id,setToDo)}
             />)}

          
           </div>
          

        </div>
      </div>
    
  )
}

export default App;
