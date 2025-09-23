//In page.js, create a functional component named Page that returns a main element wrapped around
//an h1 "Shopping List" header and the ItemList component. 
//Use Tailwind classes for styling.

import ItemList from "./item-list";

export default function Page() {

    return (
        //add styling
        <main className="bg-gray-700 text-amber-200 p-8 ">
            <h1 className="text-6xl p-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}