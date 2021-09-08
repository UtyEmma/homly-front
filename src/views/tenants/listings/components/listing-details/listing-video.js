import React from 'react'
import ReactPlayer from 'react-player'

export default function ListingVideo({video}) {
    return (
        <>
            <div className="">
                <ReactPlayer width="auto" height="auto" url={video} />
            </div>
        </>
    )
}
