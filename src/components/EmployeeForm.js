import React, { useContext, useRef, useEffect } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

const EmployeeForm = () => {
  const { addEmployees, activeEdit, employees, editEmployee } =
    useContext(EmployeesContext);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const salaryRef = useRef();

  useEffect(() => {
    if (activeEdit) {
      const { firstName, lastName, salary } = employees.find(
        ({ id }) => id === activeEdit
      );
      firstNameRef.current.value = firstName;
      lastNameRef.current.value = lastName;
      salaryRef.current.value = salary;
    }
  }, [activeEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fn = activeEdit ? editEmployee : addEmployees;
    fn({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      salary: salaryRef.current.value,
      id: activeEdit,
    });
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    salaryRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
      <div className="field">
        <label>First name: </label>
        <input ref={firstNameRef} />
      </div>
      <div className="field">
        <label>Last name: </label>
        <input ref={lastNameRef} />
      </div>
      <div className="field">
        <label>Salary: </label>
        <input ref={salaryRef} type="number" />
      </div>
      <button type="submit">{activeEdit ? "Edit" : "Add"} Employee</button>
    </form>
  );
};

export default EmployeeForm;
