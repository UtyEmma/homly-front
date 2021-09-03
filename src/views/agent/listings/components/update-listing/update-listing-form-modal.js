import { UpdateListingForm } from "./update-listing-form"

export const UpdateListingModal = ({listingItem}) => {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header border-0">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                        <div className="modal-body py-2">
                            <UpdateListingForm listing={listingItem}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
