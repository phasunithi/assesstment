import React from 'react';
import DataForm from './DataForm';
import DataTable from './DataTable';

function UserHomeSector ({dataList,onAddData,onDelete}) {
  return (
    <>
     
     
      <DataTable dataList={dataList} showActions={false} />
    
    </>
  );
}

export default UserHomeSector;
