$(document).ready(function()
{
	var imag = "";
	$.ajax({
		type:"GET",
		url: "Evanescence_files/json/gallery.json",
		success:function(data)
		{
			for(var i = 0; i <data.length; i++)
			{
				imag += "<div class='galleryDiv'><a href='"+data[i].url+"'><img src='"+data[i].url+"' alt='"+data[i].alt+"'/></a></div>";
			}
			$("#omotgallery figure").append(imag);
			$("#omotgallery figure").append("<div class='cleaner'></div>");
			$("figure a").hide();
			$("figure a:even").fadeIn(2000);
			$("figure a:odd").fadeIn(5000);
			$(".galleryDiv a").vanillabox();
			$(".galleryDiv a img").hover(
				function()
				{
					$(this).animate({width: "+=20px", height: "+=20px", paddingLeft: "-=10px"});
				},
				function()
				{
					$(this).animate({width: "-=20px", height: "-=20px", paddingLeft: "+=10px"});
				}
			);
		}
	})
});
