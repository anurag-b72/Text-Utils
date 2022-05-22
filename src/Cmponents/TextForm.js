import React, { useState } from 'react'



export default function TextForm(props)
 {
     const handleUpClick = ()=>{
        //  console.log("UpperCase was clicked");
        //  setText("You have clicked button");
        let newText = text.toUpperCase();
        setText(newText);
     }
     const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter your text');
  return (
<div>  
<h1>{props.heading}</h1> 
<div className="mb-3">
{/* <label for="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="13"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
</div>
  )
}
