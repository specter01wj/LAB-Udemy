$(document).ready(function(){
	//Open Database
	var request = indexedDB.open('customermanager',1);
	
	request.onupgradeneeded = function(e){
		var db = e.target.result;
		
		if(!db.objectStoreNames.contains('customers')){
			var os = db.createObjectStore('customers',{keyPath: "id", autoIncrement:true});
			//Create Index for Name
			os.createIndex('name','name',{unique:false});
		}
	}
	
	//Success
	request.onsuccess = function(e){
		console.log('Success: Opened Database...');
		db = e.target.result;
		//Show Customers
		showCustomers();
	}
	
	//Error
	request.onerror = function(e){
		console.log('Error: Could Not Open Database...');
	}
});

//Add Customer
function addCustomer(){
	var name = $('#name').val();
	var email = $('#email').val();
	
	var transaction = db.transaction(["customers"],"readwrite");
	//Ask for ObjectStore
	var store = transaction.objectStore("customers");
	
	//Define Customer
	var customer = {
		name: name,
		email: email
	}
	
	//Perform the Add
	var request = store.add(customer);
	
	//Success
	request.onsuccess = function(e){
		window.location.href="index.html";
	}
	
	//Error
	request.onerror = function(e){
		alert("Sorry, the customer was not added");
		console.log('Error', e.target.error.name);
	}
}

//Display Customers
function showCustomers(e){
	var transaction = db.transaction(["customers"],"readonly");
	//Ask for ObjectStore
	var store = transaction.objectStore("customers");
	var index = store.index('name');
	
	var output = '';
	index.openCursor().onsuccess = function(e){
		var cursor = e.target.result;
		if(cursor){
			output += "<tr id='customer_"+cursor.value.id+"'>";
			output += "<td>"+cursor.value.id+"</td>";
			output += "<td><span class='cursor customer' contenteditable='true' data-field='name' data-id='"+cursor.value.id+"'>"+cursor.value.name+"</span></td>";
			output += "<td><span class='cursor customer' contenteditable='true' data-field='email' data-id='"+cursor.value.id+"'>"+cursor.value.email+"</span></td>";
			output += "<td><a onclick='removeCustomer("+cursor.value.id+")' href=''>Delete</a></td>";
			output += "</tr>";
			cursor.continue();
		}
		$('#customers').html(output);
	}
}

//Delete A Customer
function removeCustomer(id){
	var transaction = db.transaction(["customers"],"readwrite");
	//Ask for ObjectStore
	var store = transaction.objectStore("customers");
	
	var request = store.delete(id);
	
	//Success
	request.onsuccess = function(){
		console.log('customer '+id+' Deleted');
		$('.customer_'+id).remove();
	}
	
	//Error
	request.onerror = function(e){
		alert("Sorry, the customer was not removed");
		console.log('Error', e.target.error.name);
	}
}

//Clear ALL Customers
function clearCustomers(){
	indexedDB.deleteDatabase('customermanager');
	window.location.href="index.html";
}

//Update Customers
$('#customers').on('blur','.customer',function(){
	//Newly entered text
	var newText = $(this).html();
	//Field
	var field = $(this).data('field');
	//Customer ID
	var id = $(this).data('id');
	
	//Get Transaction
	var transaction = db.transaction(["customers"],"readwrite");
	//Ask for ObjectStore
	var store = transaction.objectStore("customers");
	
	var request = store.get(id);
	
	request.onsuccess = function(){
		var data = request.result;
		if(field == 'name'){
			data.name = newText;
		} else if(field == 'email'){
			data.email = newText;
		}
		
		//Store Updated Text
		var requestUpdate = store.put(data);
		
		requestUpdate.onsuccess = function(){
			console.log('Customer field updated...');
		}
		
		requestUpdate.onerror = function(){
			console.log('Error: Customer field NOT updated...');
		}
	}
});