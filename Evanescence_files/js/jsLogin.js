//Global variables


//regular expression
var checkTbUser = /^[\w\d-]{3,30}$/;
var checkPsw = /^.{5,30}$/;

window.onload = function()
	{
		document.querySelector("#tbUsernameLog").addEventListener("blur", tbUsernameLog);
		document.querySelector("#tbUsernameLog").onkeyup = tbUsernameLog;
		document.querySelector("#pswLog").addEventListener("blur", pswLog);
		document.querySelector("#pswLog").onkeyup = pswLog;
		document.querySelector("#submit1").addEventListener("click", submit1);
	};

//begining login

//username
function tbUsernameLog()
{
	var a = document.querySelector("#tbUsernameLog");
	if(!checkTbUser.test(a.value)){
		document.querySelector("#default").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default").setAttribute("class", "green");
	}
}

//password		
function pswLog()
{
	var a = document.querySelector("#pswLog");
	if(!checkPsw.test(a.value)){
		document.querySelector("#default1").setAttribute("class", "red");
	}
	else{
		document.querySelector("#default1").setAttribute("class", "green");
	}
}

//submit
function submit1()
{
	tbUsernameLog();
	pswLog();
}
document.querySelector("#resetLog").onclick = resetingLog;
function resetingLog()
{
	document.querySelector("#default").setAttribute("class", "red");
	document.querySelector("#default1").setAttribute("class", "red");
}
//end login
