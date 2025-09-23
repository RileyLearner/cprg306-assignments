"use client";

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

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

    let incrementButtonDetails = "bg-indigo-300 hover:bg-indigo-700 w-20 cursor-pointer p-4 m-2 rounded-2xl";
    let decrementButtonDetails = "bg-indigo-300 hover:bg-indigo-700 w-20 cursor-pointer p-4 m-2 rounded-2xl";

    if (quantity <= 1) {
        decrementButtonDetails = "bg-gray-300 w-20 p-4 m-2 rounded-2xl";
    }

    if (quantity >= 20) {
        incrementButtonDetails = "bg-gray-300 w-20 p-4 m-2 rounded-2xl";
    }

    return (
        <div className="text-center m-4">
            <div className="text-white text-9xl">{quantity}</div>
            <button className={incrementButtonDetails} onClick={increment}>+</button>
            <button className={decrementButtonDetails} onClick={decrement}>-</button>
        </div>
    );
}