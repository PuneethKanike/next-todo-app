"use client"

import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const [formdata, setFormData] = useState({
    title:"",
    description:""
  })

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const response = await axios('/api');
    setTodoData(response.data.todos)
  }

  const deleteTodo = async (id) => {
    const response = await axios.delete('/api',{
      params:{
        mongoId:id
      }
    });
    toast.success(response.data.message)
    await fetchTodos()
  }

  const completeTodo = async (id) => {
    const response = await axios.put('/api',{}, {
      params:{
        mongoId:id
      }
    })
    toast.success(response.data.message)
    await fetchTodos()
  }

  useEffect(()=>{
    fetchTodos()
  },[])

  console.log(todoData)

  const onChangeHandler = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form=>({...form,[name]:value}))
    
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api',formdata)
      toast.success(response.data.message)
      setFormData({
        title:"",
        description:""
      })
      await fetchTodos()
    } catch (error) {
      toast.error("Something went wrong")
    }
   
  }

  console.log(formdata)

  return (
    <>
     <ToastContainer  />
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 w-[90%] max-w-[600px] mt-24 p-6 bg-white shadow-lg rounded-lg mx-auto">
        <input type="text" value={formdata.title} onChange={onChangeHandler} name="title" placeholder="Enter title" className="
          px-3
          py-2
          border-2
          border-gray-300
          rounded-md
          w-full
          focus:outline-none
          focus:border-blue-400
        " />
        <textarea value={formdata.description} name="description" onChange={onChangeHandler} placeholder="Enter description" className="
          px-3
          py-2
          border-2
          border-gray-300
          rounded-md
          w-full
          focus:outline-none
          focus:border-blue-400
        "></textarea>
        <button type="submit" className="
        bg-blue-500
        py-3
        px-11
        text-white
        rounded-md
        shadow-md
        hover:bg-blue-600
        transition-all
        duration-150
        ">Add Todo</button>
      </form>
      

      <div className="relative overflow-x-auto mt-12 w-[80%] mx-auto">
        <table className="w-full text-sm text-left text-gray-500 shadow-md rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 rounded-t-lg">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index)=>{
                return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
            })}
              
          </tbody>
        </table>
      </div>

    </>
  );
}
