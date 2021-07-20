import React, { useCallback } from 'react'
import "@yaireo/tagify/dist/tagify.css"
import Tags from '@yaireo/tagify/dist/react.tagify'


const Tagify = ({value, suggestions, name, setValue, val, message}) => {
	const baseTagifySettings = {
		blacklist: [],
		whitelist: suggestions,
		maxTags: 6,
		backspace: "edit",
		placeholder: message,
		dropdown: {
			enabled: 0
		}
	}
      
  const onChange = useCallback(e => {
	const details = JSON.parse(e.detail.value);
	let items = [];
	for(let i = 0; i < details.length; i++) {
		let detail = details[i]
		items = [...items, detail.value]           
	}
	setValue([...items]);
  }, [])

  return (
    <>
      <Tags
		className="form-control border-0"
        settings={baseTagifySettings}
        defaultValue={value}
        onChange={onChange}
        name={name}
      />
    </>
  )
}

export default Tagify;
