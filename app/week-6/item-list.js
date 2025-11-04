"use client"

//

import Item from "./item.js";
import data from "./items.json"
import { useState } from "react";

const itemData = data;

export default function ItemList() {

    let [sortBy, setSortBy] = useState("name");

    const handleSorting = (event) => setSortBy(event.target.value);

    //sorting logic
    const sortedItems = [...data].sort((a, b) => {

        if (sortBy == "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy == "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
        
    });

    return (
        <div>
            <div className="m-4">

                <button 
                onClick={handleSorting} 
                value={"name"} 
                className={` text-white w-30 cursor-pointer p-3 m-1 rounded-2xl
                ${sortBy === "name" ? "bg-gray-400 hover:bg-gray-400" : "bg-indigo-500 hover:bg-indigo-700"}`}>
                    Name
                </button>

                <button 
                onClick={handleSorting} 
                value={"category"} 
                className={` text-white w-30 cursor-pointer p-3 m-1 rounded-2xl
                ${sortBy === "category" ? "bg-gray-400 hover:bg-gray-400" : "bg-indigo-500 hover:bg-indigo-700"}`}>
                    Category
                </button>
            </div>

            {/* display objects */}

            <div>
                {sortedItems.map( (item) => (
                    <Item 
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    />
                ) )}
            </div>
        </div>
    );
}