import React from 'react';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'

/* import components */
import Navigation from './Navigation';
import Emails from './components/Emails.js';
import Form from './components/Form.js';
import Model from './components/Model.js';
import {connect} from "react-redux";


/* render app */
function App() {

  // global state (for testing, change later)
  const [formData, setformData] = useState(
    {
      id: 1,
      sender: "sender@email.com",
      subject: "test subject",
      body: "this is a test body"
    }
  )

  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">

        {/* left most menu */ }
        <div className="ms-Grid-col ms-sm1 ms-xl1 wrapper-Nav">
          <Navigation />
        </div>

        {/* emails list */}
        <div className="ms-Grid-col ms-sm1 ms-xl2 wrapper-EmailList">
          <Emails 
            updateForm={emailData => setformData(
              {
                id: emailData.id,
                sender: emailData.email,
                subject: emailData.subject,
                body: emailData.body
              }
            )}
          />
        </div>

        {/* main app body or form */}
        <div className="ms-Grid-col ms-sm1 ms-xl2 main-element">
            <Form formData={formData}/>
        </div>

        {/* Model Section For Re-Training */}
        <div className="ms-Grid-col ms-sm1 float-right wrapper-Model">
            <Model />
        </div>

      </div>
    </div>
  );
}

export default App;
