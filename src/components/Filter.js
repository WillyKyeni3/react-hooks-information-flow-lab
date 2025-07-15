import React from "react";

function Filter({onCategoryChange }) {
    // This component renders a dropdown to filter items by category
return (
    <div className="Filter" >
        <select name="filter" onChange={onCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Meat">Meat</option>
            <option value="Dessert">Dessert</option>
        </select>
    </div>
);
}

export default Filter;

