import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Superman']);

    const handleAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            window.alert('La categoría ya se encuentra en la lista papi')
            return;
        }
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewValue={handleAddCategory} />
            {categories.map((cat, index) =>
                <GifGrid key={index + '-' + cat} category={cat} />
            )}
        </>
    )
}