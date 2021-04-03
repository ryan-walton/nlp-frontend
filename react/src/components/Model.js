import React, {useEffect, useState} from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';
import {format} from "react-string-format";

function Model() {
const [selectedTxt, setSelectedTxt] = useState([]);

    function getSelection() {
        document.getElementById('emailForm-body').addEventListener('mouseup', function (e) {
            var txt = this.textContent;
            var start = this.selectionStart;
            var end = this.selectionEnd;
            if (start >= 0 && end >= 0) {
                setSelectedTxt([start, end])
            }
        });
    }
    //useEffect(()=>{
    //    console.log(format("Selected String Index Start: '{0}', End: '{1}",selectedTxt[0], selectedTxt[1]))
    //},[selectedTxt])


    return(
        <div className="formWrapper">
            <form className="ms-depth-8 wrapper-Model">
            This is where the Model section will go...
            </form>
        </div>
    );
}



export default Model;
