var read = require("./read");
module.exports = {
    drop_database: function (con) {
        con.query("drop database " + con.database, function (err, result) {
            if (err)
                throw err;
            console.log("database deleted successfully");
        });
    },
    drop_table: function (con) {
        con.query("drop table if exists customer", function (err, result) {
            if (err)
                throw err;
            console.log("table droped successfully ");
        });
    },
    delete_row: function (con) {
        var promise = new Promise(function () {
            con.query("delete from customer where name = ? ", ["rajesh"], function (err, result) {
                if (err)
                    throw err;
                console.log("deleted successfully");
            });
        });
        promise.then(read.select_all(con));

    }
};