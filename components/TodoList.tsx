import React from 'react'

function TodoList() {
  return (
    <div className="overflow-x-auto">
        <table className="table w-full">
            {/* head */}
            <thead>
            <tr>
                <th>Name</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <td>Cy Ganderton</td>
                <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
                <td>Hart Hagerty</td>
                <td>Purple</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TodoList