import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        setCategories([...categories, newCategory]);
    }
    return (
        <>
            {/* titulo */}
            <h1>GixExpertApp</h1>
            {/* Input */}
            <AddCategory 
                onNewCategory={(event) => onAddCategory(event)}
                ></AddCategory>

            {/* Listado de Gifs */}
            <ol>
                { categories.map(category => {
                    return <li key={category}>{category}</li>
                    }) 
                }
            </ol>
                {/*  Gift Item */}
        </>
    )
}
