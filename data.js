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
 * @brief Search if an employee is present in the storage.
 * @param [in] int id Id of the employee to be searched.
 * @return Employee object if present, null otherwise.
 */
function searchEmployee(id){
    var employee = null;
    for(var i in employees){
        if(employees[i].id == id){
            employee = employees[i];
            break;
        }
    }
    return employee;
}

//Export loadDeafaults function to use it in files which import this module
exports.loadDeafults = loadDefaults;
//Export search function to use it in files which import this module
exports.searchEmployee = searchEmployee;