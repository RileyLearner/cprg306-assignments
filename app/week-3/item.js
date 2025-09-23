//In item.js, create a functional component named Item. This component should accept 
//name, 
//quantity, and 
//category as props 
//and display them in a list item element. Use Tailwind classes for styling.

export default function Item({ itemObj }) {

    return (
        <div className="pl-10 py-4">
            <h3 className="text-2xl border-b-2">{itemObj.name}</h3>
            <ul className="list-disc pl-4">
                <li className="text-sm italic">Quantity: {itemObj.quantity}</li>
                <li className="text-sm italic">Category: {itemObj.category}</li>
            </ul>
        </div>
    );
}