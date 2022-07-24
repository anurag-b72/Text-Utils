import React, { useState } from 'react'



export default function TextForm(props)
 {
     const handleUpClick = ()=>{
        //  console.log("UpperCase was clicked");
        //  setText("You have clicked button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed to upper case","success");
     }
     const handleLoClick = ()=>{
     
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Changed to lower Case","success");
   }
   const handleClearClick = ()=>{
    
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text","success");
 }
     const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Coppied to clipboard!!!","success");
    }
   
    const [text, setText] = useState('');
  return (
    <>
  
  <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1> 
<div className="mb-3">
{/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#111112',
  color:props.mode==='light'?'black':'white' }} rows="9"></textarea>
</div>
<button className="btn btn-primary mx-2 "onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-2 " onClick={handleLoClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2 " onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy</button>

</div>
<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
<h2>Your text Summary</h2>
<p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
<p>{text.length===0?0:text.split(" ").length * 0.008} Minutes to read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter Something above to preview"}</p>
</div>
</>
  )
}
