import { RichTextEditor } from "components/rich-text/rich-text-editor";
import React, { useEffect } from "react";
import SelectListingCategory from "views/layouts/components/details/categories";
import * as $ from 'jquery'

export default function ListingDescription({collapse, formErrors, reset }) {
  
  useEffect(() => {
    $('#description-tab').on('click', function(){
      const $ = window.jQuery
      $('#description-collapse').collapse('show')
    });
  }, [])

  return (
    <div className="tab-pane tab-pane-parent bg-transparent fade show active px-0" id="description" role="tabpanel" aria-labelledby="description-tab" >
      <div className="card bg-transparent border-0">
        <div
          className="card-header d-block d-md-none bg-transparent px-0 py-1 border-bottom-0"
          id="heading-description"
        >
          <h5 className="mb-0">
            <button className="btn btn-lg collapse-parent btn-block border shadow-none" data-toggle="collapse" data-number={1} data-target="#description-collapse" aria-expanded="true"
              aria-controls="description-collapse"
            >
              <span className="number">1.</span> Description
            </button>
          </h5>
        </div>
        <div id="description-collapse" className="collapse show collapsible" aria-labelledby="heading-description" data-parent="#collapse-tabs-accordion" >
          <div className="card-body py-4 py-md-0 px-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-6">
                  <div className="card-body p-6">
                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">
                      {" "}
                      Describe Property
                    </h3>
                    <p className="card-text mb-5">
                      Basic details about the property to help tenants{" "}
                    </p>
                    <div className="form-group">
                      <label htmlFor="title" className="text-heading">
                        Title<span class="text-danger">*</span>{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg border-0"
                        id="title"
                        name="title"
                      />
                      <p className="text-danger fs-12 mt-1">
                        {formErrors.title?.message}
                      </p>
                    </div>
                    <div className="form-group mb-0">
                      <label htmlFor="category" className="text-heading">
                        Type<span class="text-danger">*</span> <br />
                        <span className="text-muted">
                          What type of property is this?
                        </span>
                      </label>
                      <SelectListingCategory
                        classes="form-control border-0 shadow-none form-control-lg"
                        name="type"
                      />
                      <p className="text-danger fs-12">
                        {formErrors.type?.message}
                      </p>
                    </div>
                    <div className="form-group mb-0">
                      <label htmlFor="description-01" className="text-heading">
                        Description<span class="text-danger">*</span> <br />
                        <span className="text-muted">
                          Explain in detail what your tenants should be
                          expecting... this should be fun :)
                        </span>
                      </label>
                      <RichTextEditor
                        reset={reset}
                        name="description"
                        editorClassName="form-control border-0"
                      />
                      <p className="text-danger fs-12 mt-1">
                        {formErrors.description?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-6">
                  <div className="card-body p-6">
                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">
                      Type of Pricing
                    </h3>
                    <p className="card-text mb-5">
                      Will this be a rented property or a full-time ownership?
                    </p>
                    <div className="form-row mx-n2">
                      <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4 mb-md-0">
                        <div className="form-group mb-0">
                          <label htmlFor="tenure" className="text-heading">
                            Rent Tenure Duration
                            <span class="text-danger">*</span>
                          </label>
                          <select
                            className="form-control border-0 shadow-none form-control-lg"
                            title="Select"
                            data-style="btn-lg py-2 h-52"
                            id="tenure"
                            name="tenure"
                          >
                            <option value="">Select Rent Tenure</option>
                            <option>Monthly Tenancy</option>
                            <option>Quaterly Tenancy</option>
                            <option>Yearly Tenancy</option>
                          </select>
                          <p className="text-danger fs-12 mt-1">
                            {formErrors.tenure?.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-6">
                  <div className="card-body p-6">
                    <h3 className="card-title mb-0 text-heading fs-22 lh-15">
                      Pricing
                    </h3>
                    <p className="card-text mb-5">
                      Enter the amount clients will pay, for the type of pricing
                      you selected above
                    </p>
                    <div className="form-row mx-n2">
                      <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                        <div className="form-group">
                          <label htmlFor="rent" className="text-heading">
                            Property Fees (in &#8358;)
                            <span class="text-danger">*</span>{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg border-0"
                            id="rent"
                            name="rent"
                          />
                          <p className="text-danger fs-12 mt-1">
                            {formErrors.rent?.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="form-row mx-n2">
                      <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                        <div className="form-group">
                          <label htmlFor="extra_fees" className="text-heading">
                            Professional Fees (in &#8358;)
                            <span class="text-danger">*</span>{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg border-0"
                            id="extra_fees"
                            name="extra_fees"
                          />
                          <p className="text-danger fs-12 mt-1">
                            {formErrors.extra_fees?.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                className="btn btn-lg btn-primary next-button"
                type="button"
              >
                Next step
                <span className="d-inline-block ml-2 fs-16">
                  <i className="fal fa-long-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
