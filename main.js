var a;


function show()
{
	
	if (a==1){
		document.getElementById("form").style.display="block";
		return a=0;
	}
	else{
		document.getElementById("form").style.display="none";
		return a=1;
	}
}
function submit()
{
	var n=document.getElementById("name-input").value;
	var e=document.getElementById("email-input").value;
	
	window.alert("submission sucessfull!"+"\n"+"name:"+n);
}

