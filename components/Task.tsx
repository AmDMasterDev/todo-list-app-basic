import { ITask } from "@/model/task";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit cursor="pointer" size={25} className="text-blue-500" />
        <FiTrash2 cursor="pointer" size={25} className="text-red-500" />
      </td>
    </tr>
  );
};

export default Task;
