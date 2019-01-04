var read=require("./read");
module.exports = {
    all: function (con) {
        var promise=new Promise(function(){
        new_address = "indore";
        new_age = 56;
        con.query("update customer set address = ?,age = ?", [new_address, new_age], function (err, result) {
            if (err)
                throw err;
            console.log("data updated");
        });
    });
    promise.then(read.select_all(con));
    },
    query: function (con) {
        var promise= new Promise(function(){
        con.query("update customer set address = ?,name = ? where age = ? and address = ?", ["indore", "ronda", 55, "california"], function (err, result) {
            if (err)
                throw err;
            console.log("data updated");
        });
    });
    promise.then(read.select_all(con));
    }
};