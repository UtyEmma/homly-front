import { FetchCategories } from 'providers/redux/_actions/category-actions';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import $ from 'jquery'
// import 'bootstrap-select'

export default function SelectListingCategory({title, defaultValue, register, formError, name, id, onChange, classes, styles}) {
    const dispatch = useDispatch();
    const fetchCategories = useSelector(state => state.categories)
    const {loading, categories, error} = fetchCategories

    const loadCategories = () => { dispatch(FetchCategories()) }

    useEffect(() => {
        if(!categories){ loadCategories() }
        window.$('select').selectpicker()
    }, [categories])


    return (
        <div>
            <label htmlFor={id} className="text-heading">{title}</label>
            {
                categories 
                
                &&  
                
                <select className={classes}  title="Category" defaultValue={defaultValue} data-style={styles} id={id} onChange={onChange} name={name}>
                    {categories.map((category, index) => (
                        <option value={category.category_title} key={index}>{category.category_title}</option>
                    ))}
                </select>

            }
            <p className="text-danger fs-14">{error}</p>
        </div>
    )
}

export function SelectTypes ({id, classes, styles, onChange, name}){
    const dispatch = useDispatch();
    const fetchCategories = useSelector(state => state.categories)
    const {loading, categories, error} = fetchCategories

    const loadCategories = () => { dispatch(FetchCategories()) }

    useEffect(() => {
        if(!categories){ loadCategories() }
        window.$('select').selectpicker()
    }, [categories])

    return (
        <>
            {
                categories 
                
                &&

                <select className={classes}  title="Category" data-style={styles} id={id} onChange={onChange} name={name}>
                    {categories.map((category, index) => (
                        <option value={category.category_title} key={index}>{category.category_title}</option>
                    ))}
                </select>
            }
        </>
    )
}

export function SearchbarSelectListing ({onChange, name}) {

    const dispatch = useDispatch();
    const fetchCategories = useSelector(state => state.categories)
    const {loading, categories, error} = fetchCategories

    const loadCategories = () => { dispatch(FetchCategories()) }

    useEffect(() => {
        if(!categories){
            loadCategories()   
        }
        window.$('select').selectpicker('refresh')
    }, [categories])

    return (
        <div>
            {
                categories 
                    
                &&

                <select name={name} className="form-control shadow-none form-control-lg rounded-right-md-0  rounded flex-md-1 mt-3 mt-md-0 selectpicker" title="Select Category" data-style="btn-lg py-2 h-52 border-right bg-white" onChange={onChange} id="type" name="type">
                    <option disabled>All Categories</option>
                    {categories.map((category, index) => (
                        <option value={category.category_title} key={index}>{category.category_title}</option>
                    ))}
                </select>
            }
        </div>
    )
}
