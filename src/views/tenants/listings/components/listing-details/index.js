import React from "react";
import ListingInfo from "./listing-info";
import ListingReviews from "./listing-reviews";
import ListingVideo from "./listing-video";
import ListingGallery from "./listing-gallery";
import { Tab, Tabs } from "react-bootstrap";
import { ListingFeatures } from "./listing-features";

export default function ListingComponents({ listing, status }) {
  return (
    <>
        <ListingGallery listing={listing} status={status} />

        <Tabs defaultActiveKey="description" className="mt-5 bg-transparent" id="uncontrolled-tab-example" >
            <Tab eventKey="description" title="Description" tabClassName="px-2 px-md-4">
                <ListingInfo listing={listing} />
            </Tab>
            <Tab eventKey="details" title="Details" tabClassName="px-2 px-md-4">
                <ListingFeatures listing={listing} />
                <ListingVideo video={listing.video_links} />
            </Tab>
            <Tab eventKey="reviews" title="Reviews" tabClassName="px-2 px-md-4">
                <ListingReviews status={status} listing_id={listing.unique_id} listing={listing} />
            </Tab>
            {/* <Tab eventKey="more" title="More">
                <SimilarListings />
            </Tab> */}
        </Tabs>

        {/* <ListingStats /> */}
    </>
  );
}
