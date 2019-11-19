import { useState, useEffect } from 'react';

function UseIsOdd(count){
    const [isOdd, setIsOdd ]  = useState(0);

    useEffect(()=>{
        setIsOdd(count % 2 !== 0)
    },[count])

    return isOdd;
}

export default UseIsOdd;
