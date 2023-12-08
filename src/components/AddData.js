import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

export const AddData = ({ dataSource, setDataSource, setUpdateBranch,tag,managerData,editedRow,setIsEditing,UpdateBranchfn,isEditing}) => {
  const [idValue, setIdValue] = useState('');
  const [userData, setUserData] = useState({
    id: editedRow ? editedRow.id : managerData.length > 0 ? managerData[0].id : '',
    brname: editedRow ? editedRow.brname : '',
  });
console.log(managerData)
const changeHandler = (e) => {
  setUserData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};


  // Update idValue whenever userData.id changes
  // useEffect(() => {
  //   setIdValue(userData.id);
  // }, [userData.id]);
console.log('userid',userData)
 
const formHandler = (event) => {
  event.preventDefault();

  if (userData.id !== '' && userData.brname !== '') {
    if (editedRow) {
      // If editing, update the edited row in dataSource
      const updatedDataSource = dataSource.map((data) => {
        if (data.id === editedRow.id) {
          return {
            id: userData.id,
            brname: userData.brname,
            name: editedRow.name, // Keep the existing name
            contact: editedRow.contact, // Keep the existing contact
            email: editedRow.email, // Keep the existing email
          };
        }
        return data;
      });
      setDataSource(updatedDataSource);
    } else {
      // If adding a new row, check if the ID exists in dataSource
      const idExists = dataSource.some((data) => data.id === userData.id);
      if (!idExists) {
        const selectedManager = managerData.find((data) => data.id === userData.id);

        if (selectedManager) {
          setDataSource((prev) => [
            ...prev,
            {
              id: selectedManager.id,
              brname: userData.brname,
              name: selectedManager.name,
              contact: selectedManager.contact,
              email: selectedManager.email,
            },
          ]);
        } else {
          alert('Manager not found with selected ID');
        }
      } else {
        alert('ID already exists in the data');
      }
    }

    setUserData({ id: '', brname: '' });
    setUpdateBranch(false);
    setIsEditing(false)
  
  } else {
    alert('Invalid input');
  }
};

  console.log(dataSource)

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(dataSource));
  }, [dataSource]);

  return (
    <div className="absolute ">
      <div className="flex flex-col w-[400px] h-[400px] border-4 bg-white ">
        <RxCross1 className="cursor-pointer border" onClick={()=>UpdateBranchfn()} />
       {/* {tag ?    */}
      
   <form className=" top-[1rem] bg-white flex flex-col gap-3 border-2" onSubmit={formHandler}>
   <label>
   ID
   <select value={userData.id} name="id" onChange={changeHandler}>
    
    { managerData.map((data)=>
   {return(

    <option key={data.id} value={data.id}>{data.id}</option>
   )})}
   </select>
 </label>

     {/* <input required type="text" placeholder="id" value={userData.id} name="id" onChange={changeHandler} /> */}
     <label>
       Branch 
       <input required type="text" placeholder="name" value={userData.brname} name="brname" onChange={changeHandler} />
     </label>
     {/* <label>
       Email
       <input required type="email" placeholder="email" value={userData.email} name="email" onChange={changeHandler} />
     </label> */}
     <button className="bg-yellow-200" onClick={formHandler}>{isEditing ? <div>Update</div>:<div>Add branch</div>}</button>
   </form>
   
   {/* }  */}
      </div>
    </div>
  );
};




