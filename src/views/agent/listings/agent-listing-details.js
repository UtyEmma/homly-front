import Preloader from "components/preloader/preloader"
import { FetchSingleListing } from "providers/redux/_actions/listing/listing-actions"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Header from "../layouts/shared/header"
import Sidebar from "../layouts/shared/sidebar"
import { AgentListingAmenities } from "./components/listing-details/agent-listing-amenities"
import { AgentListingAside } from "./components/listing-details/agent-listing-aside"
import { AgentListingDescription } from "./components/listing-details/agent-listing-description"
import { AgentListingDetails } from "./components/listing-details/agent-listing-details"
import { AgentListingGallery } from "./components/listing-details/agent-listing-gallery"
import { AgentListingLocation } from "./components/listing-details/agent-listing-location"
import { UpdateListingModal } from "./components/update-listing/update-listing-form-modal"

export const AgentListingDetail = ({loading, agent}) => {
    const {slug} = useParams();
    const dispatch = useDispatch()

    const details = useSelector((state) => state.listing);
    const {listing} = details;

    useEffect(() => {
        !listing && fetchListingData(slug)
    }, [listing]);

    const fetchListingData = (slug) => {
        dispatch(FetchSingleListing(slug))
    }

    return (
        <div className="wrapper dashboard-wrapper">
            <Preloader loading={loading} />
            <div className="d-flex flex-wrap flex-xl-nowrap">
                <Sidebar />

                <div className="page-content">
                <Header agent={agent}/>

                <main id="content" className="bg-gray-01">
                    <div className="px-3 px-lg-6 px-xxl-13 py-5 py-lg-10">
                    <div className="mb-6">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="/my-listings">My Properties</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{listing && listing.title}</li>
                            </ol>
                        </nav>
                    </div>
                        <div className="row">
                            {
                                listing

                                &&

                                <>
                                    <div className="col-md-8">
                                        <AgentListingDescription listing={listing} />
                                        <AgentListingGallery listing={listing} />
                                        <AgentListingAmenities listing={listing} amenities={listing.amenities} />
                                        <AgentListingDetails listing={listing} />
                                        <AgentListingLocation listing={listing} />
                                    </div>


                                    <div className="col-md-4">
                                        <AgentListingAside listing={listing} />
                                    </div>
                                </>
                            }                            
                        </div>

                    </div>
                </main>
                            
                {
                    listing

                    &&

                    <UpdateListingModal listing={listing}/>
                }
                </div>

            </div>
        </div>
    )
}
