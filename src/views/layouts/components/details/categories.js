import { FetchCategories } from 'providers/redux/_actions/category-actions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function SelectListingCategory({title, register, formError, name, id, onChange}) {
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
            <label htmlFor="category" className="text-heading">{title}</label>
            {
                categories 
                
                &&  
                
                <select className="form-control border-0 shadow-none form-control-lg" {...register} title="Select" data-style="btn-lg py-2 h-52" id={id} onChange={onChange} name={name}>
                    {categories.map((category) => (
                        <option>{category.category_title}</option>
                    ))}
                </select>

            }
            <p className="text-danger fs-14">{error}</p>
        </div>
    )
}
