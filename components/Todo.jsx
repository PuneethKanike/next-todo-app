import React from 'react'

const Todo = ({id,title,description,mongoId,complete,deleteTodo,completeTodo}) => {
  return (
    <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {id+1}
      </th>
      <td className={`px-6 py-4 ${complete ? "line-through text-gray-400" : "text-gray-800"} transition`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${complete ? "line-through text-gray-400" : "text-gray-800"} transition`}>
        {description}
      </td>
      <td className="px-6 py-4 text-sm">
        <span className={`px-2 py-1 rounded-full ${complete ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
          {complete ? "Completed" : "Not completed"}
        </span>
      </td>
      <td className="px-6 py-4 flex gap-2">
        <button className='py-2 px-4 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all duration-150' onClick={()=>deleteTodo(mongoId)}>Delete</button>
        {
          complete ? "" :
          <button className='py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-150' onClick={()=>completeTodo(mongoId)}>Done</button>
        }
      </td>
    </tr>
  )
}

export default Todo
