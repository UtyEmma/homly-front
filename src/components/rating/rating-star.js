import React from 'react'

export default function RatingStar({rating}) {
    const stars = [1, 2, 3, 4, 5]
    
    return (
        <>
            {
                stars.map((star, index) => {
                    return (
                        <li className="list-inline-item mr-1 " key={index} >
                            <span className={`${index < rating ? "text-warning" : "text-border"} fs-12 lh-2`}><i className="fas fa-star" /></span>
                        </li>
                    )
                })   
            } 
        </>
    )
}
