import Preloader from 'components/preloader/preloader'
import React, { useEffect, useState } from 'react'
import { createRef } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Searchbar from 'views/layouts/components/search/searchbar'
import Footer from 'components/shared/footer'
import NavBar from 'components/shared/nav-bar'
import { UpdateTenantProfile } from 'providers/redux/_actions/user-actions'
import { Helmet } from 'react-helmet'
import { MapFormErrors, __update_tenant_profile } from 'libraries/validation'
import Validator from 'validatorjs'
import { useHistory } from 'react-router-dom'

const Profile = ({isLoggedIn, user, setIsLoading, status}) => {
    
    const dispatch = useDispatch()
    const profileImage = createRef()
    const history = useHistory()

    const {loading, formError} = useSelector(state => state.update_tenant)

    const {rules, attributes} = __update_tenant_profile
    const [formErrors, setFormErrors] = useState({})

    const {token} = useSelector(state => state.user_data)

    const updateUserData = (e) => {
        e.preventDefault()
        let data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(UpdateTenantProfile(token, data))
        }
    }

    useEffect(() => {
        user && !user.isVerified && history.push('/email/verify')
    }, [history, user])

    const changeProfileImagePreview = (e) => { 
        profileImage.current.src = URL.createObjectURL(e.target.files[0]) 
    }


    useEffect(() => {
        setIsLoading(false)  
    })

    useEffect(() => {
        formError && setFormErrors(formError)
    }, [formError])


    return (
        <div>
            <Helmet>
                <title>Profile - Bayof Real Estate - Find Properties and agents around you</title>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:title" content="Bayof Real Estate" />
                <meta name="twitter:description" content="Find the best accomodation around you" />
                <meta name="twitter:image" content="/images/homeid-social-logo.png" />
                <meta property="og:url" content="home-01.html" />
                <meta property="og:title" content="Home 01" />
                <meta property="og:description" content="Find the best accomodation around you" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/homeid-social.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <Preloader loading={loading} />

            <ToastContainer />
            <NavBar isloggedIn={isLoggedIn}  user={user} status={status} />

            <Searchbar/>

                <main id="content">
                    <div className="container">
                        <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                            <div className="mb-6">
                            <h2 className="mb-0 text-heading fs-22 lh-15">My Profile
                            </h2>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consec tetur cing elit. Suspe ndisse suscipit</p>
                            </div>
                            <form onSubmit={updateUserData} id="profile-form" encType="multipart/form-data">
                            <div className="row mb-6">
                                <div className="col-lg-6">
                                <div className="card mb-6">
                                    <div className="card-body px-6 pt-6 pb-5">
                                    <div className="row">
                                        <div className="col-sm-4 col-xl-12 col-xxl-7 mb-3">
                                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Profile Image</h3>
                                        <p className="card-text">Upload your profile photo.</p>
                                        </div>
                                        <div className="col-sm-8 col-xl-12 col-xxl-5">
                                        <img src={user.avatar ? user.avatar : "images/my-profile.png"} alt="My Profile" ref={profileImage} id="profile-image" className="w-100" />
                                        <div className="custom-file mt-2 h-auto" >
                                            <input type="file" name="avatar" className="custom-file-input" onChange={changeProfileImagePreview} id="customFile" />
                                            <label className="btn btn-secondary btn-lg btn-block" htmlFor="customFile">
                                            <span className="d-inline-block mr-1"><i className="fal fa-cloud-upload" /></span>Upload
                                            profile image</label>
                                        </div>
                                        <p className="mb-0">
                                            *minimum 500px x 500px
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="card mb-6">
                                    <div className="card-body px-6 pt-6 pb-5">
                                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">Contact information</h3>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <div className="form-row mx-n4">
                                        <div className="form-group col-md-6 px-4">
                                            <label htmlFor="firstName" className="text-heading">First name</label>
                                            <input type="text" className="form-control form-control-lg border-0" id="firstName" name="firstname" defaultValue={user.firstname}/>
                                            <p className="text-danger fs-12 mt-1">{formErrors.firstname?.message}</p>
                                        </div>
                                        <div className="form-group col-md-6 px-4">
                                            <label htmlFor="lastName" className="text-heading">Last name</label>
                                            <input type="text" className="form-control form-control-lg border-0" id="lastName" name="lastname" defaultValue={user.lastname}/>
                                            <p className="text-danger fs-12 mt-1">{formErrors.lastname?.message}</p>
                                        </div>
                                    </div>
                                    <div className="form-row mx-n4">
                                        <div className="form-group col-md-6 px-4 mb-md-0">
                                            <label htmlFor="email" className="text-heading">Email</label>
                                            <input type="email" className="form-control form-control-lg border-0" id="email" name="email" defaultValue={user.email} />
                                            <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                                        </div>
                                        <div className="form-group col-md-6 px-4">
                                            <label htmlFor="phone" className="text-heading">Phone Number</label>
                                            <input type="text" className="form-control form-control-lg border-0" defaultValue={user.phone} id="phone" name="phone" />
                                            <p className="text-danger fs-12 mt-1">{formErrors.phone?.message}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end flex-wrap">
                                    <button type="submit" className="btn btn-lg btn-primary ml-4 mb-3">Update Profile</button>
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>


            <Footer/>
        </div>
    )
}

export default Profile;
