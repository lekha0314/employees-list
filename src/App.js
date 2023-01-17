import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { EmployeesContext } from "./context/EmployeesContext";
import employees from "./data/employees.json";
import "./App.css";

function App() {
  const [employeeList, setEmployeeList] = useState(employees);
  const [activeEdit, setActiveEdit] = useState(null);

  const addEmployees = (data) => {
    setEmployeeList((list) => [...list, { ...data, id: list.length + 1 }]);
  };

  const deleteEmployee = (delete_id) => {
    setEmployeeList((list) => list.filter(({ id }) => id !== delete_id));
  };

  const editEmployee = (data) => {
    const { id } = data;
    setEmployeeList((list) =>
      list.map((employee) => {
        if (employee.id === id) {
          return data;
        }

        return employee;
      })
    );
    setActiveEdit(null);
  };

  const contextValue = {
    employees: employeeList,
    addEmployees,
    deleteEmployee,
    editEmployee,
    activeEdit,
    setActiveEdit,
  };

  return (
    <div className="App">
      <EmployeesContext.Provider value={contextValue}>
        <EmployeeForm />
        <hr />
        <EmployeeTable />
      </EmployeesContext.Provider>
    </div>
  );
}

export default App;
