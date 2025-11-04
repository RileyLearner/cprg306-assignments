"use client";

export default function Item({ name, quantity, category }) {

    return (
        <div className="pl-10 py-4">
            <h3 className="text-2xl border-b-2">{name}</h3>
            <ul className="list-disc pl-4">
                <li className="text-sm italic">Quantity: {quantity}</li>
                <li className="text-sm italic">Category: {category}</li>
            </ul>
        </div>
    );
}