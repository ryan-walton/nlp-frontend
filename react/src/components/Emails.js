import React, {useState, useEffect} from 'react';
import {Nav, initializeIcons} from '@fluentui/react';
import GetEmailList from '../api/Get_EmailList.js';
import { useDispatch } from 'react-redux';
import { focusOnEmail } from '../reducers/updateInFocusEmail';

const endpointEmails = 'https://app-nlp-email.herokuapp.com/emailApp/api/emails/'

// returns a list of Emails
function Emails(props) {

    const dispatch = useDispatch();

    // GET emails from API call
    const data = GetEmailList(endpointEmails);

    // push email elements in to array
    const emailList = []
    for (const i in data) {
        emailList.push(<Email
            // pass func to all email components
            //updateForm={props.updateForm}
            // pass data and props
            key={i}
            emailFrom={data[i].Email_From}
            emailTo={data[i].Email_To}
            subject={data[i].Email_Subject}
            body={data[i].Email_Body}
            id={data[i].id}
            classificationList={data[i].classification_set}
            sentiment={data[i].sentiment_set}
            addressList={data[i].address_set}
            contactNumberList={data[i].contact_number_set}
            entityList={data[i].entity_set}
        />)
    }

    // returns an Email element
    function Email(props) {
        // on click, pass props back to updateForm function to update form state
        return (
            <div className="email" data-id={props.id} onClick={() => {dispatch(focusOnEmail(props))}}>
                <h5 className="emailListEmail" data-id={'email_' + props.id}>{props.email}</h5>
                <h6 className="emailListSubject" data-id={'subject_' + props.id}>{props.subject}</h6>
                <p className="emailListBody line-clamp" data-id={'body_' + props.id}>{props.body}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="emailList">{emailList}</div>
        </div>
    );
}

export default Emails;
