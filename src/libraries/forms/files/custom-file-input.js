import { useRef, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export function FileInput ({files, setFiles, name}) {  

    const updateFiles = (fileItems) => {
        setFiles(fileItems.map(fileItem => fileItem.file))
    }
    
    return (
        <>
            <FilePond 
                name={name}
                files={files}
                allowReorder={true}
                onupdatefiles={updateFiles}
                allowMultiple={true}
                maxFiles={7}
                imagePreviewHeight="100px"
                labelIdle='Drag & Drop Images here or <span class="filepond--label-action">Browse</span>'
            />
        </>
    )
}