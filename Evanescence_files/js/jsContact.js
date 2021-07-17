//podeliti komentare da se prostiru na vise strana (paginacija) i po mogustvu upisati broj komentara po strani;


//global variables


$(document).ready(function()
	{
		//dohvatanje podataka iz eksternog json-a
		/* $.ajax({
			type: 'GET',
			url: 'Evanescence_files/json/comments.json',
			success: function(data)
			{
				var ispis = "<br/>";
				for(var i in data)
				{
					ispis+="<div class='userComment'><h4>"+data[i].username+"</h4></div>";
					ispis+="<div class='commentField'><h4>"+data[i].comment+"</h4></div><br/><hr><br/>";
				}
				ispis+="<br/>";
				document.querySelector("#comments").innerHTML += ispis;
				document.querySelector("#btnSearchComments").addEventListener("click", searchComments);
				$("#btSendComment").click(sendComment);
				$("#btBestAlbum").click(bestAlbum);
				
			}
		}); */
		
		//json comments
		var data = 	[
						{
							"username" : "Pera",
							"comment" : "Evanescence rocks, the best band in the world"
						},
						{
							"username" : "Zdera",
							"comment" : "Evanescence best"
						},
						{
							"username" : "Brutal",
							"comment" : "Evanescence forever"
						},
						{
							"username" : "iMpulsive",
							"comment" : "Evanescence new album best so far"
						}
					];
		var ispis = "<br/>";
		for(var i in data)
		{
			ispis+="<div class='userComment'><h4>"+data[i].username+"</h4></div>";
			ispis+="<div class='commentField'><h4>"+data[i].comment+"</h4></div><br/><hr><br/>";
		}
		ispis+="<br/>";
		document.querySelector("#comments").innerHTML += ispis;
		//document.querySelector("#btnSearchComments").addEventListener("click", searchComments);
		
		$("#btSendComment").click(sendComment);
		$("#btBestAlbum").click(bestAlbum);
	}

);

function bestAlbum(){
	$("input:radio[name=rbBestAlbum]").each(function(index, current)
		{
			if(current.checked)
			{
				var ispis;
				ispis = "<h3>"+current.value+"</h3>";
				$(".divcontact:eq(1)").append(ispis);
				$("form[name=formBestAlbum]").slideUp(2000, "swing");
			}
		}
	);
}
function sendComment()
{
	var user = $("#tbUsernameContact").val();
	var comment = $("#taTextAreaContact").val();
	var userCheck = /^.+$/;
	if(userCheck.test(user) && comment != "") 
	{
		$(".divcontact:eq(2)").append("User: "+user+"<br/>"+"Comment: "+comment+"<br/>");
	}
}
/* function searchComments()
{
	$.ajax({
		type: 'GET',
		url: 'Evanescence_files/json/comments.json',
		success: function(data)
		{
			var ispis = "<br/>";
			var commentValue = document.querySelector("#tbSearchComment").value;
			for(var i in data)
			{
				if(data[i].username.indexOf(commentValue) != -1 || data[i].comment.indexOf(commentValue) != -1)
				{
					ispis+="<div class='userComment'><h4>"+data[i].username+"</h4></div>";
					ispis+="<div class='commentField'><h4>"+data[i].comment+"</h4></div><br/><hr><br/>";
				}
			}
			ispis+="<br/>";
			
			document.querySelector("#comments").innerHTML = ispis;
		}
	});
}
 */

