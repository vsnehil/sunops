$(document).ready(function(){
	$("#moniter").click(function(){
		$("#container1").hide();
		$("#container").fadeIn();
	});
	
	$("#back").click(function(){
		$("#container").hide();
		$("#container1").fadeIn();
	});
	$("#install").click(function(){
		window.location.replace("new/index.html");
	});
	$("#submit").click(function(){
		var email=$("#email").val();
	var pass=$("#password").val();
	$.post("check.php",
		{email,pass},
		function(data,status){
			if(data=='1'){
				//alert(data);
				window.location.replace("registered/index.html");
			}
			else
			{
				alert("invalid user");
			}
		});
	});
	
})