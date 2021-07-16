import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { StoreListing } from '../../../../../providers/redux/_actions/listing/listing-actions';

export default function ListingMedia() {

    const dispatch = useDispatch();
    const listing = useSelector((state) => state.store_listing.store);

    const compileMedia = (e) => {
        dispatch(StoreListing({
            ...listing,
            [e.target.name] : e.target.value
        }))
    }

    const compileFile = (e) => {
        console.log(e)
        console.log(e.target)
    }

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
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Upload photos
                            of your property</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit</p>
                            <div className="dropzone upload-file text-center py-5" 
                                    data-uploader="true"
                                    id="myDropzone"
                                    data-uploader-url="./dashboard-add-new-property.html">
                                <div className="dz-default dz-message">
                                <span className="upload-icon lh-1 d-inline-block mb-4"><i className="fal fa-cloud-upload-alt" /></span>
                                <p className="text-heading fs-22 lh-15 mb-4">Drag and drop image
                                or</p>
                                <button className="btn btn-indigo px-7 mb-2" type="button">
                                Browse file
                                </button>
                                <input type="file" onChange={compileFile} hidden multiple/>
                                <p>Photos must be JPEG or PNG format and least
                                1024x768</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Upload Video</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit</p>
                            <div className="form-row mx-n2">
                                <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                    <div className="form-group mb-md-0">
                                    <label htmlFor="embed-video-id"  className="text-heading">Upload Video File</label>
                                    <input type="text" name="video_link" onChange={compileMedia} className="form-control form-control-lg border-0" id="embed-video-id" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex flex-wrap">
                    <a href="#" className="btn btn-lg bg-hover-white border rounded-lg mb-3 mr-auto prev-button">
                        <span className="d-inline-block text-primary mr-2 fs-16"><i className="fal fa-long-arrow-left" /></span>Prev step
                    </a>
                    <button className="btn btn-lg btn-primary next-button mb-3">Next step
                        <span className="d-inline-block ml-2 fs-16"><i className="fal fa-long-arrow-right" /></span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
