import { FileInput } from 'libraries/forms/files/custom-file-input';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StoreListing } from 'providers/redux/_actions/listing/listing-actions';

export default function ListingMedia({files, setFiles, formErrors}) {

    return (
        <div className="tab-pane tab-pane-parent fade px-0" id="media" role="tabpanel" aria-labelledby="media-tab">
            <div className="card bg-transparent border-0">
                <div className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0" id="heading-media">
                <h5 className="mb-0">
                    <button className="btn btn-lg collapse-parent btn-block border shadow-none" data-toggle="collapse" data-number={2.} data-target="#media-collapse" aria-expanded="true" aria-controls="media-collapse">
                    <span className="number">2.</span> Media
                    </button>
                </h5>
                </div>
                <div id="media-collapse" className="collapse collapsible" aria-labelledby="heading-media" data-parent="#collapse-tabs-accordion">
                <div className="card-body py-4 py-md-0 px-0">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Photos
                            of your property</h3>
                            <p className="card-text mb-5">Upload high quality images, this attracts even more clients</p>
                           <FileInput name="" files={files} setFiles={setFiles}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property video tour</h3>
                            <p className="card-text mb-5">
                                Upload your short fun video to Youtube, copy the link and paste it in the box below.<br/> BTW, clients love this part.
                                {/* Give your clients a fun video tour of your property. <br/> Trust us, they enjoy this. */}
                            </p>
                            <div className="form-row mx-n2">
                                <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                    <div className="form-group mb-md-0">
                                        {/* <label htmlFor="embed-video-id"  className="text-heading">Upload Video File</label> */}
                                        <input type="text" name="video_links" className="form-control form-control-lg border-0" placeholder="Youtube, Vimeo or any link to your Video" id="embed-video-id" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.video_links?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex flex-wrap">
                    <button className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button" type="button" role="button">
                        <span className="d-inline-block text-primary mr-2 fs-16"><i className="fal fa-long-arrow-left" /></span>Prev step
                    </button>
                    <button className="btn btn-lg btn-primary next-button mb-3" type="button" role="button">Next step
                        <span className="d-inline-block ml-2 fs-16"><i className="fal fa-long-arrow-right" /></span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
