import React, {useState, useCallback, useRef} from 'react'
import "@yaireo/tagify/dist/tagify.css"
import Tags from '@yaireo/tagify/dist/react.tagify'


const Tagify = ({value, suggestions, name}) => {
    const baseTagifySettings = {
        blacklist: [],
        whitelist: suggestions,
        maxTags: 6,
        backspace: "edit",
        placeholder: "Type Feature",
        dropdown: {
          enabled: 0
        }
    }
      
  const onChange = useCallback(e => {
    console.log("CHANGED:", e.detail.value)
  }, [])

  return (
    <>
      <Tags
        settings={baseTagifySettings}
        defaultValue={value}
        onChange={onChange}
        className="form-control"
        name={name}
      />
    </>
  )
}

export default Tagify;
