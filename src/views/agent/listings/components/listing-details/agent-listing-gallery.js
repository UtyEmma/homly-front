import { SRLWrapper } from "simple-react-lightbox"

export const AgentListingGallery = ({listing}) => {
    return (
        <SRLWrapper>

            <section className="pb-8 px-6 pt-6 bg-white rounded-lg my-3">
                    <h4 className="fs-22 text-heading">Property Gallery</h4>
                    <span className="heading-divider mb-6"></span>
                    <div className="row galleries">
                        <div className="col-sm-6 col-md-5 mb-6">
                            <div className="item item-size-1-1">
                                <div className="card p-0 hover-zoom-in" data-gtf-mfp="true" data-gallery-id={'01'}>
                                    <img src={listing.images[0]} alt={listing.title} style={{objectFit: 'cover', minHeight: "100%", objectPosition: 'center'}} />
                                </div>
                            </div>
                        </div>
                    <div className="col-md-7">
                        <div className="row h-100">

                            {

                                listing.images.map((image, index) => {
                                    return (
                                        index !== 0

                                        &&
    
                                        <div className="col-sm-6 col-md-4 mb-6" key={index} >
                                            <div className="item item-size-1-1">
                                            <div className="card p-0 hover-zoom-in" data-gtf-mfp="true" data-gallery-id={'0'+index}>
                                                <img src={image} alt={listing.title} style={{objectFit: 'cover', minHeight: "100%", objectPosition: 'center'}} />
                                            </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
    </section>   
        </SRLWrapper>
    )
}
