"use client"

import Todo from "@/components/Todo";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const [formdata, setFormData] = useState({
    title:"",
    description:""
  })

  const onChangeHandler = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form=>({...form,[name]:value}))
    
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    
    try {
      toast.success("Todo added successfully")
    } catch (error) {
      toast.error("Something went wrong")
    }
   
  }

  console.log(formdata)

  return (
    <>
     <ToastContainer  />
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input type="text" value={formdata.title} onChange={onChangeHandler} name="title" placeholder="Enter title" className="
          px-3
          py-2
          border-2
          w-full
          rounded-md
        " />
        <textarea value={formdata.description} name="description" onChange={onChangeHandler} placeholder="Enter description" className="
          px-3
          py-2
          border-2
          w-full
          rounded-md
        "></textarea>
        <button type="submit" className="
        bg-blue-400
        py-3
        px-11
        text-white
        rounded-md
        ">Add Todo</button>
      </form>
      

<div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
            
            <Todo/>
            <Todo/>
            <Todo/>
            
        </tbody>
    </table>
</div>

    </>
  );
}
