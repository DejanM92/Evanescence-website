//Global variables
var passwordRep = "";
var ddlDate = new Date();
var ddlMonth = [];
var origYear = false;
var yearNumb;
var origMonth = false;
var monthNumb;
var origDay = false;
var dayNumb;
var userData = new Array();
var userFakeData = new Array();
var gender = document.regForm.rbGender;
//regular expression
var checkTbUser = /^[\w\d-]{3,30}$/;
var checkPsw = /^.{5,30}$/;
var checkTbFirstName = /^([A-Z][a-z]{1,30}\s?){1,4}$/;
var checkTbLastName = /^([A-Z][a-z]{1,30}\s?){1,4}$/;
var checkEmail = /^([A-z\d][\._-]?){3,30}@([a-z]{3,10}\.{1}){1,3}[a-z]{2,4}$/;
window.onload = function()
{
	//ddl calendar year 
	function yearFill()
	{
		if(origYear == false)
				{
					for(var i = 1; i < 100; i++)
					{
						var a = document.createTextNode(ddlDate.getFullYear() - i);
						var b = document.createElement("option");
						b.value = ddlDate.getFullYear() - i;
						b.appendChild(a);
						document.querySelector("#ddlYear").appendChild(b);
					}
					origYear = true; 
				}
	}
	yearFill();
	var gender1 = document.regForm.rbGender;
	for(var i = 0; i < gender1.length; i++)
	{
		gender[i].addEventListener("change", checkGender);
	}
};

					
//beginning of registration

//firstName								
document.querySelector("#tbFirstName").onkeyup = firstNameCheck;
document.querySelector("#tbFirstName").addEventListener("blur", firstNameCheck);
function firstNameCheck()
{
	var a = document.querySelector("#tbFirstName");
	if(!checkTbFirstName.test(a.value)){
		document.querySelector("#default2").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default2").setAttribute("class", "green");
	}
}; 

//lastName		
document.querySelector("#tbLastName").onkeyup = lastNameCheck;
document.querySelector("#tbLastName").addEventListener("blur", lastNameCheck);
function lastNameCheck()
{
	var a = document.querySelector("#tbLastName");
	if(!checkTbLastName.test(a.value)){
		document.querySelector("#default3").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default3").setAttribute("class", "green");
	}
}

//beginning calendar 
//year
document.querySelector("#ddlYear").addEventListener("click", ddlYearCheck);
function ddlYearCheck()
{
	yearNumb = document.querySelector("#ddlYear").options[document.querySelector("#ddlYear").selectedIndex].text;
	if(yearNumb != "Choose")
	{
		document.querySelector("#default4").setAttribute("class", "green");
	}
	else
	{
		document.querySelector("#default4").setAttribute("class", "red");
	}
}

//month
document.querySelector("#ddlMonth").addEventListener("click", ddlMonthCheck);
function ddlMonthCheck()
{
	if(document.querySelector("#ddlMonth").options[document.querySelector("#ddlMonth").options.selectedIndex].text != "Choose")
		{
			document.querySelector("#default5").setAttribute("class", "green");
		}
	else
		{
			document.querySelector("#default5").setAttribute("class", "red");
		}
}
document.querySelector("#ddlYear").addEventListener("change", function()
{
	if(origMonth == true)
		{
			for(var i = 12; i > 0; i--)
			{
				document.querySelector("#ddlMonth").remove(i);
			}
			document.querySelector("#default5").setAttribute("class", "red");
			document.querySelector("#default6").setAttribute("class", "red");
		origMonth = false;
		}
	if(origMonth == false && document.querySelector("#ddlYear").options[this.selectedIndex].value != "year")
		{
			for(var i = 0; i < 12; i++)
			{
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var a = document.createTextNode(months[i]);
				var b = document.createElement("option");
				b.value = i;
				b.appendChild(a);	
				document.querySelector("#ddlMonth").appendChild(b);
			}
			origMonth = true;
		}
	if(origDay == true)
	{
		for(i = document.querySelector("#ddlDay").childNodes.length; i > 0; i--)
		{
			document.querySelector("#ddlDay").remove(i);
		}
	}
	origDay = false;
});

//day	
document.querySelector("#ddlDay").addEventListener("click", ddlDayCheck);
function ddlDayCheck()
{
	if(document.querySelector("#ddlDay").options[document.querySelector("#ddlDay").options.selectedIndex].text != "Choose")
	{
		document.querySelector("#default6").setAttribute("class", "green");
	}
	else
	{
		document.querySelector("#default6").setAttribute("class", "red");
	}
}
document.querySelector("#ddlMonth").addEventListener("change", function()
{
	yearNumb = document.querySelector("#ddlYear").options[document.querySelector("#ddlYear").selectedIndex].value;
	monthNumb = document.querySelector("#ddlMonth").options[document.querySelector("#ddlMonth").selectedIndex].value;
	if(document.querySelector("#ddlDay").childNodes.length > 5)
	{
		for(var i = document.querySelector("#ddlDay").childNodes.length; i > 0; i--)
		{
			document.querySelector("#ddlDay").remove(i);
		}
		document.querySelector("#default6").setAttribute("class", "red");
	}
	origDay = false;
	if(origYear == true && origMonth == true && origDay == false && document.querySelector("#ddlMonth").options[this.selectedIndex].value != "month")
	{
		if(monthNumb == 0 || monthNumb == 2 || monthNumb == 4 || monthNumb == 6 || monthNumb == 7 || monthNumb == 9|| monthNumb == 11)
				{
					for(var i = 1; i <= 31; i++)
					{
						var a = document.createTextNode(i);
						var b = document.createElement("option");
						b.value = i;
						b.appendChild(a);	
						document.querySelector("#ddlDay").appendChild(b);
					}
					
				}
		else 
		{
			if(monthNumb == 3 || monthNumb == 5 || monthNumb == 8 || monthNumb == 10)
				{
					for(var i = 1; i <= 30; i++)
					{
						var a = document.createTextNode(i);
						var b = document.createElement("option");
						b.value = i;
						b.appendChild(a);	
						document.querySelector("#ddlDay").appendChild(b);
					}
				}
			else
			{
				if(yearNumb % 4 == 0)
				{
					for(var i = 1; i <= 29; i++)
					{
						var a = document.createTextNode(i);
						var b = document.createElement("option");
						b.value = i;
						b.appendChild(a);	
						document.querySelector("#ddlDay").appendChild(b);
					}
				}
				else
				{
					for(var i = 1; i <= 28; i++)
					{
						var a = document.createTextNode(i);
						var b = document.createElement("option");
						b.value = i;
						b.appendChild(a);	
						document.querySelector("#ddlDay").appendChild(b);
					}
				}
			}
		}
		origDay = true;
	}
});
//end calendar 

//gender
function checkGender()
{
	for (var i = 0; i < gender.length; i++)
		{
			if(gender[i].checked)
			{
				document.querySelector("#default7").setAttribute("class", "default");
				document.querySelector("#default8").setAttribute("class", "default");
				document.querySelector("#default"+(7+i)).setAttribute("class", "green")
				break;
			}
			else 
			{	
				document.querySelector("#default7").setAttribute("class", "red");
				document.querySelector("#default8").setAttribute("class", "red");
			}
		}
}

//username	
document.querySelector("#tbUsernameReg").onkeyup = usernameCheck;
document.querySelector("#tbUsernameReg").addEventListener("blur", usernameCheck);
function usernameCheck()
{
	var a = document.querySelector("#tbUsernameReg");
	if(!checkTbUser.test(a.value)){
		document.querySelector("#default9").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default9").setAttribute("class", "green");
	}
}

//email
document.querySelector("#tbEmail").onkeyup = emailCheck;
document.querySelector("#tbEmail").addEventListener("blur", emailCheck);
function emailCheck()
{
	var a = document.querySelector("#tbEmail");
	if(!checkEmail.test(a.value)){
		document.querySelector("#default10").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default10").setAttribute("class", "green");
	}
}

//password
document.querySelector("#pswReg").onkeyup = pswRegCheck;
document.querySelector("#pswReg").addEventListener("blur", pswRegCheck);
function pswRegCheck()
{
	var a = document.querySelector("#pswReg");
	if(!checkPsw.test(a.value)){
		document.querySelector("#default11").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default11").setAttribute("class", "green");
		passwordRep = a.value;
	}
}
		
//repeat password
document.querySelector("#pswRegRep").onkeyup = pswRegRepCheck;
document.querySelector("#pswRegRep").addEventListener("blur", pswRegRepCheck);
function pswRegRepCheck()
		{
			var a = document.querySelector("#pswRegRep");
			if(a.value != passwordRep){
				document.querySelector("#default12").setAttribute("class", "red");
			}
			else {
				if(!checkPsw.test(a.value)){
					document.querySelector("#default12").setAttribute("class", "red");
				}
				else{
					document.querySelector("#default12").setAttribute("class", "green");
				}
			}
		}
//end registration 

//Beginning data collecting (button)
document.querySelector("#btConfirm").addEventListener("click", function()
		{
			firstNameCheck();
			lastNameCheck();
			usernameCheck();
			emailCheck();
			pswRegCheck();
			pswRegRepCheck();
			ddlYearCheck();
			ddlMonthCheck();
			ddlDayCheck();
			checkGender();
			
			//first name
			if(!checkTbFirstName.test(document.querySelector("#tbFirstName").value)) 
				userFakeData.push("First name");
			else
				userData.push(document.querySelector("#tbFirstName").value);
			
			//last name
			if(!checkTbLastName.test(document.querySelector("#tbLastName").value))
				userFakeData.push(" Last name");
			else
				userData.push(document.querySelector("#tbLastName").value);
			
			//calendar year
			if(document.querySelector("#ddlYear").selectedIndex)
				userData.push(document.querySelector("#ddlYear").value);
			else
				userFakeData.push(" Year");
			
			//calendar month
			if(document.querySelector("#ddlMonth").selectedIndex)
				userData.push(document.querySelector("#ddlMonth").value);
			else
				userFakeData.push(" Month");
			
			//calendar day
			if(document.querySelector("#ddlDay").selectedIndex)
				userData.push(document.querySelector("#ddlDay").value);
			else
				userFakeData.push(" Day");
			
			//gender
			for (var i = 0; i < gender.length; i++)
			{
				if(gender[i].checked)
				{
					userData.push(gender[i].value);
					break;
				}
				else 
				{	
					userFakeData.push(" gender"+[i]);
				}
			}
			
			//username
			if(!checkTbUser.test(document.querySelector("#tbUsernameReg").value))
				userFakeData.push(" Username");
			else
				userData.push(document.querySelector("#tbUsernameReg").value);
			
			//email
			if(!checkEmail.test(document.querySelector("#tbEmail").value))
				userFakeData.push(" Email");
			else
				userData.push(document.querySelector("#tbEmail").value);

			//password
			if(!checkPsw.test(document.querySelector("#pswReg").value))
				userFakeData.push(" Password");
			else
				userData.push(document.querySelector("#pswReg").value);

			//password repeat
			if(document.querySelector("#pswRegRep").value != passwordRep)
				userFakeData.push(" Repeat password");
			else 
			{
				if(!checkPsw.test(document.querySelector("#pswRegRep").value))
					userFakeData.push(" Repeat password");
				else
					userData.push(document.querySelector("#pswRegRep").value);
			}
			
			//submit
			if(userData.length == 10)
			{
				//document.querySelector("#btConfirm").setAttribute("type", "Submit");
				console.log("Uspesno!");
				console.log("Real: " +userData);
				userData.splice(0, userData.length);
				userFakeData.splice(0, userFakeData.length);
				console.log("Real Array: " +userData.length);
				console.log("Fake Array: " +userFakeData.length);
				console.log("\n")
			}
			else 
			{
				console.log("Neuspesno!");
				console.log("Fake: " +userFakeData);
				userData.splice(0, userData.length);
				userFakeData.splice(0, userFakeData.length);
				console.log("Real Array: " +userData.length);
				console.log("Fake Array: " +userFakeData.length);
				console.log("\n")
			}
		}
	);
//End data collecting (json)

//reset
document.querySelector("#resetReg").onclick = resetingReg;
function resetingReg()
{
	document.querySelector("#default2").setAttribute("class", "red");
	document.querySelector("#default3").setAttribute("class", "red");
	document.querySelector("#default4").setAttribute("class", "red");
	document.querySelector("#default5").setAttribute("class", "red");
	document.querySelector("#default6").setAttribute("class", "red");
	document.querySelector("#default7").setAttribute("class", "red");
	document.querySelector("#default8").setAttribute("class", "red");
	document.querySelector("#default9").setAttribute("class", "red");
	document.querySelector("#default10").setAttribute("class", "red");
	document.querySelector("#default11").setAttribute("class", "red");
	document.querySelector("#default12").setAttribute("class", "red");
};
//End reset