import React from 'react'
import { Helmet } from 'react-helmet'

// export const meta = [
//     {
//         name: 'des'
//     }
// ]

export const Seo = ({title, description, meta = []}) => {
    return (
        <Helmet 
            title = {title}
            htmlAttributes = {{lang: 'en'}}
            meta = {[ ...meta ]}
        />
    )
}
