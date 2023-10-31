import React, { useState } from 'react'

export default function Textarea(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);

        if (newText === text) {
            props.showAlert("Text is already in UpperCase!", "success");
        } else {
            setText(newText);
            props.showAlert("Converted to UpperCase!", "success");
        }

    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);

        if (newText === text) {
            props.showAlert("Text is already in LowerCase!", "success");
        } else {
            setText(newText);
            props.showAlert("Converted to LowerCase!", "success");
        }

    }

    const handleTtlClick = () => {

        let newText = text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);

        props.showAlert("Converted to TitleCase!", "success");
    }

    const handleStClick = () => {

        let newText = text.split('. ').map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('. ');
        setText(newText);

        props.showAlert("Converted to SentenceCase!", "success");
    }

    const handleCapClick = () => {

        let newText = text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);

        props.showAlert("Converted to Capitalized!", "success");
    }

    const handleExSpClick = () => {

        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);

        if (newText === text) {
            props.showAlert("No extra spaces found!", "success");
        } else {
            setText(newText);
            props.showAlert("Extra spaces removed!", "success");
        }
    }

    const handleSpCrClick = () => {

        let newText = text.replace(/[^\w\s]/g, '');
        setText(newText);

        if (newText === text) {
            props.showAlert("No Special characters found!", "success");
        } else {
            setText(newText);
            props.showAlert("Special characters removed!", "success");
        }
    }

    const handleCopy = () => {

        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Copy to clipboard!", "success");
        }).catch((error) => {
            props.showAlert("Unable to copy!", "danger");
        });

    }

    const handleDownload = () => {

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'textfile.txt';
        a.click();
        URL.revokeObjectURL(url);

    }

    const handleClearText = () => {

        setText('');
        props.showAlert("Cleared!", "danger");

    }

    const handleOnChange = (event) => {

        setText(event.target.value);

    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container my-2 ">

                <h3 className='text-center my-4'>{props.heading}</h3>

                <div className="mb-3">
                    <textarea className="form-control shadow-none" id="textarea" rows="6" placeholder='Type or paste your content here' value={text} onChange={handleOnChange}></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleUpClick} >Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleLoClick} >Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleTtlClick} > Title Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleStClick} >Sentence Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleCapClick} >Capitalized Case</button>
                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleExSpClick} >Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-outline-dark btn-sm mx-1 my-1" onClick={handleSpCrClick} >Remove Special Characters</button>
                <button disabled={text.length === 0} className="btn btn-secondary btn-sm mx-1 my-1" onClick={handleCopy} >Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleDownload} >Download as plaintext</button>
                <button disabled={text.length === 0} className="btn btn-danger btn-sm mx-1 my-1" onClick={handleClearText} >Clear Text</button>

            </div>
            <div className="container my-2 ">

                <p>
                    
                    Character count: {text.length} |
                    Word count: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} |

                    Sentence count: {text.split(/\./).filter((element) => { return element.length !== 0 }).length} |

                    Time to read: {(0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length).toFixed(2)} minutes

                </p>

            </div>
        </>
    )
}
