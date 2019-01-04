var read = require("./read");
module.exports=function db(con) {
    var data = [
        ["vicky", 18, "street colony"],
        ["rajesh", 20, "hoshangabad"],
        ["johny", 55, "california"],
        ["johny", 61, "california"]
    ];
    con.query("insert into customer (name,age,address) values ?",[data],function(err,result){
         if(err)
         throw err;
         console.log(result);
         console.log("data inserted");
    });
    read.select_all(con);
};