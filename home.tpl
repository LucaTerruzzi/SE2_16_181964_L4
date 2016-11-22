<!DOCTYPE html>
<html>
    <head>
      <!-- Here goes the metadata -->  
      <meta charset="utf-8">
      <title> Employee Manager </title>
    </head>
    <body>
        <h3>Employee Manager</h3>
        
        <p>
            <form method="post" action="/search">
                Search for employee <br>
                <input type="number" name="search_id" min="0">
                <input type="submit" value="Search">
            </form>
        </p>
            
    
        <button>Add employee</button>
        
        <p>
            <form method="post" action="index.js" id="user_form">
                Employee details <br>
                ID: <input type="number" name="id" min="0" value="(:id ~ '':)"><br>
                Name: <input type="text" name="name" value="(:name ~ '':)"><br>
                Surname: <input type="text" name="surname" value="(:surname ~ '':)"><br>
                Level: <input type="number" name="level" min="0" value="(:level ~ '':)"><br>
                Salary: <input type="number" name="salary" min="0" value="(:salary ~ '':)"><br>
                <input type="submit" value="Add">
            </form>
        </p>      
    <!--
    (:if[resident] ~
        [:then ~ <font color="green"> sei residente </font> :]
        [:else ~ <font color="red"> non sei residente</font> :]
    :)
       -->
    <script src="scripts/style.js"></script>
    </body>
</html>