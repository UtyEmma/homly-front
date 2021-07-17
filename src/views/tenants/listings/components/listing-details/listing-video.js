import React from 'react'

export default function ListingVideo() {
    return (
        <>
            <section className="mt-2 pb-6 px-6 pt-6 bg-white rounded-lg">
                <h4 className="fs-22 text-heading mb-6">Virtual Tour</h4>
                <iframe height={430} src="https://my.matterport.com/show/?m=wWcGxjuUuSb&utm_source=hit-content-embed" allowFullScreen className="w-100" />
            </section>  
        </>
    )
}
