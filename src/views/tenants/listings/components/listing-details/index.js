import React from "react";
import ListingInfo from "./listing-info";
import ListingReviews from "./listing-reviews";
import ListingVideo from "./listing-video";
import SimilarListings from "./similar-listings";
import ListingGallery from "./listing-gallery";
import { Tab, Tabs } from "react-bootstrap";
import { ListingFeatures } from "./listing-features";

export default function ListingComponents({ listing, status }) {
  return (
    <>
        <ListingGallery listing={listing} />

        <Tabs defaultActiveKey="description" className="mt-5" id="uncontrolled-tab-example">
            <Tab eventKey="description" title="Description">
                <ListingInfo listing={listing} />
            </Tab>
            <Tab eventKey="details" title="Details">
                <ListingFeatures listing={listing} />
                <ListingVideo video={listing.video_links} />
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <ListingReviews status={status} listing_id={listing.unique_id} />
            </Tab>
            {/* <Tab eventKey="more" title="More">
                <SimilarListings />
            </Tab> */}
        </Tabs>

        {/* <ListingStats /> */}
    </>
  );
}
