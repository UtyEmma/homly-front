import React from 'react'
import ReactPlayer from 'react-player'

export default function ListingVideo({video}) {
    return (
        <>
            <ReactPlayer width="auto" height="350px" url={video} />
        </>
    )
}
