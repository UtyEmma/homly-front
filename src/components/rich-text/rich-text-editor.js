import React, { useEffect, useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';


export const RichTextEditor = ({name, editorClassName, placeholder, defaultContentState, reset}) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [content, setContent] = useState()
    const [show, setShow] = useState(true)

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const handleSetShow = () => {
        setShow(!show)
    }

    const resetEditor = () => {
        setEditorState(EditorState.createEmpty())
    }

    useEffect(() => {
        if(defaultContentState){
            const blocksFromHtml = htmlToDraft(defaultContentState);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, [defaultContentState])

    useEffect(() => {
        reset && resetEditor()
    }, [reset])

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
                toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'history'],
                }}
                placeholder={placeholder} 
            />
            <textarea className="form-control border-0" value={content}  hidden rows={5} name={name} id="description-01" />
        </>
    )
}
