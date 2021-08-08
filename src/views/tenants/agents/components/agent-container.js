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
                <div className="col-sm-6">
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="input-group border rounded input-group-lg w-auto mr-3">
                            <label className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3" htmlFor="inputGroupSelect01"><i className="fas fa-align-left fs-16 pr-2" />Sort
                                by:</label>
                            <select className="form-control border-0 bg-transparent shadow-none p-0 selectpicker" data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0" id="inputGroupSelect01" name="sortby">
                                <option selected>Alphabet</option>
                                <option value={1}>Random</option>
                                <option value={1}>Rating</option>
                                <option value={1}>Number of property</option>
                            </select>
                        </div>
                        <div className="d-none d-md-block list-layout">
                            <a className="fs-sm-18 text-muted" href="agents-list.html">
                                <i className="fas fa-list" />
                            </a>
                            <span className="fs-sm-18 text-muted ml-5 active">
                                <i className="fa fa-th-large" />
                            </span>
                        </div>
                    </div>
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
