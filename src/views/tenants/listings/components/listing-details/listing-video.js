import React from 'react'
import ReactPlayer from 'react-player'

export default function ListingVideo({video}) {
    return (
        <>
            <section className="">
                <ReactPlayer url={video} />
            </section>
        </>
    )
}
