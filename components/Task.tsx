"use client";

import { ITask } from "@/model/task";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setIpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(String(task.text));

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setIpenModalEdit(false);
    router.refresh();
  };

  const handleDeletetask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          cursor="pointer"
          size={25}
          className="text-blue-500"
          onClick={() => setIpenModalEdit(true)}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setIpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit Task</h3>
            <div className="modal-action">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-full"
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
              />
              <button className="btn">Submit</button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          cursor="pointer"
          size={25}
          className="text-red-500"
          onClick={() => setOpenModalDelete(true)}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure, You want to delete this task?
          </h3>
          <div className="modal-action">
            <button className="btn" onClick={() => handleDeletetask(task.id)}>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
