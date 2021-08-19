import React from 'react'

export default function AgentNotFound() {
    return (
        <>
          <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="card text-center py-5">
                            <div className="card-body px-md-15 py-10">
                                <img src="images/svg/homes.svg" alt="Agent Not Found" className="img-fluid" />
                                <h3 className="card-title mt-5">Sorry! We cannot find any available agent at the moment</h3>
                                <p className="card-text fs-20">Want to become an agent?.</p>
                                <a href="/agent-signup" className="btn btn-primary">Register as an Agent</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
