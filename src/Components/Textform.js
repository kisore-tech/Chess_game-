import React, {useState} from 'react'


export default function Textform(props) {

   const [text, setText] = useState('');
   
   const handlespace=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext);
    
   }
   const handleUpClick=()=>{   
    //console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
   }
   const handleloClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
   }
   const handleOnChange=(event)=>{ 
    // onsole.log("on change");
    setText(event.target.value);
   }
   const handleclear=()=>{
    setText('');
   }
    return (
<div >
     <h4>{props.heading}</h4>
    <div class="mb-3">
       <label for="mybox" className="form-label">Enter your text to analyze</label>
       <textarea className="form-control " id="mybox" placeholder="enter your text" onChange={handleOnChange} 
           style={{backgroundColor: props.mode==='dark'? 'white':'grey'}} value={text} rows="8"></textarea>
    </div>
       <button type="button" className="btn btn-secondary mx-2"  onClick={handleUpClick}>Convert to uppercase</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={handleloClick}>Convert to lowercase</button>
         <button type="button" className="btn btn-secondary mx-2" onClick={handleclear}>Clear</button>
          <button type="button" className="btn btn-secondary mx-2" onClick={handlespace}>remove extra spaces</button>
       <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h4>Your text summary</h4>
          <p> {text.split(" ").length} words and {text.length} characters </p>
          <p>{0.008*text.split(" ").length}Minutes to read</p>
          <h4>Preview</h4>
          <p>{text}</p>
       </div>
   
 </div>
   

    
   
    
  
  )
}
