import React, {createRef, useEffect, useState} from 'react'
import Sidebar from './layouts/shared/sidebar'
import Header from './layouts/shared/header'
import { LocalGovt, State } from 'components/city-state/city-state';
import Validator from 'validatorjs';
import { MapFormErrors, __agent_updateProfile } from 'libraries/validation';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAgentProfile } from 'providers/redux/_actions/agent-actions';

const AgentProfile = ({agent, setIsLoading}) => {
        const dispatch = useDispatch()
        const profileImage = createRef()
        const [selectedState, setSelectedState] = useState(agent.state && agent.state)

        const updateProfile = useSelector(state => (state.update_agent_profile))
        const {loading, error} = updateProfile

        const user_data = useSelector(state => (state.user_data))
        const {token} = user_data

        useEffect(() => {
            error && error.formError && setFormErrors(error.formError)
        }, [error])

        useEffect(() => {
            setIsLoading(loading)
        }, [loading, setIsLoading])

        const {rules, attributes} = __agent_updateProfile
        const [formErrors, setFormErrors] = useState({})

        const updateUserData = (e) => {
            e.preventDefault()
            const data = new FormData(e.target);
            data.append('username', agent.username)
            const values = Object.fromEntries(data.entries());
            let validation = new Validator(values, rules)
            validation.setAttributeNames(attributes);
            validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
            if (validation.passes()) {
                setFormErrors({}); 
                dispatch(UpdateAgentProfile(token, data));
            } 
        }

        const changeProfileImagePreview = (e) => { 
            profileImage.current.src = URL.createObjectURL(e.target.files[0]) 
        }
        
        return (
            <div className="wrapper dashboard-wrapper">
                <Helmet>
                    <title>My Profile - Agent Dashboard</title>
                </Helmet>

                <div className="d-flex flex-wrap flex-xl-nowrap">
                    <Sidebar agent={agent} />

                    <div className="page-content">
                        <Header agent={agent}/>

                        <main id="content" className="bg-gray-01">
                            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                                <div className="mb-6 d-flex justify-content-between">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h2 className="mb-0 text-heading fs-22 lh-15">Personal Information</h2>
                                        {/* <p className="mb-5">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p> */}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <a href={`/${agent.username}`} disabled={agent.username ? false : true} target="_blank" className="btn btn-lg btn-outline-primary d-block d-md-inline my-3" rel="noreferrer">Visit Profile <i className="ml-1 fa fa-external-link-alt"></i></a>
                                    </div>
                                </div>
                                <form onSubmit={updateUserData} id="profile-form" encType="multipart/form-data">
                                    <div className="row mb-6">
                                        
                                        <div className="col-lg-6">
                                            <div className="card mb-6">
                                                <div className="card-body px-6 pt-6 pb-5">
                                                    <div className="row">
                                                        <div className="col-xl-12 mb-3">
                                                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Profile Image</h3>
                                                            <p className="card-text">Upload an image, with a clear view of your face</p>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <img src={agent.avatar ?? "images/my-profile.png"} alt="My Profile" id="profile-image" ref={profileImage} className="w-100" />
                                                            <p className="text-danger fs-12 mt-1">{formErrors.avatar?.message}</p>
                                                            <div className="custom-file mt-2 h-auto" >
                                                                <input type="file" name="avatar"  className="custom-file-input" onChange={changeProfileImagePreview} id="customFile" />
                                                                <label className="btn btn-secondary btn-lg btn-block" htmlFor="customFile">
                                                                <span className="d-inline-block mr-1"><i className="fal fa-cloud-upload" /></span>Select
                                                                profile image</label>
                                                            </div>
                                                            <p className="mb-0">*minimum 500px x 500px</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-6">
                                                <div className="card-body px-6 pt-6 pb-5">
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">My Personal details</h3>
                                                    <p className="card-text">Your contact information is also needed here</p>
                                                    <div className="form-row mx-n4">
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="firstName" className="text-heading">First name<span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control form-control-lg border-0" id="firstName" name="firstname" defaultValue={agent.firstname}/>
                                                            <p className="text-danger fs-12 mt-1">{formErrors.firstname?.message}</p>
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="lastName" className="text-heading">Last name<span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control form-control-lg border-0" id="lastName" name="lastname" defaultValue={agent.lastname}/>
                                                            <p className="text-danger fs-12 mt-1">{formErrors.lastname?.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mx-n4">
                                                        <div className="form-group col-md-12 px-4">
                                                            <label htmlFor="email" className="text-heading">Email<span class="text-danger">*</span></label>
                                                            <input type="email" className="form-control form-control-lg border-0" id="email" name="email" defaultValue={agent.email} />
                                                            <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="phone" className="text-heading">Phone Number<span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control form-control-lg border-0" defaultValue={agent.phone_number} id="phone" name="phone_number" />
                                                            <p className="text-danger fs-12 mt-1">{formErrors.phone_number?.message}</p>
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="whatsapp_no" className="text-heading">WhatsApp Number<span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control form-control-lg border-0" defaultValue={agent.whatsapp_no} id="whatsapp_no" name="whatsapp_no" />
                                                            <p className="text-danger fs-12 mt-1">{formErrors.whatsapp_no?.message}</p>
                                                        </div>
                                                    </div>

                                                    <div className="form-row mx-n4">
                                                        <div className="form-group col-md-12 px-4">
                                                            <label htmlFor="title" className="text-heading">Title<span class="text-danger">*</span></label>
                                                            <input type="text" className="form-control form-control-lg border-0" id="title" name="title" defaultValue={agent.title} />
                                                            <p className="text-danger fs-12 mt-1">{formErrors.title?.message}</p>
                                                        </div>
                                                        <div className="form-group col-md-12 px-4">
                                                            <label htmlFor="phone" className="text-heading">Bio<span class="text-danger">*</span></label>
                                                            <textarea rows="4" defaultValue={agent.bio} className="form-control form-control-lg border-0" id="bio" name="bio"></textarea>
                                                            <p className="text-danger fs-12 mt-1">{formErrors.bio?.message}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-6">
                                            
                                            <div className="card mb-6">
                                                <div className="card-body px-6 pt-6 pb-5">
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">Agent Location</h3>
                                                    <p className="card-text">Which area are you most active or based in?</p>
                                                    <div className="form-group">
                                                        <label htmlFor="state" className="text-heading">State</label>
                                                        <State classes="form-control form-control-lg border-0" defaultValue={agent.state} setSelectedState={setSelectedState} name="state" id="state"/>
                                                        <p className="text-danger fs-12 mt-1">{formErrors.state?.message}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="instagram" className="text-heading">City</label>
                                                        <LocalGovt defaultValue={agent.city} selectedState={selectedState} classes="form-control form-control-lg border-0" id="city" name="city"/>
                                                        <p className="text-danger fs-12 mt-1">{formErrors.city?.message}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card mb-6">
                                                <div className="card-body px-6 pt-6 pb-5">
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">Social Media Handles</h3>
                                                    <p className="card-text">Its easier for clients to reach you, through social media (Please provide only your Username)</p>
                                                    <div className="form-group">
                                                        <label htmlFor="facebook" className="text-heading">Facebook</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text fs-14 font-weight-600" id="basic-addon3">
                                                                    <i className="fab fa-facebook-square fs-20"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" name="facebook" id="facebook" className="form-control border-0" defaultValue={agent.facebook && agent.facebook.split('/')[3]} aria-describedby="basic-addon3" placeholder="Your username" />
                                                        </div>
                                                        <p className="text-danger fs-12 mt-1">{formErrors.facebook?.message}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="instagram" className="text-heading">Instagram</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                            <span className="input-group-text fs-14 font-weight-600" id="basic-addon3">
                                                                <i className="fab fa-instagram fs-20"></i>
                                                            </span>
                                                            </div>
                                                            <input type="text" className="form-control border-0" defaultValue={agent.instagram && agent.instagram.split('/')[3]} id="instagram" name="instagram" aria-describedby="basic-addon3" placeholder="Your username"/>
                                                        </div>
                                                        <p className="text-danger fs-12 mt-1">{formErrors.instagram?.message}</p>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="twitter" className="text-heading">Twitter</label>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                            <span className="input-group-text fs-14" id="basic-addon3">
                                                                <i className="fab fa-twitter fs-20"></i>
                                                            </span>
                                                            </div>
                                                            <input type="text" className="form-control border-0"  defaultValue={agent.twitter && agent.twitter.split('/')[3]} id="twitter" name="twitter" aria-describedby="basic-addon3" placeholder="Your username"/>
                                                        </div>
                                                        <p className="text-danger fs-12 mt-1">{formErrors.twitter?.message}</p>
                                                    </div>
                                                    <div className="form-group mb-7">
                                                        <label htmlFor="website" className="text-heading">Website Url <span className="text-muted">(without http)</span></label>
                                                        <input type="text" className="form-control form-control-lg border-0" defaultValue={agent.website} id="website" name="website" />
                                                        <p className="text-danger fs-12 mt-1">{formErrors.website?.message}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-md-flex justify-content-end flex-wrap">
                                                    <button type="submit" className="btn btn-lg btn-primary d-block ml-4 mb-3">Update Profile</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>

                            </main>

                    </div>

                </div>
            </div>
        )
}

export default AgentProfile;
