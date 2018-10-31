var data = [1, 1, 6, 7, 10, 60, 5, 66, 4, 5, 5, 7, 8];
var hash_table = {};
for (var i = 0; i < data.length; i++) {
  if (hash_table[data[i]] == undefined)
    hash_table[data[i]] = 1;
  else
    hash_table[data[i]]++;
}
console.log(hash_table);