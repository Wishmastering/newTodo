import React, {useState} from "react";
import "../src/style.css"
import Draggable from 'react-draggable';


function App() {
  let [list, setList] = useState([])
  let [todo, setTodo] = useState("")

  function submit(){
    if(todo === ""){
      alert("Maldito Imbecil Escribe No Seas Perezoso")
    }else{
      setList([...list, todo])   
      setTodo("")
    }
  }

  function handleKey(e){
    if(e.key === 'Enter'){
      if(todo === ""){
        alert("Escribe algo")
      }else{
        setList([...list, todo])   
        setTodo("")
      }
    }
  }

  function eliminar(num){
    let pizzerolas = list.filter
    
    ((item,i)=> {if(num !== i){
      return item
    }})
    setList(pizzerolas)

  }
    
  return (
    <>
      <div className="">
          To Do List with React and useState
      </div>
      <div>
        <input placeholder="Memo esta muy fumarola"  value={todo} onKeyDown={handleKey} onChange={(e)=>setTodo(e.target.value)}/>
      <div>
          <button onClick={submit} > Submit </button>
        </div>
        <div>
          {list.map((item,index)=>
            <li key={index}>{item} <span onClick={()=>eliminar(index)}> X </span></li>
          )}
        </div>
      </div>
    </>
  );
}

export default App;


