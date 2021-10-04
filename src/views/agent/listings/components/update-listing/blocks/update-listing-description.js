import { RichTextEditor } from "components/rich-text/rich-text-editor"
import SelectListingCategory from "views/layouts/components/details/categories"

export const UpdateListingDescription = ({listing, formErrors}) => {
    return (
        <div className="card bg-white border-0">
            <div className="card-body py-4 py-md-0 px-0">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-6">
                        <div className="card-body p-md-6">
                            <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property Description</h3>
                            <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <div className="form-group">
                            <label htmlFor="title" className="text-heading">Title <span className="text-muted">(mandatory)</span></label>
                            <input type="text" className="form-control form-control-lg border-0" defaultValue={listing?.title} id="title" name="title" />
                            <p className="text-danger fs-12">{formErrors.title?.message}</p>
                            </div>
                            <div className="form-group mb-0">
                                <label htmlFor="category" className="text-heading">Type</label>
                                <SelectListingCategory classes="form-control border-0 shadow-none form-control-lg" name="type" defaultValue={listing?.type} />
                                <p className="text-danger fs-12">{formErrors.type?.message}</p>
                            </div>
                            <div className="form-group mb-0">
                            <label htmlFor="description-01" className="text-heading">Description</label>
                            <RichTextEditor name="description" defaultContentState={listing?.description} editorClassName="form-control border-0" />
                            <p className="text-danger fs-12">{formErrors.description?.message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-6">
                            <div className="card-body p-md-6">
                                <h3 className="card-title mb-0 text-heading fs-22 lh-15">Rent Details</h3>
                                <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit</p>
                                <div className="form-row mx-n2">
                                <div className="col-md-6 col-lg-12 col-xxl-6 px-2 mb-4 mb-md-0">
                                    <div className="form-group mb-0">
                                    <label htmlFor="tenure" className="text-heading">Rent Tenure Duration</label>
                                    <select className="form-control border-0 shadow-none form-control-lg" title="Select" data-style="btn-lg py-2 h-52" id="tenure" defaultValue={listing?.tenure} name="tenure">
                                        <option value="">Select</option>
                                        <option>Monthly Tenancy</option>
                                        <option>Quaterly Tenancy</option>
                                        <option>Yearly Tenancy</option>
                                    </select>
                                    <p className="text-danger fs-12">{formErrors.tenure?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-6">
                    <div className="card-body p-md-6">
                        <h3 className="card-title mb-0 text-heading fs-22 lh-15">Property Fees</h3>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit</p>
                        <div className="form-row mx-n2">
                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                <div className="form-group">
                                    <label htmlFor="rent" className="text-heading">Total Rent in &#8358; </label>
                                    <input type="text" className="form-control form-control-lg border-0" defaultValue={listing?.rent} id="rent" name="rent" />
                                    <p className="text-danger fs-12">{formErrors.rent?.message}</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-row mx-n2">
                            <div className="col-md-6 col-lg-12 col-xxl-6 px-2">
                                <div className="form-group">
                                    <label htmlFor="extra_fees" className="text-heading">Professional Fees in &#8358; </label>
                                    <input type="text" className="form-control form-control-lg border-0" defaultValue={listing?.extra_fees} id="extra_fees" name="extra_fees" />
                                    <p className="text-danger fs-12">{formErrors.extra_fees?.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
