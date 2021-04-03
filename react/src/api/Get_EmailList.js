import {useEffect, useState} from "react";
import axios from "axios";

function GetEmailList(url){
    // set default state
    const [data, setEmails] = useState({});

    useEffect(()=>{
            axios.get(url)
                .then(res => setEmails(res.data))
                //.then(console.log(data))
                .catch(error => console.log(error))
        }, [url])
    return data
}

export default GetEmailList;