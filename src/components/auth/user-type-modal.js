import { SocialAuth } from "providers/redux/_actions/auth-action";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";

export const SelectUserTypeModal = ({show, setShow, auth_data, setIsLoading}) => {

    const dispatch = useDispatch()

    const handleAuth = (user) => {
        const data = {
            payload: {
                driver: 'google',
                data: auth_data,
                type: user
            }
        }
        dispatch(SocialAuth(data));
    }

    return (
        <Modal show={show} size="lg" centered onHide={() => {setShow(false)}}>
            <Modal.Header closeButton className="border-0"></Modal.Header>
            <Modal.Body>
                <div className="row d-flex align-items-center justify-content-center pt-mb-8 pb-3" style={{height: '100%'}} >
                    <div className="col-12 text-center px-4 px-md-9 mb-3">
                        <h2 className="text-heading fs-26 fs-md-30">How do you want to proceed?</h2>
                    </div>
                

                    <div className="col-11">
                        <div className="row d-flex justify-content-around">
                            <div className="col-md-6 mb-4">
                                <div role="button" className="card bg-white h-100 bg-hover-light py-2 px-3" onClick={() => {handleAuth('agent')}}>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-4 px-4">
                                            <img src="/images/svg/property-agent.svg" className="img-fluid" />
                                        </div>
                                        <div className="col-8 my-3">
                                            <h4 className="fs-22 font-weight-600">Agent</h4>
                                            <span className="text-primary">Proceed as an Agent <i className="fa fa-angle-double-right"></i></span>
                                        </div>                            
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div role="button" className="card bg-white h-100 bg-hover-light btn-focus-secondary py-2 px-3" onClick={() => {handleAuth('tenant')}} >
                                    <div className="row d-flex align-items-center">
                                        <div className="col-4">
                                            <img src="/images/svg/tenant-user.svg" className="img-fluid" />
                                        </div>
                                        <div className="col-8 my-3">
                                            <h4 className="fs-22 font-weight-600">Tenant</h4>
                                            <span className="text-primary">Proceed as a Tenant <i className="fa fa-angle-double-right"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center mt-5 mt-md-2">
                        <a role="button" className="" onClick={() => {setShow(false)}}>Close</a>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}