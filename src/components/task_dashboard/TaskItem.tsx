/*
Task Item
*/
import { useState } from "react"
import type { Task } from "../utils/types"

function TaskItem({ task, toggleTask }: {
    task: Task,
    toggleTask: (id: number) => void,
}) {
    const [completed, setCompleted] = useState(task.completed)

    const onToggleCheckbox = () => {
        setCompleted(!task.completed)
        toggleTask(task.id)
    }

    return (
        <>
            <div className="flex w-full p-2 gap-2 items-center content-center rounded-sm">
                <input type="checkbox" checked={completed} onChange={onToggleCheckbox} />
                <text>{task.title}</text>
                <text className="text-sm">{task.priority}</text>
            </div>
        </>
    )
}

export default TaskItem
