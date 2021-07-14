import React, {useState, useCallback, useRef} from 'react'
import "@yaireo/tagify/dist/tagify.css"
import Tags from '@yaireo/tagify/dist/react.tagify'


const Tagify = ({value, suggestions, name}) => {
    const baseTagifySettings = {
        blacklist: ["xxx", "yyy", "zzz"],
        whitelist: suggestions,
        maxTags: 6,
        //backspace: "edit",
        placeholder: "type something",
        dropdown: {
          enabled: 0 // a;ways show suggestions dropdown
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
