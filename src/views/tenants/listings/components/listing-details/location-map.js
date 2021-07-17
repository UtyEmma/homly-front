import React from 'react'

export default function ListingMap() {
    return (
        <>
            <section className="mt-2 pb-6 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Location</h4>
                <div className="position-relative">
                <div id="map" className="mapbox-gl map-point-animate" data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ" data-mapbox-options="{&quot;center&quot;:[-73.9927227, 40.6741035],&quot;setLngLat&quot;:[-73.9927227, 40.6741035]}" data-mapbox-marker="[{&quot;position&quot;:[-73.9927227, 40.6741035],&quot;className&quot;:&quot;marker&quot;,&quot;backgroundImage&quot;:&quot;images/googlle-market-01.png&quot;,&quot;backgroundRepeat&quot;:&quot;no-repeat&quot;,&quot;width&quot;:&quot;30px&quot;,&quot;height&quot;:&quot;40px&quot;}]">
                </div>
                <p className="mb-0 p-3 bg-white shadow rounded-lg position-absolute pos-fixed-bottom mb-4 ml-4 lh-17 z-index-2">62 Gresham St, Victoria Park <br />
                    WA 6100, Australia</p>
                </div>
            </section>
        </>
    )
}
