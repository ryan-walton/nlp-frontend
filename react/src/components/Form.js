import React, {useState, useEffect} from 'react';
import {Card} from '@uifabric/react-cards';
import {Text, initializeIcons} from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';
import { format } from 'react-string-format';

// form where email data is displayed:
// props:
// formData = global state data from App.js

function Form({formData}) {
    // set default state
    const [selectedTxt, setSelectedTxt] = useState([]);

    // get text selection from user highlight, set state to selected text
    function getSelection() {
        var e = document.getElementById('emailForm-body')
        var txt = e.textContent;
        var start = e.selectionStart;
        var end = e.selectionEnd;
        if (start >= 0 && end >= 0) {
            setSelectedTxt([start, end])
        }
        else{
            setSelectedTxt([0, 0])
        }
    }
    // log output
    //useEffect(()=>{
     //   console.log(format("Selected String Index Start: '{0}', End: '{1}",selectedTxt[0], selectedTxt[1]))
    //},[selectedTxt])


    return (
        <div className="formWrapper">
            <form className="ms-depth-8">
                <label className="formLabel">Email ID:
                    <h id="emailForm-emailId" className="formLabel">'No Email Selected'</h>
                </label>
                <div id="row1" className="row">
                    <div id="row1col1" className="col colHalf">
                        <label for="sender" className="formLabel">Sender: </label>
                        <div id="emailForm-sender" className="divField">{formData.sender}</div>
                    </div>

                    <div id="row1col2" className="col colHalf">
                        <label for="subject" className="formLabel">Subject: </label>
                        <div id="emailForm-subject" className="divField">{formData.subject}</div>
                    </div>
                </div>

                <div id="row2" className="row">
                    <div id="row2col1" className="col colFull">
                        <label for="body" className="formLabel">Body: </label>
                        <label id="emailForm-selected-body-txt" name="selected-text-index">{format("Selected String Index Start: '{0}', End: '{1}",selectedTxt[0], selectedTxt[1])}</label>
                        <textarea id="emailForm-body" name="body" rows="20" cols="100" readOnly="true" onMouseUp={getSelection} value={formData.body}/>
                    </div>
                </div>

                <div id="row3" className="row">
                    <div id="row3col1" className="col colHalf">
                        <label for="category" className="formLabel">Category: </label>
                        <div className="divField">A Test Subject!</div>
                    </div>

                    <div id="row3col2" className="col colHalf">
                        <label for="sentiment" className="formLabel">Sentiment: </label>
                        <div className="divField">A Test Subject!</div>
                    </div>
                </div>

                <div id="row4" className="row">
                    <div id="row4col1" className="col colHalf">
                        <label for="address" className="formLabel">Address: </label>
                        <div className="divField">A Test Subject!</div>
                    </div>
                    <div id="row4col2" className="col colHalf">
                        <label for="phone" className="formLabel">Ph: </label>
                        <div className="divField">A Test Subject!</div>
                    </div>
                </div>

                <div id="row5" className="row">
                    <div id="row5col1" className="col colHalf">
                        <label htmlFor="modelName" className="formLabel">Model Name: </label>
                        <div className="divField">A Test Model Name!</div>
                    </div>
                    <div id="row5col2" className="col colHalf">
                        <label htmlFor="entityName" className="formLabel">Entity Name:: </label>
                        <div className="divField">A Test Entity Name!</div>
                    </div>
                </div>

            </form>
        </div>
    );
}



export default Form;
