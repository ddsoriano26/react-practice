/*
Task List
*/
import type { Task } from "../utils/types"
import TaskItem from "./TaskItem"

function TaskList({ tasks, toggleTask }: {
    tasks: Task[],
    toggleTask: (id: number) => void,
}) {
    return (
        <>
            <div className="w-full flex flex-col gap-5 items-center">
                {
                    tasks.map((task: Task) => {
                        return (
                            <TaskItem task={task} toggleTask={toggleTask} key={task.id} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default TaskList