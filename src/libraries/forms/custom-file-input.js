export function FileInput () {
    return (
        <div className="dropzone upload-file text-center py-5" data-uploader="true"
            id="myDropzone" data-uploader-url="./dashboard-add-new-property.html">
            <div className="dz-default dz-message">
                <span className="upload-icon lh-1 d-inline-block mb-4">
                    <i className="fal fa-cloud-upload-alt" />
                </span>
                <p className="text-heading fs-22 lh-15 mb-4">Drag and drop image or</p>
                <button className="btn btn-indigo px-7 mb-2" type="button"> Browse file </button>
                <input type="file" onChange={compileFile} hidden multiple/>
                <p>Photos must be JPEG or PNG format and least 1024x768</p>
            </div>
        </div>
    )
}