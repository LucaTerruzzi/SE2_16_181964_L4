/**
 * @brief Function for creating the employee object.
 * @param [in] int id Id of the employee.
 * @param [in] string name Name of the employee.
 * @param [in] string surname Surname of the employee.
 * @param [in] int level Level of the employee.
 * @param [in] int salary Salary of the employee.
 */
function Employee(id, name, surname, level, salary){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.level = level;
    this.salary = salary;
}

//Stored employees
var employees = [];

//First available id
var nextId = 0;

/**
 * @brief Populate stored employees with some defaults.
 */
function loadDefaults(){
    employees.push(new Employee(0, "Gianni", "Rossi", 2, 20000));
    employees.push(new Employee(1, "Gino", "Bianchi", 3, 25000));
    employees.push(new Employee(2, "Roberto", "Neri", 4, 40000));
    nextId += 3;
    
}

/**
 * @brief Find next available id.
 */
function findNext(){
    while(searchEmployee(nextId)){
       nextId++; 
    }
}

/**
 * @brief Search if an employee is present in the storage.
 * @param [in] int id Id of the employee to be searched.
 * @return Employee object if present, null otherwise.
 */
function searchEmployee(id){
    var employee = null;
    for(var i in employees){
        if(employees[i] != null && employees[i].id == id){
            employee = employees[i];
            break;
        }
    }
    return employee;
}

/**
 * @brief Add employee to the storage. If already present, edit it.
 * @param [in] int id Id of the employee.
 * @param [in] string name Name of the employee.
 * @param [in] string surname Surname of the employee.
 * @param [in] int level Level of the employee.
 * @param [in] int salary Salary of the employee.
 * @return feedback message.
 */
function addEmployee(id, name, surname, level, salary){
    //parameters validity check
    if(id < 0 || name === '' || surname === '' || level < 0 || salary < 0){
        return "Nothing added. Check your parameters.";
    }
    //if id not specified
    if(!id){
        //add employee with first available id
        findNext();
        employees.push(new Employee(nextId, name, surname, level, salary));
        return "Added new employee with ID: " + nextId;
    }else{
        var employee = searchEmployee(id);
        if(employee != null){
            employee.name = name;
            employee.surname = surname;
            employee.level = level;
            employee.salary = salary;
            return "Modified employee with ID: " + id;
        }else{
            employees.push(new Employee(id, name, surname, level, salary));
            return "Created new employee with ID: " + id;
        }
    }
}

/**
 * @brief Delete an employee from the storage if present.
 * @param [in] int id Id of the employee to be deleted.
 * @return feedback message.
 */
function deleteEmployee(id){
    for(var i in employees){
        if(employees[i] != null && employees[i].id == id){
            employees.splice(i, 1);
            nextId = id;
            return "Deleted employee whith ID: " + id;
        }
    }
    return "Nothing to delete, ID not present.";
}

//Export loadDeafaults function to use it in files which import this module
exports.loadDeafults = loadDefaults;
//Export searchEmployee function to use it in files which import this module
exports.searchEmployee = searchEmployee;
//Export addEmployee function to use it in files which import this module
exports.addEmployee = addEmployee;
//Export deleteEmployee function to use it in files which import this module
exports.deleteEmployee = deleteEmployee;