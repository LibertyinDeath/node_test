function translate(str) {
	var arr = ["a","e",'i','o','u'];
	var str1;
	var str2;
	if(arr.indexOf(str[0])!=-1){

		str1=str+"way";
	}
	else{
		var i =1;
		while(arr.indexOf(str[i]!=-1)){
			str2 = str.substr(i,str.length-i);
			i++;
		}
		str1 +=str[i-1]; 
		str1 +=str2+"ay"; 

	}
	return str1;
}

console.log(translate("glove"));
