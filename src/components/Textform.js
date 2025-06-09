import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        // console.log("button was clicked!")
        let newtext=text.toUpperCase ()
        settext(newtext)
    }
    const handleloclick=()=>{
        // console.log("button was clicked!")
        let newtext=text.toLowerCase ()
        settext(newtext)
    }
    const handleclearclick=()=>{
        // console.log("button was clicked!")
        let newtext=""
        settext(newtext)
    }
    const handleremoveclick=()=>{
        // console.log("button was clicked!")
        let newtext=text.split(/\s+/)
        settext(newtext.join(" "))
    }
    const handlecopyclick=()=>{
        var text=document.getElementById("exampleFormControlTextarea1 ")
        text.select()
        navigator.clipboard.writeText(text.value)

    }
    const handleonchange=(event)=>{
        settext(event.target.value)
    }
    const [text,settext]=useState("")
  return (
    <>
    <div className={`container text-${props.mode==='dark'?'light':'rgb(24 41 72)'}`}>
        
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" id="exampleFormControlTextarea1 " style={{backgroundColor:props.mode==='dark'?'rgb(84 77 77)':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange}  value={text} rows="8"></textarea>
</div>
<button className="btn btn-primary " onClick={handleupclick}>convert to Upper case</button>
<button className="btn btn-primary mx-2" onClick={handleloclick}>convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>clear Text</button>
<button className="btn btn-primary mx-1" onClick={handlecopyclick}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleremoveclick}>Remove Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'} `}>
        <h1>your test summary</h1>
        <p>{text.split(" ").length}Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text to Preview" }</p>
    </div>

    </>
  )
}
