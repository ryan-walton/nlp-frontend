import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';

function Form() {

    return(
        <div className="formWrapper">
            <form className="ms-depth-8">
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
                    <textarea id="emailForm-body" name="body" rows="20" cols="100"/>
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
