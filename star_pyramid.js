var num = 7;
for (var i = 0; i < num; i++) //first half
{
  var s = "";
  for (var j = num - 1 - i; j > 0; j--)
    s += " ";
  for (var j = (i * 2) + 1; j > 0; j--)
    s += "*";
  console.log(s);
}