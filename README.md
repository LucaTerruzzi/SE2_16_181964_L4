# SE2_16_181964_L4
Simple application for managing employees.

The server run on port 1337. 
Launch the application with the command 'node index.js' in the root of the project.
To use the application on the same machine where it is launched visit http://127.0.0.1:1337

For demo purpose 3 employees are already present, whit IDs 0, 1, 2.

To search an employee insert his/her ID in the field "Search for employee" and click "Search". If the employee exists, a form with all the info will appear, otherwise the form will be empty.

To delete an employee insert his/her ID in the field "Delete employee" and click "Delete". If present the employee will be deleted. A feedback message will appear.

To add an employee click the button "Add employee". A form will appear. ID field must be positive or 0. If it is left empty the first available ID is assigned. All other fields can't be empty. Level and Salary must be positive or 0. To confirm press "Submit". If an employee with the same id is already present, his/her data are overwritten. A feedback message will appear.

After serching for an employee, his/her data can be changed modifing the values in the form and clicking "Submit". 

The button "Add employee", a part from showing/hiding the form, will reset the form data and cancel the feedback message(if present).

