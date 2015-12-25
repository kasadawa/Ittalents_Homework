
var arr1 = [3,'a','a',2,3,'a',3,'a','a',4,9,3];
var count = 1 ; 
var maxcount = 1 ; 
var maxChar; 
for(var i=0;i< arr1.length;i++){
	if(maxcount < count){
		maxcount = count;
		maxChar = arr1[i-1];
	}
	count = 1;
	for(var g = i+1;g < arr1.length;g++){

		if(arr1[i]==arr1[g]){
			if(i==0){
				maxcount++;
				maxChar = arr1[g];
			}
			else
			count++ ; 
		}
	}a
}
console.log(maxChar,maxcount);
