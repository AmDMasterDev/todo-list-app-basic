import { ITask } from "@/model/task"

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={task.id}>
        <td>{task.text}</td>
        <td>Actions</td>
    </tr>
  )
}

export default Task