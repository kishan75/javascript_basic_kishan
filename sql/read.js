module.exports = {
    select_all: function (con) {
        con.query("select * from customer",function(err,result,field){
            if(err)
            throw err;
            console.log(result);
           // console.log("fields are");
           //console.log(field[0]);
        });
    },
    select: function (con) {
        var address="california";
        con.query("select * from customer where address = ?",[address],function(err,result,field){
            if(err)
            throw err;
            console.log("data on query");
            console.log(result);
        });
    }
};