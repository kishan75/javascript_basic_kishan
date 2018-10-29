var arr1 = [1,1,6,7,10,60,5,66,4,5,5,7,8];

var arr2 = [2,4,6,3,6,10,55,6,7,8];

for(var i=0;i<arr2.length;i++)
	arr1.push(arr2[i]),delete arr2[i];

console.log(arr1);