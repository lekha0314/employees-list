import React from "react";

export const EmployeesContext = React.createContext({
  employees: [],
  addEmployees: () => {},
  deleteEmployee: () => {},
  editEmployee: () => {},
  activeEdit: null,
  setActiveEdit: () => {},
});
