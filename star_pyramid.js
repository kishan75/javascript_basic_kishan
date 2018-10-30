var num =7;
for(var i=0;i<Math.floor(num/2+1);i++)   //first half
{
  var s="";
  for(var j=0;j<Math.floor(num/2-i);j++)
    s+=" ";
  for(var j=0;j<i*2+1;j++)
    s+="*";
  console.log(s);	
}
for(var i=1;i<Math.floor(num/2+1);i++)   //second half
{
  var s="";
  for(var j=i;j>0;j--)
    s+=" ";
  for(var j=num-i*2;j>0;j--)
    s+="*";
  console.log(s);	
}