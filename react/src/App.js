import React from 'react';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
import Navigation from './Navigation';
import Emails from './Emails';


function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1 wrapper-Nav">
          <Navigation />
        </div>
        <div className="ms-Grid-col ms-sm-1 ms-xl2 wrapper-EmailList">
          <Emails />
        </div>
      </div>
    </div>
  );
}

export default App;
