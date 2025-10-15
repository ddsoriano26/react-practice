/*
To-Do List Component
Fix styles for to-do list items later
*/
import { useState } from "react"

function TodoList() {
    const [items, setItems] = useState<string[]>([])
    const [newItem, setNewItem] = useState('')

    const addItem = () => {
        if (newItem.length > 0) {
            setItems([...new Set([...items, newItem])])
        } else {
            alert('No item found!')
        }

        // Clear input
        setNewItem('')
    }

    const deleteItem = (itemToDelete: string) => {
        setItems(items.filter((item: string) => item !== itemToDelete))
    }

    const completeList = () => {
        if (items.length > 0) {
            const newDisplayText = `Your to-do list items are:${
                items.map((item: string) => {
                    return ` ${item}`
                })
            }`
            alert(`${newDisplayText}.`)
        } else {
            alert("There are no items in the to-do list.")
        }
    }

    return (
        <>
            <h1>To-Do List</h1>
            <div style={{ width: '100%' }}>
                <div className="row">
                    <input
                        placeholder="Add your to-do list item here..."
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)} style={{ flex: 1 }}
                    />
                    <button onClick={addItem}>Add</button>
                </div>
                <ul style={{ width: '100%' }}>
                    {
                        items.map((item: string) => {
                            return (<div style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
                                        <li>{item}</li>
                                        <button onClick={() => {deleteItem(item)}}>Delete</button>
                                    </div>)
                        })
                    }
                </ul>
                <button onClick={completeList}>Complete</button>
            </div>
        </>
    )
}

export default TodoList
