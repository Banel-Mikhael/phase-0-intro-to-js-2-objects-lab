const employee={
    name: `banel`,
    streetAddress: `masiki`,
};

function  updateEmployeeWithKeyAndValue(employee, key, value){

    const newEmpolyee= {...employee}
    newEmpolyee.name="Sam";
    newEmpolyee.streetAddress="11 Broadway";
    return newEmpolyee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee.streetAddress="12 Broadway";

    return employee;
}

function  deleteFromEmployeeByKey(employee, key){

    const newEmployee ={...employee}
    delete newEmployee.name
    delete newEmployee.streetAddress
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  
    delete employee.name
    employee.streetAddress='masiki'
    return employee
}