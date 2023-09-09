import { Outlet } from "react-router-dom";
// import Tabledata from "../assets/Tabledata";
import { useEffect, useState } from "react";
import "./Branch.css"
import { render } from "@testing-library/react";
function Branch() {
  const Tabledata=[
    {id: '1', name: 'Suresh', email:'suresh@gmail.com'},
    {id: '2', name: 'Mahesh', email:'mahesh@gmail.com'},
    {id: '3', name: 'Ankit', email:'ankit@gmail.com'},
    {id: '4', name: 'Prabhu', email:'prabhu@gmail.com'},
    {id: '5', name: 'Pratik', email:'pratik@gmail.com'},
    {id: '6', name: 'Ayush', email:'ayush@gmail.com'},
    {id: '7', name: 'Ujjwal', email:'ujjwal@gmail.com'},
]

  
  const [value, setValue] = useState('');
  const [dataSource, setDataSource] = useState(Tabledata);
  const [tableFilter, setTableFilter] = useState([]);
  const [userData, setuserData] = useState({id:'' ,name: '', email: ''});
  const filterData = (e) => {
    if (e.target.value != '') {
      setValue(e.target.value);
      const filterTable = dataSource.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
      setTableFilter([...filterTable])
    }
    else {
      setValue(e.target.value);
      setDataSource([...dataSource])
    }
}
function formHandler(e){
  setuserData((prev)=>({
   ...prev, [e.target.name]: e.target.value
   
})
  )
 
}
useEffect(() => {
  //Runs on every render
 
});
Tabledata.push(userData)
function dataAdder(event){
  render()
  event.preventDefault();
  console.log()
setDataSource((prev)=>[...prev,userData])
  setuserData({id:'',name: '', email: ''})

}
  return (
    <div className="mt-[100px] fixed bottom-[13rem] w-10/12">
      <Outlet />
      <form className="fixed top-[14rem]" onSubmit={dataAdder}>
      <input type="text" placeholder="id" value={userData.id} name="id" onChange={formHandler} />
      <input type="text" placeholder="name" value={userData.name} name="name" onChange={formHandler} />
      <input type="email" placeholder="email" value={userData.email} name="email" onChange={formHandler} />
      <button >Add branch</button>
      </form>
      
     
      <div class="input-group w-full fixed top-[11rem] right-3 mb-3 flex justify-end">

        <input type="text" className="border-b-2 pl-2 mr-1 w-2/12" value={value} placeholder="Search" onChange={filterData} aria-label="Username" aria-describedby="basic-addon1" />
        <button type="button" className="border-2 bg-yellow-400 font-semibold px-[80px] py-2">Add Branch</button>
      </div>
      <table className="table fixed top-[16rem]">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>

          </tr>
        </thead>
        <tbody>
          <></>
          {
            value.length > 0 ?
           (  tableFilter.map((data) => {
                return (
                  <tr>
                    <td scope="row">{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>

                  </tr>
                )

              }))
              :
             ( dataSource.map((data) => {
              console.log(dataSource)
                return (
                  <tr>
                    <td scope="row">{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                  </tr>)
            }))
}
  </tbody>
      </table>
    </div>
  );
}

export default Branch;
