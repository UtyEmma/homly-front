import { FetchCategories } from 'providers/redux/_actions/category-actions';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import $ from 'jquery'
// import 'bootstrap-select'

export default function SelectListingCategory({title, register, formError, name, id, onChange, classes, styles}) {
    const dispatch = useDispatch();
    const fetchCategories = useSelector(state => state.categories)
    const {loading, categories, error} = fetchCategories

    const loadCategories = () => { dispatch(FetchCategories()) }

    useEffect(() => {
        if(!categories){
            loadCategories()
        }
    }, [categories])


    return (
        <div>
            <label htmlFor={id} className="text-heading">{title}</label>
            {
                categories 
                
                &&  
                
                <select className={classes}  {...register} title="Select" data-style={styles} id={id} onChange={onChange} name={name}>
                    <option value="">Type</option>
                    {categories.map((category, index) => (
                        <option value={category.category_title} key={index}>{category.category_title}</option>
                    ))}
                </select>

            }
            <p className="text-danger fs-14">{error}</p>
        </div>
    )
}

export function SelectTypes ({id, classes, register, styles, onChange, name}){
    const dispatch = useDispatch();
    const fetchCategories = useSelector(state => state.categories)
    const {loading, categories, error} = fetchCategories

    const loadCategories = () => { dispatch(FetchCategories()) }

    useEffect(() => {
        if(!categories){
            loadCategories()
        }
    }, [categories])

    return (
        <>
            {
                categories 
                
                &&

                <select className={classes}  {...register} title="Select" data-style={styles} id={id} onChange={onChange} name={name}>
                    <option value="">Type</option>
                    {categories.map((category, index) => (
                        <option value={category.category_title} key={index}>{category.category_title}</option>
                    ))}
                </select>
            }
        </>
    )
}

export function SearchbarSelectListing ({onChange}) {

    const dispatch = useDispatch();
    const fetchCategories = useSelector(state => state.categories)
    const {loading, categories, error} = fetchCategories
    const category =  useRef()

    const loadCategories = () => { dispatch(FetchCategories()) }

    useEffect(() => {
        if(!categories){
            loadCategories()   
        }
    }, [categories])

    return (
        <div>
            {
                categories 
                    
                &&

                <select className="form-control shadow-none form-control-lg rounded-right-md-0 rounded-md-top-left-0 rounded-lg-top-left flex-md-1 mt-3 mt-md-0" title="All Types" data-style="btn-lg py-2 h-52 border-right bg-white" onChange={onChange} id="category" name="category">
                    {categories.map((category, index) => (
                        <option key={index}>{category.category_title}</option>
                    ))}
                </select>
            }
        </div>
    )
}
