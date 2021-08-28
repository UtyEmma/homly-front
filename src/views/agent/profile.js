import React, {Component, createRef, useEffect, useState} from 'react'

import Sidebar from './layouts/shared/sidebar'
import Header from './layouts/shared/header'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAgentProfile } from '../../providers/redux/_actions/agent-actions';
import { ToastContainer } from 'react-toastify';
import Preloader from 'components/preloader/preloader';
import { LocalGovt, State } from 'components/city-state/city-state';

const AgentProfile = ({agent}) => {
        const dispatch = useDispatch()
        const profileImage = createRef()
        const [selectedState, setSelectedState] = useState('Enugu')

        const {loading, success} = useSelector(state => (state.update_agent_profile))
        // const [agentData, setAgentData] = useState(agent)

        useEffect(() => {
            // setAgentData(localStorage.getItem('user'))
        }, [success])

        const updateUserData = (e) => {
            e.preventDefault()
            let formData = new FormData(e.target);
            dispatch(UpdateAgentProfile(formData))
        }

        const changeProfileImagePreview = (e) => { 
            profileImage.current.src = URL.createObjectURL(e.target.files[0]) 
        }
        
        return (
            <div className="wrapper dashboard-wrapper">
                <Preloader loading={loading}/>
                <ToastContainer />
                <div className="d-flex flex-wrap flex-xl-nowrap">
                    <Sidebar />

                    <div className="page-content">
                        <Header agent={agent}/>

                        <main id="content" className="bg-gray-01">
                            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                                <div className="mb-6">
                                    <h2 className="mb-0 text-heading fs-22 lh-15">My Profile</h2>
                                    <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>
                                <form onSubmit={updateUserData} id="profile-form" encType="multipart/form-data">
                                    <div className="row mb-6">
                                        
                                        <div className="col-lg-6">
                                            <div className="card mb-6">
                                                <div className="card-body px-6 pt-6 pb-5">
                                                    <div className="row">
                                                        <div className="col-xl-12 mb-3">
                                                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Profile Image</h3>
                                                            <p className="card-text">Upload your profile photo.</p>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <img src={agent.avatar ? agent.avatar : "images/my-profile.png"} alt="My Profile" id="profile-image" ref={profileImage} className="w-100" />
                                                            <div className="custom-file mt-2 h-auto" >
                                                                <input type="file" name="avatar" className="custom-file-input" onChange={changeProfileImagePreview} id="customFile" />
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
                                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">Contact information</h3>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                    <div className="form-row mx-n4">
                                                        <div className="form-group col-md-6 px-4">
                                                        <label htmlFor="firstName" className="text-heading">First name</label>
                                                        <input type="text" className="form-control form-control-lg border-0" id="firstName" name="firstname" defaultValue={agent.firstname}/>
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                        <label htmlFor="lastName" className="text-heading">Last name</label>
                                                        <input type="text" className="form-control form-control-lg border-0" id="lastName" name="lastname" defaultValue={agent.lastname}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-row mx-n4">
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="email" className="text-heading">Email</label>
                                                            <input type="email" className="form-control form-control-lg border-0" id="email" name="email" defaultValue={agent.email} />
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="username" className="text-heading">Username</label>
                                                            <input type="text" className="form-control form-control-lg border-0" id="username" name="username" defaultValue={agent.username} />
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="phone" className="text-heading">Phone Number</label>
                                                            <input type="text" className="form-control form-control-lg border-0" defaultValue={agent.phone_number} id="phone" name="phone_number" />
                                                        </div>
                                                        <div className="form-group col-md-6 px-4">
                                                            <label htmlFor="whatsapp_no" className="text-heading">WhatsApp Number</label>
                                                            <input type="text" className="form-control form-control-lg border-0" defaultValue={agent.whatsapp_no} id="whatsapp_no" name="whatsapp_no" />
                                                        </div>
                                                    </div>

                                                    <div className="form-row mx-n4">
                                                        <div className="form-group col-md-12 px-4">
                                                            <label htmlFor="title" className="text-heading">Title</label>
                                                            <input type="text" className="form-control form-control-lg border-0" id="title" name="title" defaultValue={agent.title} />
                                                        </div>
                                                        <div className="form-group col-md-12 px-4">
                                                            <label htmlFor="phone" className="text-heading">Bio</label>
                                                            <textarea rows="4" className="form-control form-control-lg border-0" id="bio" name="bio">
                                                                {agent.bio}
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-6">
                                            
                                            <div class="card mb-6">
                                                <div class="card-body px-6 pt-6 pb-5">
                                                    <h3 class="card-title mb-0 text-heading fs-22 lh-15">Agent Location</h3>
                                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                                    <div class="form-group">
                                                        <label for="state" class="text-heading">State</label>
                                                        <State classes="form-control form-control-lg border-0" setSelectedState={setSelectedState} name="state" id="state"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="instagram" class="text-heading">City</label>
                                                        <LocalGovt selectedState={selectedState} classes="form-control form-control-lg border-0" id="city" name="city"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card mb-6">
                                                <div class="card-body px-6 pt-6 pb-5">
                                                    <h3 class="card-title mb-0 text-heading fs-22 lh-15">Social Handles</h3>
                                                    <p class="card-text">Make it easier to connect with prospects on Social Media</p>
                                                    <div class="form-group">
                                                        <label for="facebook" class="text-heading">Facebook Url</label>
                                                        <input type="url" class="form-control form-control-lg border-0" defaultValue={agent.facebook} id="facebook" name="facebook" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="instagram" class="text-heading">Instagram Url</label>
                                                        <input type="url" class="form-control form-control-lg border-0" defaultValue={agent.instagram} id="instagram" name="instagram"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="twitter" class="text-heading">Twitter Url</label>
                                                        <input type="url" class="form-control form-control-lg border-0" defaultValue={agent.twitter} id="twitter" name="twitter" />
                                                    </div>
                                                    <div class="form-group mb-7">
                                                        <label for="website" class="text-heading">Website Url <span class="text-muted">(without http)</span></label>
                                                        <input type="url" class="form-control form-control-lg border-0" defaultValue={agent.website} id="website" name="website" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="d-flex justify-content-end flex-wrap">
                                                    <a href={`/${agent.username}`} className="btn btn-lg border ml-4 mb-3">Preview Profile <i className="ml-1 fa fa-external-link-alt"></i></a>
                                                    <button type="submit" className="btn btn-lg btn-primary ml-4 mb-3">Update Profile</button>
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
