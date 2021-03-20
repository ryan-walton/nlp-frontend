import React from 'react';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import 'bootstrap/dist/css/bootstrap.css';

/* import components */
import Navigation from './Navigation';
import Emails from './Emails';
import Form from './Form.js';

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
        <div className="ms-Grid-col ms-sm9 ms-xl9 main-element">
          <div className="ms-Grid-row">
            <Form />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
