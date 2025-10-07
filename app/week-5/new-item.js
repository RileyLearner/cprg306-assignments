"use client";

import { useState } from "react";

export default function NewItem() {

    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    let incrementButtonDetails = "bg-indigo-300 hover:bg-indigo-700 w-15 cursor-pointer p-3 m-1 rounded-2xl";
    let decrementButtonDetails = "bg-indigo-300 hover:bg-indigo-700 w-15 cursor-pointer p-3 m-1 rounded-2xl";

    if (quantity <= 1) {
        decrementButtonDetails = "bg-gray-300 w-15 p-3 m-1 rounded-2xl";
    }

    if (quantity >= 20) {
        incrementButtonDetails = "bg-gray-300 w-15 p-3 m-1 rounded-2xl";
    }

    const handleProductName = (event) => setProductName(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let storeObj = {
            productName: productName,
            quantity: quantity, 
            category: category
        }
        console.dir(storeObj);

        alert(`${quantity} ${productName} has been added to ${category}`);

        resetForm;
    }

    const resetForm = () => {
        setProductName("");
        setQuantity(1);
        setCategory("");
    }


    return (
        <form className="text-center p-4">
            <div className="border-white p-2">
                <h2 className="text-white">Name of Product</h2>
                <input type="text" className="bg-blue-200 hover:bg-blue-100 m-1 p-2 cursor-pointer" onChange={handleProductName}></input>
            </div>
            <div>
                <div className="text-white text-4xl">{quantity}</div>
                <button type="button" className={incrementButtonDetails} onClick={increment}>+</button>
                <button type="button" className={decrementButtonDetails} onClick={decrement}>-</button>
            </div>
            <div>
                <h2 className="text-white border-white m-2">Category</h2>
                <select className="text-black bg-blue-200 hover:bg-blue-100 m-1 p-2 cursor-pointer" onChange={handleCategory}>
                    <option value="">-</option>
                    <option value="produce">Produce</option>
                    <option value="diary">Diary</option>
                    <option value="bakery">Bakery</option>
                    <option value="meats & seafood">Meats & Seafood</option>
                    <option value="non-perishables">Non-Perishables</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="text-white">
                <button type="submit" className="text-black bg-blue-300 hover:bg-blue-100 mx-2 my-3 p-2 rounded w-30 cursor-pointer"
                onClick={handleSubmit} >Submit</button>
            </div>
        </form>
    );
}