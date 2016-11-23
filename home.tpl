<!DOCTYPE html>
<html>
    <head>
        <!-- Here goes the metadata -->  
        <meta charset="utf-8">
        <title> Employee Manager </title>
        <style>
            form {
                margin: 10px;
            }
        </style>    
    </head>
    <body>
        <h3>Employee Manager</h3>
        
        <form method="post" action="/search">
            Search for employee <br>
            <input type="number" name="search_id" min="0">
            <input type="submit" value="Search">
        </form>
            
    
        <button onclick="showForm()">Add employee</button>
        
        <form method="post" action="index.js" id="user_form" style=" display:(:if[showForm] ~ [:then ~ block:] [:else ~ none:]:)">
            Employee details <br>
            ID: <input type="number" name="id" min="0" value="(:employee ~ [:id:]:)"><br>
            Name: <input type="text" name="name" value="(:employee ~ [:name:]:)"><br>
            Surname: <input type="text" name="surname" value="(:employee ~ [:surname:]:)"><br>
            Level: <input type="number" name="level" min="0" value="(:employee ~ [:level:]:)"><br>
            Salary: <input type="number" name="salary" min="0" value="(:employee ~ [:salary:]:)"><br>
            <input type="submit" value="Submit">
        </form>      
    <!--
    (:if[resident] ~
        [:then ~ <font color="green"> sei residente </font> :]
        [:else ~ <font color="red"> non sei residente</font> :]
    :)
       -->
    <script src="scripts/style.js"></script>
    </body>
</html>