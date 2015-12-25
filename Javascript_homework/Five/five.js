function read(){
	var form = document.getElementById("frm");
	var field1 = form.elements[0].value;
	var field2 = form.elements[1].value;
	document.getElementById("result").innerHTML = Math.pow(parseInt(field1),3)*3.14*4/3;
};
