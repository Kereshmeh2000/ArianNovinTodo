import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../../redux/taskSlice";
import { openModal } from "../../redux/modalSlice";
import Modal from "../Modal/Modal";

const TaskList = () => {
  const { isOpen, taskIdToDelete } = useSelector((state) => state.modal);
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Changing The Status
  const handleStatusChange = (id, status) => {
    dispatch(setStatus({ id, status }));
  };

  // Filtering The Tasks Throw Their Status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "همه") return true;
    return task.status === filter;
  });

  return (
    <div className="flex flex-col items-center mt-10">
      {filteredTasks.map((task) => {
        let textDecoration = "none";
        if (task.status === "انجام شده") {
          textDecoration = "line-through";
        }

        return (
          <div
            key={task.id}
            className="grid grid-cols-3 gap-5 items-center mb-4"
          >
            <span className="dark:bg-custom-purple3 border border-custom-purple text-custom-purple rounded p-1 dark:text-custom-white w-full ">
              {task.description}
            </span>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
              className="rounded p-1 border border-custom-purple text-custom-purple dark:bg-custom-purple2 dark:text-white"
            >
              <option value="انجام نشده">انجام نشده</option>
              <option value="در حال انجام">در حال انجام</option>
              <option value="انجام شده">انجام شده</option>
            </select>
            <button
              onClick={() => dispatch(openModal(task.id))}
              className=" rounded py-1 border border-custom-purple test-custom-purple dark:bg-custom-purple2 dark:text-white"
            >
              حذف
            </button>

            {isOpen && <Modal id={taskIdToDelete} />}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
