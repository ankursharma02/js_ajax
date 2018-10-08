var persons=new Array();
function addPerson()
{
	if(validate())
	{
		var myForm=document.forms[0];
		var firstName=myForm.firstName;
		var lastName=myForm.lastName;
		var age=myForm.age;
		var email=myForm.email;
		var person={firstName:firstName.value,lastName:lastName.value,age:age.value,email:email.value};
		
		if(myForm.editRecordId.value==-1)
		{
			persons[persons.length]=person;
		}
		else
		{
			persons.splice(myForm.editRecordId.value,0,person);
			myForm.editRecordId.value=-1;
		}
	//	persons[persons.length]=person;
		myForm.reset();
		populateData();

	}
}
function populateData()
{
	if(persons.length>0)
	{
		var tableStr="<table border='1'>";
		tableStr+="<tr><th>SNo</th><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th><th>DELETE</th></tr>";
		var person;
		for(var i=0;i<persons.length;i++)
		{
			person=persons[i];
			tableStr+="<tr>";
			tableStr+="<td><a href='#' onclick='retriave("+i+")'>"+(i+1)+"</td>";
	//		tableStr+="<td>"+i+1+"</td>";
			tableStr+="<td>"+person.firstName+"</td>";
			tableStr+="<td>"+person.lastName+"</td>";
			tableStr+="<td>"+person.age+"</td>";
			tableStr+="<td>"+person.email+"</td>";
			tableStr+="<td><a href='#' onclick='deleteRecord("+i+")'>Delete_"+person.firstName+"</td>";
			
			tableStr+="<tr>";
		}
		tableStr+="</table>";
		document.getElementById("data").innerHTML=tableStr;
		document.getElementById("submit").innerHTML="<input type='submit' value='submit' />";
	}
	else
	{
		document.getElementById("data").innerHTML="No Records to Display";
		document.getElementById("submit").innerHTML="";


	}
}

function validate()
{
	//validate form data;
	return true;
}
function retriave(index)
{
	var person=persons[index];
	persons.splice(index,1);
	var myform=document.forms[0];
	myform.firstName.value=person.firstName;
	myform.lastName.value=person.lastName;
	myform.age.value=person.age;
	myform.email.value=person.email;
	myform.editRecordId.value=index;
	populateData();

}
function deleteRecord(index)
{
	persons.splice(index,1);
	populateData();


}
