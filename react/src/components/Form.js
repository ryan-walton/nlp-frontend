import React, {useState, useEffect} from 'react';
import {Card} from '@uifabric/react-cards';
import {Text, initializeIcons} from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';
import { format } from 'react-string-format';

function Form() {

    const [selectedTxt, setSelectedTxt] = useState([]);

    function getSelection() {
        document.getElementById('emailForm-body').addEventListener('mouseup', function (e) {
            var txt = this.textContent;
            var start = this.selectionStart;
            var end = this.selectionEnd;
            if (start >= 0 && end >= 0) {
                console.log("start: " + start);
                console.log("end: " + end);
                console.log("text: " + txt);
                setSelectedTxt([start, end])
            }
        });
        console.log(selectedTxt)
    }
    useEffect(()=>{
        console.log(format("Selected String Index Start: '{0}', End: '{1}",selectedTxt[0], selectedTxt[1]))
    },[selectedTxt])


    return (
        <div className="formWrapper">
            <form className="ms-depth-8">
                <label className="formLabel">Email ID:
                    <h id="emailForm-emailId" className="formLabel">'No Email Selected'</h>
                </label>
                <div id="row1" className="row">
                    <div id="row1col1" className="col colHalf">
                        <label for="sender" className="formLabel">Sender: </label>
                        <div id="emailForm-sender" className="divField">testuser@companywebsite.com</div>
                    </div>

                    <div id="row1col2" className="col colHalf">
                        <label for="subject" className="formLabel">Subject: </label>
                        <div id="emailForm-subject" className="divField">A Test Subject!</div>
                    </div>
                </div>

                <div id="row2" className="row">
                    <div id="row2col1" className="col colFull">
                        <label for="body" className="formLabel">Body: </label>
                        <label id="emailForm-selected-body-txt" name="selected-text-index">{format("Selected String Index Start: '{0}', End: '{1}",selectedTxt[0], selectedTxt[1])}</label>
                        <textarea id="emailForm-body" name="body" rows="20" cols="100" readOnly={true} onMouseUp={getSelection}>
                         </textarea>
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

            </form>
        </div>
    );
}



export default Form;
