import {useEffect, useState} from "react";
import axios from "axios";

function GetEmailList(url){
    // set default state
    const [data, setEmails] = useState({});

    useEffect(()=>{
            axios.get(url)
                .then(res => console.log(res))
                .then(res => setEmails(res))
                .catch(error => console.log(error))
        }, [url])
    console.log("Returning from getting API data fshfgh")
    return data
}

export default GetEmailList;