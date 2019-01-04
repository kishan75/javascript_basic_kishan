module.exports = {
    create_database: function (con) {
        return new Promise(function () {
            con.query("create database " + con.database, function (err, result) {
                if (err)
                    throw err;
                console.log("database created successfully");
            });
        });
    },
    create_table: function (con) {
        con.query("create table customer (name varchar(255),age INT,address varchar(255))", function (err, result) {
            if (err)
                throw err;
            console.log("table created successfully");
        });
    }
};