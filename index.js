//express lib
var express = require('express');

//inspect
var util = require('util');

//for templates
var bind = require('bind');

var data = require('./data.js');
//load default data
data.loadDeafults();

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//Expose script files to the client
app.use('/scripts', express.static(__dirname + '/scripts'));

//Set server for searching user
app.use('/search', function(request, response) {
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
    
    //store result of the search
    var employee;
    
	if ( typeof request.body !== 'undefined' && request.body) {
		
		//if query is defined and not null
		if ( typeof request.body.search_id !== 'undefined' && request.body.search_id){
            //search for the employee
            employee = data.searchEmployee(request.body.search_id);
        }

		
	}

    
    //fill template and send as response
	bind.toFile('home.tpl', {employee : employee, showForm : true}, 
        function(data) {
            //write response
            response.end(data);
        });
});


//Set server for adding user
app.use('/add', function(request, response) {
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
    
    //store result of the search
    var employee;
    
	if ( typeof request.body !== 'undefined' && request.body) {
		//data from the form
        var id, name, surname, level, salary;
        
        //id can be null or undefined
        id = request.body.add_id;
        
		//if all other parameters are defined
		if ( typeof request.body.name !== 'undefined' && request.body.name &&
            typeof request.body.surname !== 'undefined' && request.body.surname &&
            typeof request.body.level !== 'undefined' && request.body.level &&
            typeof request.body.salary !== 'undefined' && request.body.salary){
            
            //save parameters
            name = request.body.name;
            surname = request.body.surname;
            level = request.body.level;
            salary = request.body.salary;
            data.addEmployee(id, name, surname, level, salary);
        }

		
	}

    
    //fill template and send as response
	bind.toFile('home.tpl', {showForm : false}, 
        function(data) {
            //write response
            response.end(data);
        });
});


//Set server for base request
app.use('/', function(request, response) {
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "text/html";
    response.writeHead(200, headers);
 
    //fill template and send as response
	bind.toFile('home.tpl', {showForm : false}, 
        function(data) 
        {
            //write response
            response.end(data);
        });
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});