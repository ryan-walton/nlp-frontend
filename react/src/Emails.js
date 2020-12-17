import React from 'react'
import { Nav, initializeIcons } from '@fluentui/react';


// returns a list of Emails
function Emails() {

    // push email elements in to array
    let emailList = []
    for (var i = 0; i < 10; i++){
        emailList.push(<Email key={i}/>)
    }

    return(
        <div className="emailList">{emailList}</div>
    );
}

// returns an Email element
function Email(){
    return(
        <div className="email">I am an Email!</div>
    );
}

export default Emails;
