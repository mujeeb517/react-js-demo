import { useState } from "react";
import ListItem from "./ListeItem";

function List() {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

    const onDelete = (val) => {
        const copyItems = [...items];
        for (let i = 0; i <= copyItems.length; i++) {
            if (copyItems[i] === val) {
                copyItems.splice(i, 1);
            }
        }
        setItems(copyItems);
    };

    return <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-gray-700 p-4 uppercase text-white rounded bg-gray-700">
                <tr>
                    <th scope="col" class="px-6 py-3">Item</th>
                    <th scope="col" class="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => <ListItem item={item} onRemove={onDelete} />)}
            </tbody>
        </table>

    </div>
}

export default List;