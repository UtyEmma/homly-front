import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [time, setTime] = useState()  
    
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    const setCurrentTime = () => {
        if (time != `${h} : ${m} : ${s}`) {
            setTime(`${h} : ${m} : ${s}`)
                // setTimeout(function(){
        //     if (time !== `${h} : ${m} : ${s}`) {
        //         setCurrentTime()   
        //     }
        // }, 1000)
        }else{
            setTime(time)
        }
    }

    useEffect(() => {
        time != `${h} : ${m} : ${s}` && setCurrentTime() 
    }, [time])

    return (
        <>
            <p>{time}</p>
        </>
    )
}
