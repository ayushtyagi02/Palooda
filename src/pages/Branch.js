import React, { useState, useEffect } from "react";
import { AddData } from "../components/AddData";
import { useEmployeeData } from "../components/EmployeeDataContext";
function Branch() {
  const [ManagerDatasource, setManagerData ] = useState([])
  
  const apiUrl='http://164.52.215.173:6002/api/employees/role/manager'
 
  async function fetchDataFromApi(apiUrl) {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${response.status}`);
      }
  
      const data = await response.json();
      setManagerData(data.payload.employees);
    
      return data.payload.employees;
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }
console.log(ManagerDatasource)

  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(initialTableData);
  const [tableFilter, setTableFilter] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedRow, setEditedRow] = useState(null);

  const editRow = (row) => {
    setIsEditing(!isEditing);
    setEditedRow(row);
  };


  function filterManagers(ManagerDatasource) {
    return ManagerDatasource.filter(item => item.role === 'manager');
  }
// console.log(ManagerDatasource)

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  const deleteRow = (index) => {
    const updatedData = [...dataSource];
    updatedData.splice(index, 1);
    setDataSource(updatedData);
  };

  useEffect(() => {
    // localStorage.setItem('EmployeeData', JSON.stringify(EmployeeDatasource));
    fetchDataFromApi(apiUrl);
  },[EmployeeDatasource]);

console.log(managerData)
  const [UpdateBranch, setUpdateBranch] = useState(false);


  function UpdateBranchfn() {
    setUpdateBranch(false);
    setIsEditing(false);
    // console.log(UpdateBranch);
  }


  return (





    <div className=" flex flex-col relative min-h-4  w-[97%] m-auto  mt-[5rem]">
      
      <div>
        {UpdateBranch  && (
          <div className="h-screen w-full absolute flex justify-center items-center z-20">
            <AddData
              managerData={managerData}
              setUpdateBranch={setUpdateBranch}
              dataSource={dataSource}
              editedRow={editedRow}
              setDataSource={setDataSource}
              editRow={editRow}
              UpdateBranchfn={UpdateBranchfn}
              setIsEditing={setIsEditing}
              
            />
          </div>
        )}
      </div>
      <div>
        {isEditing  && (
          <div className="h-screen w-full absolute flex justify-center items-center z-20">
            <AddData
            isEditing={isEditing}
              managerData={managerData}
              setUpdateBranch={setUpdateBranch}
              dataSource={dataSource}
              editedRow={editedRow}
              setDataSource={setDataSource}
              editRow={editRow}
               setIsEditing={setIsEditing}
               UpdateBranchfn={UpdateBranchfn}
              
            />
          </div>
        )}
      </div>

<div className="absolute z-10 top-11 w-full">
<div className="input-group w-full top-7 right-3 mb-3 flex justify-end">
        <input
          type="text"
          className="border-b-2 pl-2 mr-1 w-2/12"
          value={value}
          placeholder="Search"
          onChange={filterData}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button type="button" onClick={() => setUpdateBranch(true)} className="border-2 bg-yellow-400 font-semibold px-[80px] py-2">
          Add Branch
        </button>
      </div>
  <div className="mt-[120px]"><table className="table">
  <thead>
    <tr className="">
      <th scope="col">#</th>
      <th scope="col">Branch</th>
      <th scope="col">Manager</th>
      <th scope="col">Contact</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {value.length > 0 ? (
      tableFilter.map((data, index) => {
        return (
          <tr key={data.id}>
            <td scope="row">{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>
            <div className="flex gap-5">
              <button onClick={() => editRow(data)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
           <button onClick={() => deleteRow(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>
            </td>
          </tr>
        );
      })
    ) : (
      
      dataSource.map((data, index) => {
        return (
          <tr key={data.id}>
            <td scope="row">{data.id}</td>
            <td>{data.brname}</td>
            <td>{data.name}</td>
            <td>{data.contact}</td>
            <td>{data.email}</td>
            <td>
            <div className="flex gap-5">
              <button onClick={() => editRow(data)} > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
           <button onClick={() => deleteRow(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>
            </td>
          </tr>

        );
      })
    )}
  </tbody>
</table></div>
 </div>
     
</div>
);
}

export default Branch;







