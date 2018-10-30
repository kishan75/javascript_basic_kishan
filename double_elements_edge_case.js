var arr1 = [1,1,6,7,"type",60,5,'t',5,5,7,8];
arr1  =  arr1.map( function (num) 
  {
    if(typeof num==Number)
      return num*2
    else
      return num;
  });
console.log(arr1);
