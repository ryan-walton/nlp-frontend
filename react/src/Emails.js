import React, {useState, useEffect} from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

const endpointEmails = 'https://app-nlp-email.herokuapp.com/emailApp/emails/'
let parentEmailList = [] // fix this later, this is a copy of emailList in Emails()

// returns a list of Emails
function Emails() {

    // get fetch data
    const {data} = useFetch(endpointEmails);

    // push email elements in to array
    let emailList = []
    for (const i in data){
        emailList.push(<Email 
            key={i}
            email={data[i].Email_From}
            subject={data[i].Email_Subject}
            body={data[i].Email_Body}
            id={data[i].id}
        />)
    }

    // this is a hack, fix this.
    parentEmailList = emailList

    return(
        <div>
            <div className="emailList">{emailList}</div>
        </div>
    );
}

// make a call to the endpoint and return
const useFetch = (url) =>{
    // set default state
    const [data, setData] = useState(null);

    // make fetch call and set state
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    }, []);
    
    return {data}
}

// returns an Email element
function Email(props){

    return(
        <div className="email" data-id={props.id} onClick={emailClick}>
          <h5 className="emailListEmail" data-id={'email_'+props.id}>{props.email}</h5>
          <h6 className="emailListSubject" data-id={'subject_'+props.id}>{props.subject}</h6>
          <p className="emailListBody line-clamp" data-id={'body_'+props.id}>{props.body}</p>
        </div>
    );
}

// click email to pass to form
function emailClick(e){

    // get values
    const emailid = e.currentTarget.dataset.id
    const sender = e.currentTarget.childNodes[0].innerText
    const subject = e.currentTarget.childNodes[1].innerText
    const body = e.currentTarget.childNodes[2].innerText

    // set values
    document.getElementById('emailForm-sender').innerHTML = sender
    document.getElementById('emailForm-subject').innerHTML = subject
    document.getElementById('emailForm-body').value = body

}

export default Emails;
