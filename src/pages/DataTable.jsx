import React from 'react';


function DataTable({ dataList, onDelete, showActions = true }) {
    return (
      <div className="flex justify-center items-center bg-gray-100 py-4">
        <table className="w-3/4 sm:w-2/3 lg:w-1/2 table-auto border-collapse border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Last Name</th>
              <th className="border border-gray-300 px-4 py-2">Position</th>
              {showActions && <th className="border border-gray-300 px-4 py-2">Action</th>}
            </tr>
          </thead>
          <tbody>
            {dataList.map((data) => (
              <tr key={data.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{data.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{data.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{data.position}</td>
                {showActions && (
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => onDelete(data.id)} 
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DataTable;
