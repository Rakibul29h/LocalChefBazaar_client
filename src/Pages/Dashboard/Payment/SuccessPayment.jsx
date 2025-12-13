import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../../hooks/useAxios';

const SuccessPayment = () => {

    const [searchParams,setSearchParams]=useSearchParams();
    const sessionId=searchParams.get("session_id")
    const Axios=useAxios();
    useEffect( ()=>{
        Axios(`/session-status?session_id=${sessionId}`)
        .then(res=>console.log(res.data))
    }, [sessionId])
    return (
        <div>
            <h2>Payment success</h2>
        </div>
    );
};

export default SuccessPayment;