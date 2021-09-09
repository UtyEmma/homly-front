import { FileInput } from 'libraries/forms/files/custom-file-input'
import React, { useState } from 'react'
import ListingVideo from 'views/tenants/listings/components/listing-details/listing-video'
import Listing from 'views/tenants/listings/listings'

export const UpdateListingMedia = ({listing, files, setFiles, formErrors}) => {

    const [video, setVideo] = useState(listing.video_links)

    return (
        <>
            <div className="card bg-white border-0">
                <div className="card-body py-4 py-md-0 px-0">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-md-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Upload photos
                            of your property</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit</p>
                           <FileInput files={files} setFiles={setFiles} name=""/>
                           <p className="text-danger fs-12">{formErrors.images?.message}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-md-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Upload Video</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit</p>
                            <div className="form-row mx-n2">
                                <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                    <div className="col-12">
                                        <ListingVideo video={video} />
                                    </div>
                                    <div className="form-group mb-md-0">
                                    <label htmlFor="embed-video-id"  className="text-heading">Upload Video File</label>
                                    <input type="text" name="video_links" defaultValue={video} className="form-control form-control-lg border-0" placeholder="Youtube, Vimeo or any link to your Video" id="embed-video-id" />
                                    <p className="text-danger fs-12">{formErrors.video_links?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
