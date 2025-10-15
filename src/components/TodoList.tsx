import { useState } from "react"

function TodoList() {
    const [items, setItems] = useState<string[]>([])
    const [newItem, setNewItem] = useState('')
    const [displayText, setDisplayText] = useState('No items in to-do list')

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
            setDisplayText(`${newDisplayText}.`)
        }
    }

    return (
        <>
        <h1>To-Do List</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%', gap: '10px' }}>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} style={{ flex: 1 }} />
                <button onClick={addItem}>Add</button>
            </div>
            <ul>
                {
                    items.map((item: string) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
            <button onClick={completeList}>Complete</button>
        </div>
        <div>
            {displayText}
        </div>
        </>
    )
}

export default TodoList
