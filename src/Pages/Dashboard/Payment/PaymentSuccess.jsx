import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();
    const [paymentInfo,setPaymentInfo] = useState();

    useEffect(()=>{
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then( res =>{
                console.log(res.data);
                setPaymentInfo({
                    transactionId:res.data.transactionId,
                    trackingId:res.data.trackingId
                })
            })
        }
    },[axiosSecure,sessionId])
    console.log(sessionId);
    return (
        <div>
            <h1 className='text-4xl text-center font-medium'>Payment successful</h1>
            <p>Your transactionId : {paymentInfo?.transactionId}</p>
            <p>Your trackingId : {paymentInfo?.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;