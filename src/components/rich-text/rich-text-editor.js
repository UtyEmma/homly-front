import React, { useEffect, useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html'
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

export const RichTextEditor = ({name, editorClassName, placeholder, defaultContentState}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [content, setContent] = useState()
    const [show, setShow] = useState(true)

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const handleSetShow = () => {
        setShow(!show)
    }

    useEffect(() => {
        let state = editorState && editorState.getCurrentContent()
        let text = state?.getPlainText();
        editorState && text !== "" && text.length > 0 && text.trim() !== ""  
                    ? setContent(draftToHtml(convertToRaw(editorState.getCurrentContent()))) 
                                : setContent('')
    }, [editorState])

    return (
        <>
             <Editor
                editorState={editorState}
                toolbarClassName="toolbar-class"
                wrapperClassName="demo-wrapper"
                editorClassName={editorClassName}
                onEditorStateChange={onEditorStateChange}
                toolbarOnFocus
                toolbarHidden={show}
                onFocus={handleSetShow}
                onBlur={handleSetShow}
                defaultContentState={defaultContentState}
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'history'],
                }}
                placeholder={placeholder} 
            />
            <textarea className="form-control border-0" value={content}  hidden rows={5} name={name} id="description-01" />
        </>
    )
}
