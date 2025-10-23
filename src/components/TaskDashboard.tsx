/*
Task Dashboard
Components:
-
*/
import { useCallback, useState } from "react"
import type { Task } from "./utils/types"
import TaskList from "./task_dashboard/TaskList"

function TaskDashboard() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Finish React exercise", priority: "High", completed: false },
        { id: 2, title: "Review Node.js code", priority: "Medium", completed: false },
        { id: 3, title: "Read about useCallback", priority: "Low", completed: true }
    ])

    const countCompleted = useCallback(() => {
        const completedTasks = tasks.filter((task: Task) => task.completed)
        return completedTasks.length
    }, [tasks])

    const toggleTask = useCallback((id: number) => {
        const newTasks = tasks.map((task: Task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            } else return task
        })
        setTasks(newTasks)
    }, [tasks])

    return (
        <div className="flex flex-col gap-8">
            <h1>Task Dashboard</h1>
            <TaskList tasks={tasks} toggleTask={toggleTask} />
            <h3>{`${tasks.length} total, ${countCompleted()} completed`}</h3>
        </div>
    )
}

export default TaskDashboard
