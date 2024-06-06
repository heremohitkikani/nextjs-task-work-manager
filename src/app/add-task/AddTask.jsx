'use client';

import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "64a506ab413f1d5bcafcdbec",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added !!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex mt-14 flex-col items-center justify-center min-h-screen py-10 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="flex justify-center mb-5">
          <Image src={loginSvg} alt="Login banner" className="w-20 sm:w-24" />
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-center text-white mb-6">Add Your Task</h1>

        <form onSubmit={handleAddTask}>
          <div className="mb-4">
            <label htmlFor="task_title" className="block text-sm font-medium text-white mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none focus:border-blue-500 text-white"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="task_content" className="block text-sm font-medium text-white mb-2">
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none focus:border-blue-500 text-white"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="task_status" className="block text-sm font-medium text-white mb-2">
              Status
            </label>
            <select
              id="task_status"
              className="pe-10 w-full py-3 ps-3 rounded-lg bg-gray-700 border border-gray-500 focus:outline-none focus:border-blue-500 text-white"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
              required
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() => setTask({ title: "", content: "", status: "none" })}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
