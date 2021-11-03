import React from 'react'
import { Link } from 'react-router-dom'

export const AgentSocialMediaLinks = ({agent}) => {
    // console.log(agent.twitter)
    return (

        agent.twitter || agent.facebook || agent.instagram || agent.website
        
        ?

        <>
            <span className="col-3 p-0 fs-13">Social</span>
            <ul className="col-9 list-inline text-gray-lighter m-0 p-0 z-index-2">
                <li className="list-inline-item m-0">
                    {
                        agent.twitter
                        
                        &&

                        <a href={agent.twitter} target="_blank" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-twitter" /></a>}
                </li>
                <li className="list-inline-item mr-0 ml-2">
                    {
                        agent.facebook

                        &&

                        <a href={agent.facebook} target="_blank" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-facebook-f" /></a>
                    }
                </li>
                <li className="list-inline-item mr-0 ml-2">
                    {
                        agent.instagram

                        &&

                        <a href={agent.instagram} target="_blank"  className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fab fa-instagram" /></a>
                    }
                </li>
                <li className="list-inline-item mr-0 ml-2">
                    <a href={agent.website} target="_blank" className="w-32px h-32 rounded bg-hover-primary bg-white hover-white text-body d-flex align-items-center justify-content-center border border-hover-primary"><i className="fa fa-globe-africa" /></a>
                </li>
            </ul>
        </>

        :

        ""
    )   
}
