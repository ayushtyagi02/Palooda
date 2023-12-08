import React from 'react'

export const AddBranchForm = (prop) => {
    const changeHandler=prop.changeHandler;
    const formHandler=prop.formHandler;
    const userData=prop.userData;
  return (
    <div>
            <form className="fixed top-[14rem] bg-white flex flex-col gap-3 border-2" onSubmit={formHandler}>
    <label>
      ID
      <input type="text" placeholder="id" value={userData.id} name="id" onChange={changeHandler} />
    </label>
    <label>
      Name
      <input type="text" placeholder="name" value={userData.name} name="name" onChange={changeHandler} />
    </label>
    <label>
      Email
      <input type="email" placeholder="email" value={userData.email} name="email" onChange={changeHandler} />
    </label>
    <button className="bg-yellow-200" onClick={formHandler}>Add branch</button>
  </form>
    </div>

  )
}
