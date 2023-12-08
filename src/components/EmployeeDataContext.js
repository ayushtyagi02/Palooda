// EmployeeDataContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

const EmployeeDataContext = createContext();

export const useEmployeeData = () => {
  return useContext(EmployeeDataContext);
};

export const EmployeeDataProvider = ({ children }) => {
 
  async function fetchDataFromApi(apiUrl) {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${response.status}`);
      }
  
      const data = await response.json();
      setEmployeeDatasource(data.payload.employees);
    
      return data.payload.employees;
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }
  const apiUrl = "http://164.52.215.173:6002/api/employees";
  const baseUrl= "http://164.52.215.173:6002/api";
  // const localStorageData = localStorage.getItem('EmployeeData');
  // console.log(localStorageData)
  // const initialTableData = localStorageData ? JSON.parse(localStorageData) : [];

  const [EmployeeDatasource, setEmployeeDatasource] = useState([]);

  useEffect(() => {
    // localStorage.setItem('EmployeeData', JSON.stringify(EmployeeDatasource));
    fetchDataFromApi(apiUrl);
  },[EmployeeDatasource]);


  return (
    <EmployeeDataContext.Provider value={{ EmployeeDatasource }}>
      {children}
    </EmployeeDataContext.Provider>
  );
};
