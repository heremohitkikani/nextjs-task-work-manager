"use client";
import UserContext from "@/context/userContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import { toast } from "react-toastify";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);

  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(tasksId) {
    try {
      const result = await deleteTask(tasksId);
      console.log(result);
      const newTasks = tasks.filter((item) => item._id != tasksId);
      setTasks(newTasks);
      toast.success("Your task is deleted ");
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task !!");
    }
  }

  return (
    <div className="container mx-auto mb-10 mt-28 px-4">
      <div className="bg-gray-900 rounded-lg shadow-md p-6">
        <h1 className="text-xl md:text-3xl  font-bold text-blue-600 mb-5 text-center">
          Your Tasks ({tasks.length})
        </h1>

        {tasks.length === 0 ? (
          <p className="text-center text-white">No tasks available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <Task
                task={task}
                key={task._id}
                deleteTaskParent={deleteTaskParent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowTasks;
