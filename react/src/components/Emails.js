import React, {useState, useEffect} from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import GetEmailList from '../api/Get_EmailList.js';

const endpointEmails = 'https://app-nlp-email.herokuapp.com/emailApp/api/emails/'

// returns a list of Emails
function Emails(props) {

    // GET emails from API call
    const data = GetEmailList(endpointEmails);

    console.log(data)

    // push email elements in to array
    const emailList = []
    for (const i in data){
        emailList.push(<Email 
            key={i}
            email={data[i].Email_From}
            subject={data[i].Email_Subject}
            body={data[i].Email_Body}
            id={data[i].id}
        />)
    }
    console.log([emailList])


    return(
        <div>
            <div className="emailList">{emailList}</div>
        </div>
    );
}



// returns an Email element
function Email(props){

    return(
        <div className="email" data-id={props.id} onClick={emailClick} >
          <h5 className="emailListEmail" data-id={'email_'+props.id}>{props.email}</h5>
          <h6 className="emailListSubject" data-id={'subject_'+props.id}>{props.subject}</h6>
          <p className="emailListBody line-clamp" data-id={'body_'+props.id}>{props.body}</p>
        </div>
    );
}

// click email to pass to form
function emailClick(e){

    // get values
    const emailId = e.currentTarget.dataset.id
    const sender = e.currentTarget.childNodes[0].innerText
    const subject = e.currentTarget.childNodes[1].innerText
    const body = e.currentTarget.childNodes[2].textContent
    // set values
    document.getElementById('emailForm-emailId').innerHTML = emailId
    document.getElementById('emailForm-sender').innerHTML = sender
    document.getElementById('emailForm-subject').innerHTML = subject
    document.getElementById('emailForm-body').textContent = body

}

export default Emails;
