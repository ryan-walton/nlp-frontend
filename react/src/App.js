import React from 'react';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';

/* import components */
import Navigation from './Navigation';
import Emails from './components/Emails.js';
import Form from './components/Form.js';
import Model from './components/Model.js';


/* render app */
function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">

        {/* left most menu */ }
        <div className="ms-Grid-col ms-sm1 ms-xl1 wrapper-Nav">
          <Navigation />
        </div>

        {/* emails list */}
        <div className="ms-Grid-col ms-sm1 ms-xl2 wrapper-EmailList">
          <Emails />
        </div>

        {/* main app body or form */}
        <div className="ms-Grid-col ms-sm1 ms-xl2 main-element">
            <Form />
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
