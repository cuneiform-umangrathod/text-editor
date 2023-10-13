import { useState } from "react";
import "./App.css";

function App() {
  const [text , setText] = useState({name:"",value:""});
  const handleChange = (e)=>{
    let name = e.target.name
    let value= e.target.value
    setText({...text,name:name,value:value});
    console.log(text);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="editor-body">
          <div className="tools">
            <button className="bold">B</button>
            <button className="itelic">I</button>
            <button className="strick">S</button>
            <button className="Underline">U</button>
            <button className="Mark">M</button>
            <button className="undo">undo</button>
            <button className="redo">redo</button>
          </div>
          <div className="text-editor">

            <textarea name="textarea" cols="30" rows="10" onChange={handleChange}> 
{text.value} 
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
