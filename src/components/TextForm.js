import React, {useState} from 'react'

export const TextForm = (props) => {

    const handleUpClick = () => {
    //console.log("Button was clicked" + text)
    let upperText = text.toUpperCase();
    setText(upperText)
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);

    }

    const [text, setText] = useState("Start typing...")
    return (
    <>
    <h1>Welcome to Text Utilities</h1>
    <div className="mb-3">
    <label htmlFor="textBox" className="form-label">{props.textArea}</label>
    <textarea className="form-control" id="textBox" rows="8" value= {text} onChange={handleOnChange}></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
</>
  )
}
