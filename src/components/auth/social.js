import { SocialAuth } from "providers/redux/_actions/auth-action";
import { useDispatch } from "react-redux";
import GoogleOneTapLogin from 'react-google-one-tap-login'
import { Modal } from "react-bootstrap";
import { useState } from "react";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

export const GoogleOneTapAuth = () => {
    const [show, setShow] = useState()
    const [data, setData] = useState({})

    const handleSuccess = (response) => {
        setData(response)
        setShow(true)
    }

    return (
        <>
            <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(res) => handleSuccess(res)} googleAccountConfigs={{ client_id: '210812762241-09vip45373gh2ia5ic4d86k78nlg4quj.apps.googleusercontent.com'}} ></GoogleOneTapLogin>
            <SelectUserTypeModal show={show} setShow={setShow} auth_data={data}/>
        </>
    )
}

const SelectUserTypeModal = ({show, setShow, auth_data}) => {
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
                <div className="row d-flex align-items-center justify-content-center pt-8 pb-3" style={{height: '100%'}} >
                    <div className="col-12 text-center px-9">
                        <h2 className="text-heading">How do you want to proceed?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                

                    <div className="col-8">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-6 my-2">
                                <div role="button" className="card p-5 bg-white h-100 bg-hover-light" onClick={() => {handleAuth('agent')}}>
                                    <div>
                                        <img src="/images/svg/property-agent.svg" />
                                    </div>
                                    <div className="my-3 text-center">
                                        <h4 className="fs-22 mb-3 font-weight-600">Agent</h4>
                                        <span className="alert alert-primary p-1 px-2 mt-3 rounded-pill">Proceed as an Agent <i className="fa fa-angle-double-right"></i></span>
                                    </div>                            
                                </div>
                            </div>

                            <div className="col-md-6 my-2">
                                <div role="button" onClick={() => {handleAuth('tenant')}} className="card p-5 bg-white h-100 d-flex flex-column align-items-center bg-hover-light btn-focus-secondary">
                                    <div className="mt-8">
                                        <img src="/images/svg/tenant-user.svg" />
                                    </div>
                                    <div className="my-3 mt-5 text-center">
                                        <h4 className="fs-22 mb-3 font-weight-600">Tenant</h4>
                                        <span className="alert alert-primary p-1 px-2 mt-3 rounded-pill">Proceed as a Tenant <i className="fa fa-angle-double-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center mt-2">
                        <button className="btn btn-link" onClick={() => {setShow(false)}}>Close</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}