import {  useEffect, useState } from "react"

const useSellerverify = email => {
    
    const [isverified, setIsverified] = useState(false);
    const [isverifiedLoading, setIsverifiedLoading] = useState(true);
    console.log( isverified )
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/sellerverify/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsverified(data.isverified);
                    setIsverifiedLoading(false);
                })
        }
    }, [email])
    return [isverified, setIsverifiedLoading]
}

export default useSellerverify;