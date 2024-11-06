import React, {useState} from 'react';


function DataForm({ onAddData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data before submit:", formData);

    if (formData.firstName && formData.lastName && formData.position) {
      onAddData(formData);
      setFormData({ firstName: "", lastName: "", position: "" });
    } else {
      console.log("Please fill in all fields");
    }
  };

  return (
    <div className="flex justify-center item-center">
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex space-x-4 items-center"> 
        <div >
          
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Name" 
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        
        <div >
          
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="LastName" 
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        
        <div >
          
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position" 
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>

      </div>    
    </form>
    </div>
  );
}

export default DataForm;