import { focusSearchBar } from 'libraries/events/keyboard-events'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const SearchForm = ({classes}) => {

    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        history.push(`/search?keyword=${formData.get('keyword')}`)
    }

    // useEffect(() => {
    //     document.addEventListener('keypress', focusSearchBar, true)
    // })

    return (
        <form className="d-flex" onSubmit={handleSearch}>
        <div className="position-relative w-100">
            <i className="far fa-search text-dark fs-18 position-absolute pl-4 pos-fixed-left-center" />
            <input id="search" type="text" name="keyword" className={`rounded-bottom-right-lg w-100 pl-8 py-4 bg-white border-0 fs-13 font-weight-500 text-gray-light rounded-0 lh-17 ${classes}`} placeholder="Enter an address, neighborhood (Press '/')" />
        </div>
            <button  type="submit" className="btn btn-primary fs-16 font-weight-600 rounded-left-0 rounded-lg">
                Search
            </button>
    </form>
    )
}
