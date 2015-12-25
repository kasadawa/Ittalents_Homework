function calculate(){
	var form = document.getElementsByTagName("form");
	var x = form[0].elements[0].value;
	var y = form[0].elements[1].value;
	var z = form[0].elements[2].value;
	var result;
	if(y=="kg" && z=="lb"){
		result = fromKG(x);
	}
	if(y=="lb" && z=="kg"){
		result = fromLB(x);
	}

	document.getElementById("answer").innerHTML = result;

	function fromKG(x){
		return x*2.20462262;
	};

	function fromLB(x){
		return x/2.20462262;
	};
};