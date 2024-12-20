function ListItem({ item, onRemove }) {

    function onDelete() {
        console.log('sendin notification for', item);
        onRemove(item);
    }

    return <tr className="bg-white border-b">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item}</td>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <button onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </td>
    </tr>
}

export default ListItem;