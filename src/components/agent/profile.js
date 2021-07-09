import React, {Component, createRef, useRef} from 'react'

import Sidebar from './shared/sidebar'
import Header from './shared/header'
import { useDispatch } from 'react-redux';
import { UpdateAgentProfile } from '../../../providers/redux/_actions/agent-actions';

const AgentProfile = (props) => {
        const agent = props.agent;
        const dispatch = useDispatch()
        const profileImage = createRef();
        let imageFile = "";

        const updateUserData = (e) => {
            e.preventDefault()
            let formData = new FormData(e.target);
            dispatch(UpdateAgentProfile(formData))
        }

        const changeProfileImagePreview = (e) => {
            imageFile = e.target.files[0]; 
            profileImage.current.src = URL.createObjectURL(e.target.files[0]) 
        }

        
        return (
            <div className="wrapper dashboard-wrapper">
                <div className="d-flex flex-wrap flex-xl-nowrap">
                    <Sidebar />

                    <div className="page-content">
                        <Header agent={agent}/>

                        <main id="content" className="bg-gray-01">
                            <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                                <div className="mb-6">
                                <h2 className="mb-0 text-heading fs-22 lh-15">My Profile
                                </h2>
                                <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                                </div>
                                <form onSubmit={updateUserData} id="profile-form">
                                <div className="row mb-6">
                                    <div className="col-lg-6">
                                    <div className="card mb-6">
                                        <div className="card-body px-6 pt-6 pb-5">
                                        <div className="row">
                                            <div className="col-sm-4 col-xl-12 col-xxl-7 mb-6">
                                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Photo</h3>
                                            <p className="card-text">Upload your profile photo.</p>
                                            </div>
                                            <div className="col-sm-8 col-xl-12 col-xxl-5">
                                            <img src="images/my-profile.png" alt="My Profile" ref={profileImage} id="profile-image" className="w-100" />
                                            <div className="custom-file mt-4 h-auto" >
                                                <input type="file" name="avatar[]" className="custom-file-input" onChange={changeProfileImagePreview} id="customFile" />
                                                <label className="btn btn-secondary btn-lg btn-block" htmlFor="customFile">
                                                <span className="d-inline-block mr-1"><i className="fal fa-cloud-upload" /></span>Upload
                                                profile image</label>
                                            </div>
                                            <p className="mb-0 mt-2">
                                                *minimum 500px x 500px
                                            </p>
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
                                            <label htmlFor="phone" className="text-heading">Phone</label>
                                            <input type="text" className="form-control form-control-lg border-0" defaultValue={agent.phone} id="phone" name="phone" />
                                            </div>
                                            <div className="form-group col-md-6 px-4">
                                            <label htmlFor="mobile" className="text-heading">Mobile</label>
                                            <input type="text" className="form-control form-control-lg border-0" id="mobile" name="mobile" />
                                            </div>
                                        </div>
                                        <div className="form-row mx-n4">
                                            <div className="form-group col-md-6 px-4 mb-md-0">
                                            <label htmlFor="email" className="text-heading">Email</label>
                                            <input type="email" className="form-control form-control-lg border-0" id="email" name="email" defaultValue={agent.email} />
                                            </div>
                                            <div className="form-group col-md-6 px-4 mb-md-0">
                                            <label htmlFor="skype" className="text-heading">Skype</label>
                                            <input type="text" className="form-control form-control-lg border-0" id="skype" name="skype" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card mb-6 mb-lg-0">
                                        <div className="card-body px-6 pt-6 pb-5">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">User detail</h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        <div className="form-group mb-0">
                                            <label htmlFor="title" className="text-heading">Title / Posittion</label>
                                            <input type="text" className="form-control form-control-lg border-0" id="title" name="title" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="card mb-6">
                                        <div className="card-body px-6 pt-6 pb-5">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">User detail</h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        <div className="form-group">
                                            <label htmlFor="facebook" className="text-heading">Facebook Url</label>
                                            <input type="url" className="form-control form-control-lg border-0" id="facebook" name="facebook" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pinterest" className="text-heading">Pinterest Url</label>
                                            <input type="url" className="form-control form-control-lg border-0" id="pinterest" name="pinterest" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="instagram" className="text-heading">Instagram Url</label>
                                            <input type="url" className="form-control form-control-lg border-0" id="instagram" name="instagram" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="twitter" className="text-heading">Twitter Url</label>
                                            <input type="url" className="form-control form-control-lg border-0" id="twitter" name="twitter" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="linkedin" className="text-heading">Linkedin Url</label>
                                            <input type="url" className="form-control form-control-lg border-0" id="linkedin" name="linkedin" />
                                        </div>
                                        <div className="form-group mb-7">
                                            <label htmlFor="website" className="text-heading">Website Url <span className="text-muted">(without http)</span>
                                            </label>
                                            <input type="url" className="form-control form-control-lg border-0" id="website" name="website" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body px-6 pt-6 pb-5">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Change password</h3>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                        <div className="form-group">
                                            <label htmlFor="oldPassword" className="text-heading">Old Password</label>
                                            <input type="password" className="form-control form-control-lg border-0" id="oldPassword" name="oldPassword" />
                                        </div>
                                        <div className="form-row mx-n4">
                                            <div className="form-group col-md-6 col-lg-12 col-xxl-6 px-4">
                                            <label htmlFor="newPassword" className="text-heading">New Password</label>
                                            <input type="password" className="form-control form-control-lg border-0" id="newPassword" name="newPassword" />
                                            </div>
                                            <div className="form-group col-md-6 col-lg-12 col-xxl-6 px-4">
                                            <label htmlFor="confirmNewPassword" className="text-heading">Confirm New Password</label>
                                            <input type="password" className="form-control form-control-lg border-0" id="confirmNewPassword" name="confirmNewPassword" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end flex-wrap">
                                    <button className="btn btn-lg bg-hover-white border rounded-lg mb-3">Delete Profile</button>
                                    <button className="btn btn-lg btn-primary ml-4 mb-3">Update Profile</button>
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
