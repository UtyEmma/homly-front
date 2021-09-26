import React from 'react'
import AgentCard from './agent-card'

export default function AgentContainer({agents}) {
    return (
        <>
            <div className="row align-items-sm-center mb-6">
                <div className="col-sm-6 mb-6 mb-sm-0">
                    <h2 className="fs-15 text-dark mb-0">We found <span className="text-primary">{agents && `${agents.length}`}</span> agents available for
                        you
                    </h2>
                </div>
            </div>
            <div className="row">
                        {
                        
                        agents.map((agent, index) =>(        
                            <AgentCard agent={agent} key={index}/> )) 
                        
                        }

                    </div>
                    <nav className="mt-4">
                        <ul className="pagination rounded-active justify-content-center">
                        <li className="page-item"><a className="page-link" href="/"><i className="far fa-angle-double-left" /></a></li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item active"><a className="page-link" href="/">2</a></li>
                        <li className="page-item d-none d-sm-block"><a className="page-link" href="/">3</a></li>
                        <li className="page-item">...</li>
                        <li className="page-item"><a className="page-link" href="/">6</a></li>
                        <li className="page-item"><a className="page-link" href="/"><i className="far fa-angle-double-right" /></a></li>
                        </ul>
                    </nav>
                    <div className="text-center mt-2">8-14 of 45 Results</div>
        </>
    )
}
