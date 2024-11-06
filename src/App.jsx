
import React,{ useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserHomeSector from './pages/UserHomeSector';
import AdminHomeSector from './pages/AdminHomeSector';
import Owner from './pages/Owner';




function App() {

  const [dataList,setDataList] = useState([]);

  const handleAddData = (newData)=> {
    setDataList([
      ...dataList,
      { id: Date.now(), ...newData } 
    ]);
  };

  const handleDelete = (id) => {
    setDataList(dataList.filter((data) => data.id !== id));
  };

  const handleDeleteAll = () => {
    setDataList([]);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />}>
            
            <Route path="UserHomeSector" element={<UserHomeSector dataList={dataList} />} />
            <Route path="AdminHomeSector" element={<AdminHomeSector dataList={dataList} onAddData={handleAddData} onDelete={handleDelete} onDeleteAll={handleDeleteAll} />} />
          </Route>
          <Route path="/Owner" element={<Owner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
