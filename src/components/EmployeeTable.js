import React, { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

const EmployeeTable = () => {
  const { employees, deleteEmployee, setActiveEdit } =
    useContext(EmployeesContext);

  return (
    <>
      <h2>Employee List</h2>
      {employees.length > 0 && (
        <table className="employee-table">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Salary</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {employees.map(({ id, firstName, lastName, salary }) => (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{salary}</td>
                <td>
                  <button
                    className="cta-button"
                    onClick={() => deleteEmployee(id)}
                  >
                    delete
                  </button>
                  <button
                    className="cta-button"
                    onClick={() => setActiveEdit(id)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default EmployeeTable;
