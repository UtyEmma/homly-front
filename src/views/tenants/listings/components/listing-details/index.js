import React from "react";
import ListingInfo from "./listing-info";
import ListingReviews from "./listing-reviews";
import ListingStats from "./listing-stats";
import ListingVideo from "./listing-video";
import SimilarListings from "./similar-listings";
import ListingGallery from "./listing-gallery";
import { Nav, Row, Tab, Tabs } from "react-bootstrap";
import { ListingFeatures } from "./listing-features";

export default function ListingComponents({ listing, status }) {
  return (
    <>
        <ListingGallery title={listing.title} images={listing.images} />

        <Tabs defaultActiveKey="description" className="mt-5" id="uncontrolled-tab-example">
            <Tab eventKey="description" cl title="Description">
                <ListingInfo listing={listing} />
            </Tab>
            <Tab eventKey="details" title="Details">
                <ListingFeatures listing={listing} />
                <ListingVideo video={listing.video_links} />
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
                <ListingReviews status={status} listing_id={listing.unique_id} />
            </Tab>
            <Tab eventKey="more" title="More">
                <SimilarListings />
            </Tab>
        </Tabs>

        {/* <ListingStats /> */}
    </>
  );
}
